import { AddUserRepository } from '@/domain/contracts'
import { UserEntity } from '@/domain/entities'

type Setup = (userRepo: AddUserRepository) => AddUserService
type Request = { name: string, email: string, phone: string }
type Response = { errors: string[], value: string | undefined }
export type AddUserService = (request: Request) => Promise<Response>

export const setupAddUser: Setup = (userRepo) => async (request) => {
  const { errors, value } = UserEntity.create(request)
  if (!value && errors && errors.length > 0) {
    return { errors, value: undefined }
  }
  const response = await userRepo.insert(value)
  return { errors: [], value: response }
}
