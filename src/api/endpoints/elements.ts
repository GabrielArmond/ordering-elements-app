import { ElementsSection } from '../../types/elements'
import client from '../client'

export const getElementsData = async (): Promise<ElementsSection[]> => {
  const response = await client.get<ElementsSection[]>('/elements')

  return response.data
}

export const putNewElementOrder = async (newOrder: ElementsSection[]): Promise<void> => {
  const newOrderString = JSON.stringify(newOrder);

  localStorage.setItem("@sortable-elements", newOrderString);
};
