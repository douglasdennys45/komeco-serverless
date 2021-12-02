import { makeSaveUserController } from '@/main/factories/interfaces/controllers'
import { adaptServerlessAmqp } from '@/main/adapters'

export const SaveUserSNS = adaptServerlessAmqp(makeSaveUserController())
