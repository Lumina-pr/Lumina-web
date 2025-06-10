"use client";

import React, { useState, useEffect } from "react";
import DeviceRow from "@/components/molecules/DeviceRow";
import Button from "../atoms/Button";
import PageTitles from "../atoms/PageTitles";
import CreateDeviceModal from "../organisms/CreateDeviceModal";
import EditDeviceModal from "../organisms/EditDeviceModal";
import { useDeviceStore } from "@/store/deviceStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSync,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import DeviceStatus from "../atoms/DeviceStatus";

// Extend the Device type to include only what we need
type ExtendedDevice = {
  id: string;
  name: string;
  pingStatus?: "online" | "offline" | "loading" | null;
};

const DeviceTable: React.FC = () => {
  // Get our devices and actions from the device store
  const {
    devices,
    isLoading,
    error,
    fetchDevices,
    createDevice,
    updateDevice,
    deleteDevice,
    pingAllDevices,
    pingDevice,
  } = useDeviceStore();

  // Local state for UI interactions
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingDevice, setEditingDevice] = useState<ExtendedDevice | null>(
    null
  );
  const [isPingingAll, setIsPingingAll] = useState(false);

  // Fetch devices on component mount
  useEffect(() => {
    fetchDevices().then(() => {
      // After fetching devices, check their online status
      pingAllDevices();
    });
  }, [fetchDevices, pingAllDevices]);

  // Map API devices to our extended device format (simplified)
  const extendedDevices: ExtendedDevice[] = devices.map((device) => ({
    id: device.id,
    name: device.name,
    pingStatus: device.pingStatus,
  }));

  // Handle device creation
  const handleCreate = (name: string) => {
    createDevice({ name })
      .then((response) => {
        setIsCreateModalOpen(false);
        // Ping the newly created device immediately to determine its status
        if (response && response.id) {
          pingDevice(response.id);
        }
      })
      .catch((err) => {
        console.error("Error creating device:", err);
      });
  };

  // Handle device deletion
  const handleDelete = (id: string) => {
    deleteDevice(id).catch((err) => {
      console.error("Error deleting device:", err);
    });
  };

  // Handle device name update
  const handleEdit = (id: string, newName: string) => {
    updateDevice(id, { name: newName })
      .then(() => {
        setEditingDevice(null);
      })
      .catch((err) => {
        console.error("Error updating device:", err);
      });
  };

  // Handle pinging all devices
  const handlePingAll = async () => {
    setIsPingingAll(true);
    await pingAllDevices();
    setIsPingingAll(false);
  };

  if (isLoading && devices.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-center py-8">Cargando dispositivos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-center text-red-500 py-8">Error: {error}</p>
        <Button
          text="Reintentar"
          className="bg-amber-400 text-white px-3 py-2 rounded hover:bg-yellow-500 mx-auto block"
          onClick={() => fetchDevices()}
        />
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-black mr-4">
            Dispositivos
          </h2>
          <button
            onClick={handlePingAll}
            disabled={isPingingAll}
            className={`flex items-center text-sm text-blue-600 hover:text-blue-800 ${
              isPingingAll ? "opacity-50 cursor-wait" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faSync}
              className={isPingingAll ? "animate-spin mr-2" : "mr-2"}
            />
            {isPingingAll ? "Verificando..." : "Verificar todos"}
          </button>
        </div>
        <Button
          text="Nuevo +"
          className="bg-amber-400 text-white px-3 py-2 rounded hover:bg-yellow-500"
          onClick={() => setIsCreateModalOpen(true)}
        />
      </div>

      {extendedDevices.length === 0 ? (
        <p className="text-center py-8 text-gray-500">
          No hay dispositivos disponibles.
        </p>
      ) : (
        <>
          {/* Vista de tabla para pantallas medianas y grandes */}
          <div className="hidden sm:block overflow-x-auto w-full">
            <table className="w-full table-fixed">
              <thead>
                <PageTitles />
              </thead>
              <tbody>
                {extendedDevices.map((device) => (
                  <DeviceRow
                    key={device.id}
                    id={device.id}
                    name={device.name}
                    pingStatus={device.pingStatus}
                    onEditClick={() => setEditingDevice(device)}
                    onDelete={() => handleDelete(device.id)}
                    onShowChart={() => {}}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Vista de tarjetas para móviles */}
          <div className="sm:hidden grid grid-cols-1 gap-4">
            {extendedDevices.map((device) => (
              <div
                key={device.id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-gray-500">ID: {device.id}</p>
                    <h3 className="text-lg font-medium text-blue-600">
                      {device.name}
                    </h3>
                  </div>
                  <DeviceStatus
                    pingStatus={device.pingStatus}
                    onPingDevice={() => pingDevice(device.id)}
                  />
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => setEditingDevice(device)}
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(device.id)}
                    className="flex items-center text-red-600 hover:text-red-800 text-sm"
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {isCreateModalOpen && (
        <CreateDeviceModal
          onConfirm={handleCreate}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}

      {editingDevice && (
        <EditDeviceModal
          currentName={editingDevice.name}
          onConfirm={(newName) => handleEdit(editingDevice.id, newName)}
          onClose={() => setEditingDevice(null)}
          deviceId={editingDevice.id}
        />
      )}
    </div>
  );
};

export default DeviceTable;
