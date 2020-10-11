import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamsError } from '../error/missing-param-error'
import { badRequest } from '../helper/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamsError(field))
      }
    }
  }
}
