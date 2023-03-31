export interface CartItem {
  // id / cart_id are unique identifiers for the cart item after it has been inserted into the database. product_id is the product identifier from the Cart; this is the id we care about when adding / removing items from the Cart.
  id?: string
  cart_id?: string
  product_id: string
  name: string
  description: string
  image_01_url: string
  productQuantity: number
  price: number
  lineItemTotalPrice: number
}

export interface CartState {
  cartItems: CartItem[]
}
