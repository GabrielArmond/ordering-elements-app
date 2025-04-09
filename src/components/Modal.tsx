import { ColorItem, ElementItem, LinkItem, LinkWithImageItem, LinkWithProductItem, TaskItem } from "../types/elements"

interface Props {
  item: ElementItem | TaskItem | ColorItem | LinkItem | LinkWithProductItem | LinkWithImageItem | null
}

export function Modal({ item }: Props) {
  console.log(item)
  return (
    <div className="modal fade text-black" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal de Configurações</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <small>
              Os campos devem ser referentes ao conteúdo dos Elementos
              editáveis do bloco escolhido.
            </small>
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Subtítulo</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Título</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Class do Ícone</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
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