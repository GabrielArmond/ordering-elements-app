
import { useState } from "react";
import { ColorItem } from "../types/elements";
import { Modal } from "./Modal";
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  items: ColorItem[];
};

export function ColorGrid({ items }: Props) {
  const [selectedColor, setSelectedColor] = useState<ColorItem | null>(null);

  const handleOpenModal = (color: ColorItem) => {
    setSelectedColor(color);
    const modal = new BootstrapModal(document.getElementById("exampleModal")!);
    modal.show();
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

