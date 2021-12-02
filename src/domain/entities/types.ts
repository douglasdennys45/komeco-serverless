export type UserParam = {
  id?: string
  name: string
  email: string
  photo: string
  password?: string
  phone: string
  token?: string
}

export type UserReturn = {
  errors: string[]
  value: any
}
