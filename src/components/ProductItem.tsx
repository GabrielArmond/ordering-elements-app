import { useState } from "react";
import { LinkWithProductItem } from "../types/elements"
import { Modal } from "./Modal"
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: LinkWithProductItem
}

export function ProductItem({ item }: Props) {
  const [selectedProductItem, setSelectedProductItem] = useState<LinkWithProductItem | null>(null);

  const handleOpenModal = (productItem: LinkWithProductItem) => {
    setSelectedProductItem(productItem);
    const modal = new BootstrapModal(document.getElementById("exampleModal")!);
    modal.show();
  };
  return (
    <>
      <div className="col-xxl-3">
        <div className="card" onClick={() => handleOpenModal(item)}>
          <img className="card-img-top w-100 d-block fit-cover" style={{ height: "200px" }}
            src="./src/assets/placeholder.png" />
          <div className="card-body p-4">
            <p className="text-primary card-text mb-0">{item.text}</p>
            <h4 className="card-title">{item.product.name}</h4>
            <p className="card-text">{item.product.description}</p>
            <button className="btn btn-primary"
              type="button" style={{ width: "100%" }}>
              Comprar
            </button>
          </div>
        </div>
      </div>
      <Modal item={selectedProductItem} />
    </>
  )
}
