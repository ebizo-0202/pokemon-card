export type Card = {
  id?: number
  name?: string
  text?: string
  image?: string
  damage?: number
  attached?: Card[]
}

export default Card