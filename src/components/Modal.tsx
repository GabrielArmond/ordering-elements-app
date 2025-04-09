import { useEffect, useState } from "react"
import { ColorItem, ElementItem, LinkItem, LinkWithImageItem, LinkWithProductItem, TaskItem } from "../types/elements"

interface Props {
  item: ElementItem | TaskItem | ColorItem | LinkItem | LinkWithProductItem | LinkWithImageItem | null
}

export function Modal({ item }: Props) {
  const [formValues, setFormValues] = useState<Record<string, any>>({})

  useEffect(() => {
    if (item) {
      setFormValues({ ...item })
    }
  }, [item])

  if (!item) {
    return null
  }

  const handleChange = (key: string, value: any) => {
    setFormValues(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="modal fade text-black" id={`exampleModal-${item.text}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal de Configurações</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <small>
              <small>Campos disponíveis do item:</small>
            </small>
            <form className="mt-4">
              {Object.entries(formValues).map(([key, value], index) => (
                <div className="mb-3" key={index}>
                  <label htmlFor={`input-${key}`} className="form-label">{key}</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`input-${key}`}
                    value={value}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                </div>
              ))}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}