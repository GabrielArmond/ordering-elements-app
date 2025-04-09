import { useState } from "react"

interface Props {
  handleSearch: (query: string) => void
}

export function NavbarContent({ handleSearch }: Props) {
  const [searchValue, setSearchValue] = useState("")

  function handleClick() {
    handleSearch(searchValue)
  }

  return (
    <nav className="navbar navbar-expand bg-white text-center shadow justify-content-center mb-4 topbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-12">
            <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
              style={{ marginRight: "0px", marginBottom: "0px", textAlign: "center", marginLeft: "37px" }}
              onSubmit={e => {
                e.preventDefault()
                handleClick()
              }}
            >
              <div className="input-group">
                <input type="text"
                  className="bg-light form-control border-0 small pe-auto"
                  placeholder="Buscar Componente" value={searchValue}
                  onChange={e => setSearchValue(e.target.value)} />
                <button className="btn btn-primary py-0 pe-auto"
                  type="button" onClick={handleClick}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}