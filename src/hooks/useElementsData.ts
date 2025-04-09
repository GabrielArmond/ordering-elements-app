import { useEffect, useState } from "react"
import { getElementsData } from "../api"
import { ElementsSection } from "../types/elements";

export const useElementsData = () => {
  const [data, setData] = useState<ElementsSection[] | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await getElementsData()
        setData(response)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error)
        } else {
          setError(new Error("Erro desconhecido ao carregar os elementos"))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchElements()
  }, [])

  return { data, loading, error }
}