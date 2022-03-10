import InvalidUuidError from '../errors/invalid-uuid-error'
import UniqueEntityId from './unique-entity-id.vo'

describe('Unique Entity tests', () => {
    it('Should throw error when uuid is invalid', () => {

        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')

        expect(() => {
            const uuid = new UniqueEntityId('fake id')
        }).toThrow(new InvalidUuidError)

        expect(validateSpy).toHaveBeenCalled()
    })

    it('Should assert a uuid passed in constructor', () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')

        const uuid = new UniqueEntityId('3ce40e30-eda2-44e0-a12e-bd291f559efe')

        expect(validateSpy).toHaveBeenCalled()

        expect(uuid.value).toBe('3ce40e30-eda2-44e0-a12e-bd291f559efe')
    })


    it('Should assert a uuid is automatcly created when not value is injected on constructor', () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')

        const uuid = new UniqueEntityId('3ce40e30-eda2-44e0-a12e-bd291f559efe')

        expect(validateSpy).toHaveBeenCalled()

        expect(uuid.value).toBeTruthy()
    })

})