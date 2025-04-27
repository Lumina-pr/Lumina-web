import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";

type Device = {
  id: number;
  name: string;
  status: "Encendido" | "Apagado";
  type: string;
  pingStatus?: "Pong recibido" | "Error de conexión" | null;
};

interface DeviceCodeModalProps {
  device: Device;
  onClose: () => void;
  onPing: (id: number) => void;
}

const generateRandomCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};


const DeviceCodeModal: React.FC<DeviceCodeModalProps> = ({ device, onClose, onPing }) => {
    const [code, setCode] = useState<string | null>(null);
  
    useEffect(() => {
      setCode(generateRandomCode());
    }, []);

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4 text-black">Código para {device.name}</h2>
      <pre className="bg-black p-2 rounded mb-4 text-sm text-white">
        {`{
  DEVICE_ID = ${device.id};
  DEVICE_TYPE = "${device.type}";
  DEVICE_CODE = "${code}";
}
        `}
      </pre>
      <div className="flex gap-2 items-center">
        <Button
          text="Ping"
          className="bg-amber-400 text-white px-3 py-1 rounded hover:bg-amber-500"
          onClick={() => onPing(device.id)}
        />
        <span>
          {device.pingStatus === "Pong recibido" && <span className="text-green-500 font-semibold">Pong.</span>}
          {device.pingStatus === "Error de conexión" && <span className="text-red-500 font-semibold">Error de conexión.</span>}
        </span>
      </div>
    </Modal>
  );
};

export default DeviceCodeModal;
