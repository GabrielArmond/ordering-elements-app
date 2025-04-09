import './App.css'
import { PrincipalContent } from './components/PrincipalContent'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useElementsData } from './hooks/useElementsData'
import { useEffect, useState } from 'react'
import { ElementsSection } from './types/elements'


function App() {
  const { data, error } = useElementsData()
  const [elements, setElements] = useState<ElementsSection[]>([])

  useEffect(() => {
    if (data) {
      setElements(data)
    }
  }, [data])

  if (error) {
    return (
      <div className='container text-center'>
        <div className='row align-items-center justify-content-center'>
          <div className='col'>
            Erro ao carregar os elementos... :(
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="wrapper">
      <Navbar elements={elements} setElements={setElements} />
      <PrincipalContent elements={elements}>
        <Footer />
      </PrincipalContent>
    </div>
  )
}

export default App
