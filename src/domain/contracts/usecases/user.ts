export interface UserCreate {
  create: (request: UserCreate.Request) => Promise<UserCreate.Response>
}

export namespace UserCreate {
  export type Request = { name: string, email: string, phone: string }
  export type Response = { errors: string[], value: string }
}

export interface UserSave {
  create: (request: UserSave.Request) => Promise<UserSave.Response>
}

export namespace UserSave {
  export type Request = { name: string, email: string, phone: string }
  export type Response = { errors: string[], value: string }
}
