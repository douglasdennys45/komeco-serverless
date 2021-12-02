export interface AddUserRepository {
  insert: (request: AddUserRepository.Request) => Promise<AddUserRepository.Response>
}

export namespace AddUserRepository {
  export type Request = { name: string, email: string, phone: string }
  export type Response = string
}

export interface SaveUserRepository {
  save: (request: SaveUserRepository.Request) => Promise<SaveUserRepository.Response>
}

export namespace SaveUserRepository {
  export type Request = { name: string, email: string, phone: string }
  export type Response = string
}
