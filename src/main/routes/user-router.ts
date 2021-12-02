import { makeAddUserController } from '@/main/factories/interfaces/controllers'
import { adaptServerlessRoute } from '@/main/adapters'

export const AddUser = adaptServerlessRoute(makeAddUserController())
