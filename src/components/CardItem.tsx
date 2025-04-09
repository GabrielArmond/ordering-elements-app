import { useState } from "react";
import { LinkWithCardItem } from "../types/elements"
import { Modal } from "./Modal"
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: LinkWithCardItem
}

export function CardItem({ item }: Props) {
  const [selectedCardItem, setSelectedCardItem] = useState<LinkWithCardItem | null>(null);
  const handleOpenModal = (card: LinkWithCardItem) => {
    setSelectedCardItem(card);
    const modal = new BootstrapModal(document.getElementById("exampleModal")!);
    modal.show();
  };

  return (
    <>
      <div className="col-xxl-12">
        <section>
          <div className="container">
            <div className="bg-dark border rounded border-0 border-dark overflow-hidden pointer">
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="text-white p-4 p-md-5">
                    <div onClick={() => handleOpenModal(item)}>
                      <h2 className="fw-bold text-white mb-3">{item.text}&nbsp;</h2>
                      <p className="mb-4">{item.subText}</p>
                    </div>
                    <div className="my-3">
                      {item.buttons.map((btn) => {
                        return <a className={`btn btn-lg me-2 ${btn.style}`}
                          role="button" href={btn.action} key={btn.text}>
                          {btn.text}
                        </a>
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-first order-md-last" style={{ minHeight: "250px" }}>
                  <img className="w-100 h-100 fit-cover" src="./src/assets/placeholder.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal item={selectedCardItem} />
    </>
  )
}