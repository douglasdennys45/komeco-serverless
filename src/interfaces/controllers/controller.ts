import { HttpResponse, HttpRequest } from '../gateways/http'

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}