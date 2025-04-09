import { ElementsSection } from "../types/elements"

interface Props {
  changedElements: ElementsSection[]
  onSaveLayout: () => void
}
export function ModalLayout({ changedElements, onSaveLayout }: Props) {
  return (
    <div className="modal fade modal-lg" tabIndex={-1} id="modalLayout" aria-labelledby="modalLayout" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Mudança de layout</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <pre className="bg-light p-3 rounded" style={{ maxHeight: "400px", overflowY: "auto", fontSize: "0.9rem" }}>
              <code>{JSON.stringify(changedElements, null, 2)}</code>
            </pre>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={onSaveLayout}>
              Salvar layout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}