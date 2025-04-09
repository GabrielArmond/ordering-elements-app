import { ColorItem, ElementItem, LinkItem, LinkWithImageItem, LinkWithProductItem, TaskItem } from "../types/elements"

interface Props {
  item: ElementItem | TaskItem | ColorItem | LinkItem | LinkWithProductItem | LinkWithImageItem | null
}

export function Modal({ item }: Props) {
  const keys = item ? Object.keys(item) : []

  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal de Configurações</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <span className="h4">
              Elemento ordenável
            </span>
            <form className="mt-4">
              {keys.map((key, index) => (
                <div className="mb-3" key={index}>
                  <label htmlFor={key} className="form-label text-capitalize">{key}</label>
                  <input type="text" className="form-control" id={key}
                    aria-describedby={`${key} helped`} />
                </div>
              ))}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Salvar Alterações</button>
          </div>
        </div>
      </div>
    </div>
  )
}