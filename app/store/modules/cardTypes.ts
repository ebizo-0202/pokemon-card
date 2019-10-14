export interface Card {
  id?: number
  name?: string
  text?: string
  image?: string
  damage?: number
  attached?: Card[]
}

export interface State {
  card: Card,
}
