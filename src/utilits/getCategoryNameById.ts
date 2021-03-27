import { ICatalogItem } from "../types/catalogTypes"

export const getCategoryNameById = (arr: ICatalogItem[], id: number): string | undefined => {
  let res: string | undefined = ""
  for (const item of arr) {
    if (res) return res
    if (item.id === id) {
      res = item.name
    } else if (item.children) {
      res = getCategoryNameById(item.children, id)
    }
  }
  return res
}