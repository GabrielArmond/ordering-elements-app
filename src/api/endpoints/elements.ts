import { ElementsSection } from '../../types/elements'
import client from '../client'

export const getElementsData = async (): Promise<ElementsSection[]> => {
  const response = await client.get<ElementsSection[]>('/elements')

  return response.data
}

export const putNewElementOrder = async (newOrder: ElementsSection[]): Promise<void> => {
  try {
    const { data: current } = await client.get('/elements')

    // Remove todos os elementos antigos
    await Promise.all(current.map((item: ElementsSection) =>
      client.delete(`/elements/${item.id}`)
    ))

    // Adiciona os elementos na nova ordem
    await Promise.all(newOrder.map(item =>
      client.post('/elements', item)
    ))
  } catch (error) {
    console.error('❌ Erro ao atualizar elementos:', error);
  }
};