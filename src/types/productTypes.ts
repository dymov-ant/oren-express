export interface IProduct {
  id: number
  shop_id: number | null
  user_id: number | null
  category_id: number
  name: string
  description: string
  main_photo: string
  photos: string
  price: number
  created_at: string
  updated_at: string
}