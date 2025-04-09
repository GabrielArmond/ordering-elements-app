import '../App.css'
import { ElementsSection } from '../types/elements'
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { DropdownMenu } from './DropdownMenu'
import { putNewElementOrder } from '../api'
import { ModalLayout } from './ModalLayout'
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  elements: ElementsSection[];
  setElements: React.Dispatch<React.SetStateAction<ElementsSection[]>>;
}

export function Navbar({ elements, setElements }: Props) {

  const getElementPosition = (id: string) => elements.findIndex((element) => element.id === id)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over?.id) return

    if (active.id === over?.id) return

    setElements(state => {
      const originalPos = getElementPosition(active.id.toString())
      const newPos = getElementPosition(over?.id.toString())

      const newOrder = arrayMove(state, originalPos, newPos)

      return newOrder
    })
  }

  const handleOpenModal = () => {
    const modal = new BootstrapModal(document.getElementById("modalLayout")!);
    modal.show();
  };

  async function handleSaveLayout() {
    await putNewElementOrder(elements);

    const modal = BootstrapModal.getInstance(document.getElementById('modalLayout')!)
    modal?.hide()

    alert('✅ Nova ordem de elementos salva com sucesso!')
  }

  return (
    <>
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
              <SortableContext items={elements} strategy={verticalListSortingStrategy}>
                {elements.map((element) => (
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
              onClick={handleOpenModal}
            >
              Salvar Layout
            </button>
          </div>
          <div className="text-center d-none d-md-inline"></div>
        </div >
      </nav >
      <ModalLayout changedElements={elements} onSaveLayout={handleSaveLayout} />
    </>
  )
}
