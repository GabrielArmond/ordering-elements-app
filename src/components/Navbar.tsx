import { useEffect, useState } from 'react'
import '../App.css'
import { ElementsSection } from '../types/elements'
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { DropdownMenu } from './DropdownMenu'

interface Props {
  elements: ElementsSection[] | null;
  onReorder?: (newOrder: ElementsSection[]) => void;
}

export function Navbar({ elements, onReorder }: Props) {
  const [newElements, setNewElements] = useState<ElementsSection[]>([])

  const getElementPosition = (id: string) => newElements.findIndex((element) => element.id === id)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over?.id) return

    if (active.id === over?.id) return

    setNewElements(newElements => {
      const originalPos = getElementPosition(active.id.toString())
      const newPos = getElementPosition(over?.id.toString())

      const newOrder = arrayMove(newElements, originalPos, newPos)

      onReorder?.(newOrder)

      return newOrder
    })
  }

  useEffect(() => {
    if (elements) {
      setNewElements(elements)
    }
  }, [elements])

  return (
    <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary navbar-dark"
      style={{ width: "300px" }}>
      <div className="container-fluid d-flex flex-column p-0">
        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
          <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-layer-group"></i></div>
          <div className="sidebar-brand-text mx-3"><span>CAMADAS</span></div>
        </a>
        <hr className="sidebar-divider my-0" />
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} >
          <div
            className="navbar-nav text-light"
            id="accordionSidebar"
          >
            <SortableContext items={newElements} strategy={verticalListSortingStrategy}>
              {newElements.map((element) => (
                <DropdownMenu element={element} id={element.id} key={element.id} />
              ))}
            </SortableContext>
          </div>
        </DndContext>
        <div className="nav-item" style={{ padding: "15px", marginTop: "1rem" }}>
          <button type="button" className="btn btn-success text-light fw-bold" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Modelo de Modal de Componente
          </button>
        </div>
        <div className="nav-item" style={{ padding: "15px" }}>
          <button
            type="button"
            className="btn btn-dark col-12 text-light fw-bold"
          >
            Salvar Layout
          </button>
        </div>
        <div className="text-center d-none d-md-inline"></div>
      </div >
    </nav >
  )
}
