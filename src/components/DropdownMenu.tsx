import { useSortable } from "@dnd-kit/sortable"
import { ElementsSection } from "../types/elements"
import { CSS } from '@dnd-kit/utilities'


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

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="nav-item dropdown d-flex flex-column"
      style={style}
      key={element.id}
    >
      <a
        aria-expanded="true"
        type="button"
        data-bs-toggle="dropdown"
        className="dropdown-toggle link-light"
        style={{ fontSize: '1rem' }}
        href="#"
        id={element.title}
      >
        <i className="fas fa-grip-horizontal icon-draggable" style={{ fontSize: '1rem' }}></i>
        {element.title}
      </a>
      <div className="dropdown-menu" aria-labelledby={element.title} >
        {element.items.map((item, index) => {
          return (
            <a type="button" key={index} className="btn btn-sm btn-link dropdown-item">
              {item.text}
            </a>
          )
        })}
      </div>
    </div>
  )
}