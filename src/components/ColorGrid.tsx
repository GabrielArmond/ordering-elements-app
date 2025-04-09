
import { useEffect, useState } from "react";
import { ColorItem } from "../types/elements";
import { Modal } from "./Modal";
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  items: ColorItem[];
};

export function ColorGrid({ items }: Props) {
  const [selectedColor, setSelectedColor] = useState<ColorItem | null>(null);

  useEffect(() => {
    if (selectedColor) {
      const timer = setTimeout(() => {
        const modalElement = document.getElementById(`exampleModal-${selectedColor.text}`);
        if (modalElement) {
          const modal = new BootstrapModal(modalElement);
          modal.show();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [selectedColor]);

  const handleOpenModal = (color: ColorItem) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="row">
          {items.map((color, i) => (
            <div className="col-lg-6 mb-4" key={i}>
              <div
                className="card text-white shadow pointer"
                style={{ backgroundColor: color.value }}
                onClick={() => handleOpenModal(color)}
              >
                <div className="card-body">
                  <p className="m-0">{color.text}</p>
                  <p className="text-white-50 small m-0">{color.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal item={selectedColor} />
    </>
  );
};

