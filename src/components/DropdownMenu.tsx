import { useSortable } from "@dnd-kit/sortable"
import { ElementItem, ElementsSection } from "../types/elements"
import { CSS } from '@dnd-kit/utilities'
import { useState } from "react"
import { Modal as BootstrapModal } from 'bootstrap'
import { Modal } from "./Modal"

interface Props {
  id: string
  element: ElementsSection
}

export function DropdownMenu({ id, element }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transition: transition,
    transform: CSS.Transform.toString(transform),
    padding: "15px"
  }

  const [selectedElementItem, setSelectedElementItem] = useState<ElementItem | null>(null);

  const handleOpenModal = (item: ElementItem) => {
    console.log('Aqui', item)
    setSelectedElementItem(item);
    const modal = new BootstrapModal(document.getElementById("exampleModal")!);
    modal.show();
  };

  return (
    <>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="nav-item dropdown"
        style={style}
        key={element.id}
      >
        <a
          aria-expanded="false"
          type="button"
          data-bs-toggle="dropdown"
          className="dropdown-toggle link-light"
          href="#"
          id={element.title}
        >
          <i className="fas fa-grip-horizontal icon-draggable"></i>
          {element.title}
        </a>
        <div className="dropdown-menu" aria-labelledby={element.title} >
          {element.items.map((item, index) => {
            return (
              <button type="button" key={index} className="btn btn-sm btn-link dropdown-item" disabled={false} onClick={() => handleOpenModal(item)}>
                {item.text}
              </button>
            )
          })}
        </div>
      </div>
      <Modal item={selectedElementItem} />
    </>
  )
}