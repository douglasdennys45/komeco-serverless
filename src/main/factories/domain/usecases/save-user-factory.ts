import { setupSaveUser, SaveUserUseCases } from '@/domain/usecases/save-user'
import { makeUserRepository } from '@/main/factories/infrastructure/repositories'

export const makeSaveUser = (): SaveUserUseCases => setupSaveUser(makeUserRepository())
