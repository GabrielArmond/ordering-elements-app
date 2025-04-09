import React from "react"
import { ElementsSection, LinkItem, ColorItem, SectionItem, TaskItem, LinkWithProductItem, LinkWithImageItem, LinkWithCardItem } from "../types/elements"
import { LinkItemComponent } from "./LinkItem"
import { TaskList } from "./TaskList"
import { ColorGrid } from "./ColorGrid"
import { ProductItem } from "./ProductItem"
import { ImagemItem } from "./ImageItem"
import { CardItem } from "./CardItem"

interface Props {
  children: React.ReactNode
  elements: ElementsSection[] | null
}

export function PrincipalContent({ children, elements }: Props) {
  return (
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <nav className="navbar navbar-expand bg-white text-center shadow justify-content-center mb-4 topbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-12">
                <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
                  style={{ marginRight: "0px", marginBottom: "0px", textAlign: "center", marginLeft: "37px" }}>
                  <div className="input-group">
                    <input type="text"
                      className="bg-light form-control border-0 small pe-auto"
                      placeholder="Buscar Componente" />
                    <button className="btn btn-primary py-0 pe-auto"
                      type="button">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>
        {elements &&
          <div className="container-fluid">
            <div className="text-start d-sm-flex justify-content-between align-items-center mb-4">
              <h3 className="text-dark mb-0">Elementos</h3>
            </div>

            {elements.map((element) => {
              switch (element.id) {
                case '1':
                  return (
                    <div className="row my-2" key={element.id}>
                      <div className="col-xxl-12">
                        <h1>{element.title}</h1>
                      </div>
                      {element.items
                        .filter((item): item is LinkItem => 'value' in item)
                        .map((item, idx) => (
                          <LinkItemComponent item={item} key={idx} />
                        ))}
                    </div>
                  );

                case '2':
                  return (
                    <div className="row my-2" key={element.id}>
                      <div className="col-xxl-12">
                        <h1>{element.title}</h1>
                      </div>
                      {element.items
                        .filter((item): item is SectionItem => 'items' in item)
                        .map((item, idx) => {
                          if (item.text === "Lista de Tarefas") {
                            return (
                              <TaskList
                                key={idx}
                                title={item.text}
                                items={item.items as TaskItem[]}
                                indexOffset={idx}
                              />
                            );
                          } else if (item.text === "Grade de cores") {
                            return <ColorGrid key={idx} items={item.items as ColorItem[]} />;
                          }
                          return null;
                        })}
                    </div>
                  );

                case '3':
                  return (
                    <div className="row my-2" key={element.id}>
                      <div className="col-xxl-12">
                        <h1>{element.title}</h1>
                      </div>
                      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                        {element.items
                          .filter((item): item is LinkWithProductItem => 'product' in item)
                          .map((item, idx) => (
                            <ProductItem item={item} key={idx} />
                          ))}
                      </div>
                    </div>
                  );

                case '4':
                  return (
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 my-2" style={{ marginTop: "0px" }} key={element.id}>
                      <div className="col-xxl-12">
                        <h1>{element.title}</h1>
                      </div>
                      {element.items
                        .filter((item): item is LinkWithImageItem => 'src' in item)
                        .map((item, idx) => (
                          <ImagemItem item={item} key={idx} />
                        ))}
                    </div>
                  );

                case '5':
                  return (
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 my-4" key={element.id}>
                      <div className="col-xxl-12">
                        <h1>{element.title}</h1>
                      </div>
                      {element.items
                        .filter((item): item is LinkWithCardItem => 'subText' in item && 'src' in item && 'alt' in item && 'buttons' in item)
                        .map((item, idx) => (
                          <CardItem item={item} key={idx} />
                        ))}
                    </div>
                  );

                default:
                  return null;
              }
            })}
            {children}
          </div>
        }
      </div>
    </div>
  )
}