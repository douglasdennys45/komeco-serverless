import { SaveUserRepository } from '@/domain/contracts'
import { UserEntity } from '@/domain/entities'

type Setup = (userRepo: SaveUserRepository) => SaveUserUseCases
type Request = { name: string, email: string, phone: string }
type Response = { errors: string[], value: string | undefined }
export type SaveUserUseCases = (request: Request) => Promise<Response>

export const setupSaveUser: Setup = (userRepo) => async (request) => {
  const { errors, value } = UserEntity.create(request)
  if (!value && errors && errors.length > 0) {
    return { errors, value: undefined }
  }
  const response = await userRepo.save(value)
  return { errors: [], value: response }
}
