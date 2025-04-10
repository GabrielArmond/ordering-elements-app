import { useEffect, useState } from "react"
import { ColorItem, ElementItem, LinkItem, LinkWithImageItem, LinkWithProductItem, TaskItem } from "../types/elements"
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  item: ElementItem | TaskItem | ColorItem | LinkItem | LinkWithProductItem | LinkWithImageItem | null
  elementId: string
}

export function Modal({ item, elementId }: Props) {
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

  const handleSave = () => {
    const existingData = JSON.parse(localStorage.getItem('@sortable-elements') || '[]');

    const updatedData = existingData.map((el: any) => {
      if (el.id === elementId && Array.isArray(el.items)) {
        const updateSecondLevelItems = el.items.map((child: any) => {
          if (Array.isArray(child.items)) {
            const updatedThirdLevelItems = child.items.map((grandchild: any) => {
              if (grandchild.id === formValues.id) {
                return { ...formValues };
              }
              return grandchild;
            });

            return {
              ...child,
              items: updatedThirdLevelItems,
            };
          } else {
            if (child.id === formValues.id) {
              return { ...formValues };
            }
          }

          return child;
        });

        return {
          ...el,
          items: updateSecondLevelItems,
        };
      }
      return el;
    });

    localStorage.setItem('@sortable-elements', JSON.stringify(updatedData));

    const modalEl = document.getElementById(`exampleModal-${item.text}`);
    if (modalEl) {
      const modal = BootstrapModal.getInstance(modalEl);
      modal?.hide();
    }
    alert("✅ Item atualizado com sucesso!");
    window.location.reload();
  };

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
                  {typeof value === "object" && value !== null ? (
                    <textarea
                      className="form-control"
                      id={`input-${key}`}
                      rows={4}
                      value={JSON.stringify(value, null, 2)}
                      onChange={(e) => {
                        try {
                          const parsed = JSON.parse(e.target.value)
                          handleChange(key, parsed)
                        } catch (err) {
                          console.warn("JSON inválido", err)
                        }
                      }}
                    />
                  ) : (
                    <input
                      disabled={key === 'id'}
                      type="text"
                      className="form-control"
                      id={`input-${key}`}
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}