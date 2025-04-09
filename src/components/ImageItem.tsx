import { useEffect, useState } from "react";
import { LinkWithImageItem } from "../types/elements";
import { Modal } from "./Modal";
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: LinkWithImageItem;
  elementId: string;
}

export function ImagemItem({ item, elementId }: Props) {
  const [selectedImageItem, setSelectedImageItem] = useState<LinkWithImageItem | null>(null);

  useEffect(() => {
    if (selectedImageItem) {
      const timer = setTimeout(() => {
        const modalElement = document.getElementById(`exampleModal-${selectedImageItem.text}`);
        if (modalElement) {
          const modal = new BootstrapModal(modalElement);
          modal.show();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [selectedImageItem]);

  const handleOpenModal = (image: LinkWithImageItem) => {
    setSelectedImageItem(image);
  };

  return (
    <>
      <div className="col-xxl-6 pointer" onClick={() => handleOpenModal(item)}>
        <div className="card">
          <img className="card-img-top w-100 d-block fit-cover" style={{ height: "380px" }}
            src={item.src} />
        </div>
      </div>
      <Modal item={selectedImageItem} elementId={elementId} />
    </>
  )
}