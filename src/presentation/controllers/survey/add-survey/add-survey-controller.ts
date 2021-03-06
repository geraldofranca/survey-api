import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'
import { badRequest, serverError, noContent } from '../../../helpers/http/http-helper'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpResquest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpResquest.body)
      if (error) {
        return badRequest(error)
      }
      const { question, answers } = httpResquest.body
      await this.addSurvey.add({
        question,
        answers
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
