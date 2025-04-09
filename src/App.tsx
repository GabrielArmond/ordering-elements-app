import './App.css'
import { PrincipalContent } from './components/PrincipalContent'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useElementsData } from './hooks/useElementsData'
import { useEffect, useState } from 'react'
import { ElementsSection } from './types/elements'
import { getElementsData, putNewElementOrder } from './api'

function App() {
  const { data, error } = useElementsData()
  const [elements, setElements] = useState<ElementsSection[] | null>(null)

  useEffect(() => {
    if (data) {
      setElements(data)
    }
  }, [data, elements])

  const handleReorder = async (newOrder: ElementsSection[]) => {
    await putNewElementOrder(newOrder)

    const data = await getElementsData()
    setElements(data)
  }

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
      <Navbar elements={elements} onReorder={handleReorder} />
      <PrincipalContent elements={elements}>
        <Footer />
      </PrincipalContent>
    </div>
  )
}

export default App
