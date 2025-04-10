import { useState } from "react"
import { ElementsSection } from "../types/elements";
import { MOCK_ELEMENTS } from "../mock/elements";

export const useElementsData = () => {
  const [data] = useState<ElementsSection[]>(() => {
    const elementsLocalStorage = localStorage.getItem('@sortable-elements');

    if (!elementsLocalStorage) {
      localStorage.setItem("@sortable-elements", JSON.stringify(MOCK_ELEMENTS));
      return MOCK_ELEMENTS;
    }

    return JSON.parse(elementsLocalStorage)
  });

  const [error] = useState<Error | null>(null);


  return { data, error }
}