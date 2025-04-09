import { useState } from "react";
import { LinkItem } from "../types/elements";
import { Modal } from "./Modal";
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: LinkItem
}

export function LinkItemComponent({ item }: Props) {
  const [selectedLinkItem, setLinkItem] = useState<LinkItem | null>(null);

  const handleOpenModal = (linkItem: LinkItem) => {
    setLinkItem(linkItem);
    const modal = new BootstrapModal(document.getElementById("exampleModal")!);
    modal.show();
  };
  return (
    <>
      <div className="col-md-6 col-xl-3 mb-4">
        <div
          className="card shadow border-left-primary py-2 pointer"
          onClick={() => handleOpenModal(item)}
        >
          <div className="card-body">
            <div className="row g-0 align-items-center">
              <div className="col me-2">
                <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                  <span>
                    {item.text}
                  </span>
                </div>
                <div className="text-dark fw-bold h5 mb-0"><span>{item.value}</span></div>
              </div>
              <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300"></i></div>
            </div>
          </div>
        </div>
      </div>
      <Modal item={selectedLinkItem} />
    </>
  )
}
