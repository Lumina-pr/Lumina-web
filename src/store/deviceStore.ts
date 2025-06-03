import { create } from "zustand";
import api from "../services/api";
import axios from "axios";

// Define types based on the actual device structure
export interface Device {
  id: string;
  name: string;
  pingStatus?: "online" | "offline" | "loading" | null;
  lastPingAttempt?: Date | null;
}

interface CreateDeviceDto {
  name: string;
}

interface UpdateDeviceDto {
  name?: string;
}

interface DeviceStore {
  // State
  devices: Device[];
  isLoading: boolean;
  error: string | null;
  selectedDevice: Device | null;

  // Actions
  fetchDevices: () => Promise<void>;
  fetchDeviceById: (id: string) => Promise<void>;
  createDevice: (deviceData: CreateDeviceDto) => Promise<Device | null>; // Update return type
  updateDevice: (id: string, deviceData: UpdateDeviceDto) => Promise<void>;
  deleteDevice: (id: string) => Promise<void>;
  clearError: () => void;
  setSelectedDevice: (device: Device | null) => void;

  // New ping actions
  pingDevice: (deviceId: string) => Promise<boolean>;
  pingAllDevices: () => Promise<void>;
}

export const useDeviceStore = create<DeviceStore>((set, get) => ({
  devices: [],
  isLoading: false,
  error: null,
  selectedDevice: null,

  fetchDevices: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.get<Device[]>("/devices");
      set({ devices: response.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching devices:", error);
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch devices",
        isLoading: false,
      });
    }
  },

  fetchDeviceById: async (id: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.get<Device>(`/devices/${id}`);
      set({ selectedDevice: response.data, isLoading: false });
    } catch (error) {
      console.error(`Error fetching device with id ${id}:`, error);
      set({
        error:
          error instanceof Error
            ? error.message
            : `Failed to fetch device with id ${id}`,
        isLoading: false,
      });
    }
  },

  createDevice: async (deviceData: CreateDeviceDto) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.post<Device>("/devices", deviceData);

      const devices = get().devices;
      set({
        devices: [...devices, response.data],
        isLoading: false,
      });

      // Return the created device so it can be pinged immediately
      return response.data;
    } catch (error) {
      console.error("Error creating device:", error);
      set({
        error:
          error instanceof Error ? error.message : "Failed to create device",
        isLoading: false,
      });
      return null;
    }
  },

  updateDevice: async (id: string, deviceData: UpdateDeviceDto) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.patch<Device>(`/devices/${id}`, deviceData);

      const devices = get().devices.map((device) =>
        device.id === id ? { ...device, ...response.data } : device
      );

      set({
        devices,
        selectedDevice: response.data,
        isLoading: false,
      });
    } catch (error) {
      console.error(`Error updating device with id ${id}:`, error);
      set({
        error:
          error instanceof Error
            ? error.message
            : `Failed to update device with id ${id}`,
        isLoading: false,
      });
    }
  },

  deleteDevice: async (id: string) => {
    try {
      set({ isLoading: true, error: null });

      await api.delete(`/devices/${id}`);

      // If deletion succeeds, update the devices list
      const devices = get().devices.filter((device) => device.id !== id);
      set({
        devices,
        selectedDevice:
          get().selectedDevice?.id === id ? null : get().selectedDevice,
        isLoading: false,
      });
    } catch (error) {
      console.error(`Error deleting device with id ${id}:`, error);
      set({
        error:
          error instanceof Error
            ? error.message
            : `Failed to delete device with id ${id}`,
        isLoading: false,
      });
      // If the API returns 501, you might want to handle it specifically
      if (axios.isAxiosError(error) && error.response?.status === 501) {
        set({ error: "Delete functionality is not implemented yet" });
      }
    }
  },

  clearError: () => set({ error: null }),

  setSelectedDevice: (device: Device | null) => set({ selectedDevice: device }),

  // New ping functions
  pingDevice: async (deviceId: string) => {
    const devices = get().devices;
    const updatedDevices = devices.map((device) =>
      device.id === deviceId
        ? {
            ...device,
            pingStatus: "loading" as const,
            lastPingAttempt: new Date(),
          }
        : device
    );

    set({ devices: updatedDevices });

    try {
      await api.get(`/devices-control/ping/${deviceId}`);

      // Update the device's ping status if successful
      const newDevices = get().devices.map((device) =>
        device.id === deviceId
          ? {
              ...device,
              pingStatus: "online" as const,
              lastPingAttempt: new Date(),
            }
          : device
      );

      set({ devices: newDevices });
      return true;
    } catch (error) {
      console.error(`Error pinging device ${deviceId}:`, error);

      // Update the device's ping status to offline
      const newDevices = get().devices.map((device) =>
        device.id === deviceId
          ? {
              ...device,
              pingStatus: "offline" as const,
              lastPingAttempt: new Date(),
            }
          : device
      );

      set({ devices: newDevices });
      return false;
    }
  },

  pingAllDevices: async () => {
    const devices = get().devices;

    // Set all devices to loading state
    const loadingDevices = devices.map((device) => ({
      ...device,
      pingStatus: "loading" as const,
    }));

    set({ devices: loadingDevices });

    // Ping all devices in parallel
    const pingPromises = devices.map((device) => get().pingDevice(device.id));

    try {
      await Promise.all(pingPromises);
    } catch (error) {
      console.error("Error when pinging all devices:", error);
    }
  },
}));
