import { useState } from "react";
import { LinkWithImageItem } from "../types/elements";
import { Modal } from "./Modal";
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: LinkWithImageItem
}

export function ImagemItem({ item }: Props) {
  const [selectedImageItem, setSelectedImageItem] = useState<LinkWithImageItem | null>(null);

  const handleOpenModal = (image: LinkWithImageItem) => {
    setSelectedImageItem(image);
    const modal = new BootstrapModal(document.getElementById("exampleModal")!);
    modal.show();
  };

  return (
    <>
      <div className="col-xxl-6 pointer" onClick={() => handleOpenModal(item)}>
        <div className="card">`
          <img className="card-img-top w-100 d-block fit-cover" style={{ height: "380px" }}
            src={item.src} />
        </div>
      </div>
      <Modal item={selectedImageItem} />
    </>
  )
}