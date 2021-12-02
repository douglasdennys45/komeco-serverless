import { UserRepository } from '@/infrastructure/repositories/dynamodb'

export const makeUserRepository = (): UserRepository => (new UserRepository('users'))