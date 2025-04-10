import { useEffect, useState } from "react";
import { LinkWithCardItem } from "../types/elements"
import { Modal } from "./Modal"
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: LinkWithCardItem;
  elementId: string;
}

export function CardItem({ item, elementId }: Props) {
  const [selectedCardItem, setSelectedCardItem] = useState<LinkWithCardItem | null>(null);

  useEffect(() => {
    if (selectedCardItem) {
      const timer = setTimeout(() => {
        const modalElement = document.getElementById(`exampleModal-${selectedCardItem.text}`);
        if (modalElement) {
          const modal = new BootstrapModal(modalElement);
          modal.show();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [selectedCardItem]);

  const handleOpenModal = (card: LinkWithCardItem) => {
    setSelectedCardItem(card);
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
                  <img className="w-100 h-100 fit-cover" src={item.src} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal item={selectedCardItem} elementId={elementId} />
    </>
  )
}