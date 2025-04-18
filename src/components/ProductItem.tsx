import { useEffect, useState } from "react";
import { LinkWithProductItem } from "../types/elements"
import { Modal } from "./Modal"
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: LinkWithProductItem
  elementId: string;
}

export function ProductItem({ item, elementId }: Props) {
  const [selectedProductItem, setSelectedProductItem] = useState<LinkWithProductItem | null>(null);

  useEffect(() => {
    if (selectedProductItem) {
      const timer = setTimeout(() => {
        const modalElement = document.getElementById(`exampleModal-${selectedProductItem.text}`);
        if (modalElement) {
          const modal = new BootstrapModal(modalElement);
          modal.show();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [selectedProductItem]);

  const handleOpenModal = (productItem: LinkWithProductItem) => {
    setSelectedProductItem(productItem);
  };
  return (
    <>
      <div className="col-xxl-3">
        <div className="card">
          <img className="card-img-top w-100 d-block fit-cover" style={{ height: "200px" }}
            src={item.src} />
          <div className="card-body p-4">
            <div onClick={() => handleOpenModal(item)} className="pointer">
              <p className="text-primary card-text mb-0">{item.text}</p>
              <h4 className="card-title">{item.product.name}</h4>
              <p className="card-text">{item.product.description}</p>
            </div>
            <button className="btn btn-primary mt-3"
              type="button" style={{ width: "100%" }}>
              Comprar
            </button>
          </div>
        </div>
      </div>
      <Modal item={selectedProductItem} elementId={elementId} />
    </>
  )
}
