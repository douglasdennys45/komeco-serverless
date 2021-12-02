import { Controller } from '.'
import { HttpRequest, HttpResponse, ok, serverError, unprocessableEntity } from '@/interfaces/gateways'
import { AddUserService } from '@/domain/usecases'

export class AddUserController implements Controller {
  constructor (private readonly usecases: AddUserService) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<any>> {
    try {
      const { errors, value } = await this.usecases(httpRequest.body)
      if (errors && errors.length > 0) {
        return unprocessableEntity(errors)
      }
      return ok(value)
    } catch (error) {
      return serverError(error)
    }
  }
}
