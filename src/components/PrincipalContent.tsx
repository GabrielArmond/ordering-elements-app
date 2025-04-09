import React, { useState } from "react"
import { ElementsSection, LinkItem, ColorItem, SectionItem, TaskItem, LinkWithProductItem, LinkWithImageItem, LinkWithCardItem } from "../types/elements"
import { LinkItemComponent } from "./LinkItem"
import { TaskList } from "./TaskList"
import { ColorGrid } from "./ColorGrid"
import { ProductItem } from "./ProductItem"
import { ImagemItem } from "./ImageItem"
import { CardItem } from "./CardItem"
import { NavbarContent } from "./NavbarContent"

interface Props {
  children: React.ReactNode
  elements: ElementsSection[] | null
}

export function PrincipalContent({ children, elements }: Props) {
  const [searchQuery, setSearchQuery] = useState("")

  function handleSearch(query: string) {
    setSearchQuery(query.toLowerCase())
  }

  return (
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <NavbarContent handleSearch={handleSearch} />
        {elements &&
          <div className="container-fluid">
            <div className="text-start d-sm-flex justify-content-between align-items-center mb-4">
              <h3 className="text-dark mb-0">Elementos</h3>
            </div>
            {elements
              .filter((element) => element.title.toLowerCase().includes(searchQuery))
              .map((element) => {
                switch (element.id) {
                  case '1':
                    return (
                      <div className="row my-4" key={element.id}>
                        <div className="col-xxl-12">
                          <h1>{element.title}</h1>
                        </div>
                        {element.items
                          .filter((item): item is LinkItem => 'value' in item)
                          .map((item, idx) => (
                            <LinkItemComponent item={item} key={idx} elementId="1" />
                          ))}
                      </div>
                    );

                  case '2':
                    return (
                      <div className="row my-4" key={element.id}>
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
                                  elementId="2"
                                />
                              );
                            } else if (item.text === "Grade de cores") {
                              return <ColorGrid key={idx} items={item.items as ColorItem[]} elementId="2" />;
                            }
                            return null;
                          })}
                      </div>
                    );

                  case '3':
                    return (
                      <div className="row my-4" key={element.id}>
                        <div className="col-xxl-12">
                          <h1>{element.title}</h1>
                        </div>
                        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                          {element.items
                            .filter((item): item is LinkWithProductItem => 'product' in item)
                            .map((item, idx) => (
                              <ProductItem item={item} key={idx} elementId="3" />
                            ))}
                        </div>
                      </div>
                    );

                  case '4':
                    return (
                      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 my-4" style={{ marginTop: "0px" }} key={element.id}>
                        <div className="col-xxl-12">
                          <h1>{element.title}</h1>
                        </div>
                        {element.items
                          .filter((item): item is LinkWithImageItem => 'src' in item)
                          .map((item, idx) => (
                            <ImagemItem item={item} key={idx} elementId="4" />
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
                            <CardItem item={item} key={idx} elementId="5" />
                          ))}
                      </div>
                    );

                  default:
                    return null;
                }
              })}
          </div>
        }
        {children}
      </div>
    </div>
  )
}