import { DynamoDBConnect } from '@/infrastructure/connections'

export const makeDynamoDBConnect = () => DynamoDBConnect.connect()
