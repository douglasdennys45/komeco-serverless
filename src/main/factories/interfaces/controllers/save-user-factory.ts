import { Controller, SaveUserController } from '@/interfaces/controllers'
import { makeSaveUser } from '@/main/factories/domain/usecases'

export const makeSaveUserController = (): Controller => new SaveUserController(makeSaveUser())
