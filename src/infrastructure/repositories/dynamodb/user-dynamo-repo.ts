import * as uuid from 'uuid'
import { AddUserRepository, SaveUserRepository } from '@/domain/contracts'
import { DynamoDBConnect } from '@/infrastructure/connections'

export class UserRepository implements AddUserRepository, SaveUserRepository {
  constructor (private readonly tableName: string) {}

  async save (request: SaveUserRepository.Request): Promise<SaveUserRepository.Response> {
    const conn = DynamoDBConnect.run()
    const params = {
      TableName: this.tableName,
      Key: {
        ...request
      },
      UpdateExpression: 'set email = :email',
      ExpressionAttributeValues: {
        ':email': request.email
      },
      ReturnValues: 'UPDATED_NEW'
    }
    await conn.update(params).promise()
    return request.email
  }

  async insert (request: AddUserRepository.Request): Promise<string> {
    const conn = DynamoDBConnect.run()
    const params = {
      TableName: this.tableName,
      Item: {
        ...request,
        id: uuid.v4(),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      }
    }
    await conn.put(params).promise()
    return params.Item.id
  }
}
