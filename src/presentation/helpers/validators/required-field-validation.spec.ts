import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '../../errors'

describe('RequiredFieldValidation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({
      name: 'any_name'
    })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should rnot return if validation succeeds', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({
      field: 'any_name'
    })
    expect(error).toBeFalsy()
  })
})
