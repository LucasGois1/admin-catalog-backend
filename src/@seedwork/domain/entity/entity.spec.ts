import Entity from '../entity/entity';
import UniqueEntityId from '../value-objects/unique-entity-id.vo';
import {validate as uuidValidate} from 'uuid'

class StubEntity extends Entity<{prop1: string, prop2: number}> {}

describe('Entity tests', () => {
    it('should set props and id', () => {
        const arrange = {
            prop1: 'prop1',
            prop2: 2,
        };

        const entity = new StubEntity(arrange);

        expect(entity.props).toEqual(arrange);
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
        expect(entity.id).not.toBeNull();
        expect(uuidValidate(entity.id)).toBeTruthy();

    })

    it('should accept a valid uuid', () => {
        const arrange = {
            prop1: 'prop1',
            prop2: 2,
        };

        let _id = new UniqueEntityId();
        
        const entity = new StubEntity(arrange, _id);

        expect(entity.id).toBe(_id.value);
        expect(uuidValidate(entity.id)).toBeTruthy();
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    })

    it('should convert a entity to a JavaScript Object', () => {
        const arrange = {
            prop1: 'prop1',
            prop2: 2,
        };

        const _id = new UniqueEntityId();

        const entity = new StubEntity(arrange, _id);

        expect(entity.toJSON()).toStrictEqual({
            id: entity.id,
            prop1: 'prop1',
            prop2: 2,
        });
    })
})
