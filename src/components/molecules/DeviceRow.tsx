"use client";

import React, { useState } from "react";
import DeviceStatus from "../atoms/DeviceStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmDeleteModal from "../organisms/ConfirmDeleteModal";
import { useRouter } from "next/navigation";
import { useDeviceStore } from "@/store/deviceStore";

interface DeviceRowProps {
  id: string;
  name: string;
  pingStatus?: "online" | "offline" | "loading" | null;
  onEditClick: () => void;
  onDelete: () => void;
  onShowChart: () => void;
}

const DeviceRow: React.FC<DeviceRowProps> = ({
  id,
  name,
  pingStatus,
  onEditClick,
  onDelete,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();
  const { pingDevice } = useDeviceStore();

  const handleDeleteClick = () => setIsDeleteModalOpen(true);
  const handleConfirmDelete = () => {
    setIsDeleteModalOpen(false);
    onDelete();
  };
  const handleCancelDelete = () => setIsDeleteModalOpen(false);

  const handleNavigateToDetail = () => {
    router.push(`/home/devices/graph?deviceId=${id}`);
  };

  const handlePingDevice = () => {
    pingDevice(id);
  };

  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="w-1/4 py-2">
          <div className="flex justify-center text-sm text-gray-800">{id}</div>
        </td>
        <td className="w-1/4 py-2">
          <div
            onClick={handleNavigateToDetail}
            className="cursor-pointer flex justify-center text-sm text-blue-600 hover:underline"
          >
            {name}
          </div>
        </td>
        <td className="w-1/4 py-2">
          <div className="flex justify-center">
            <DeviceStatus
              pingStatus={pingStatus}
              onPingDevice={handlePingDevice}
            />
          </div>
        </td>
        <td className="w-1/4 py-2">
          <div className="flex gap-3 justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEditClick();
              }}
              className="text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteClick();
              }}
              className="text-red-600 hover:text-red-800"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </td>
      </tr>

      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          onConfirm={handleConfirmDelete}
          onClose={handleCancelDelete}
        />
      )}
    </>
  );
};

export default DeviceRow;
