import { Category, CategoryProperties } from "./category";
import { validate as uuidIsValid } from "uuid";
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";
import InvalidUuidError from "../../../@seedwork/errors/invalid-uuid-error";

describe("Category tests", () => {
  test("constructor of category", () => {
    const today = new Date();

    const props = {
      name: "Movie",
      description: "any_description",
      isActive: true,
      createdAt: today,
    };

    const category = new Category(props);

    expect(category.name).toBe("Movie");
    expect(category.description).toBe("any_description");
    expect(category.isActive).toBeTruthy();
    expect(category.createdAt).toBe(today);
  });

  test("should test individual atributes of category", () => {
    let props: CategoryProperties = {
      name: "Movie",
    };

    let category = new Category(props);

    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.isActive).toBeTruthy();
    expect(category.createdAt).toBeInstanceOf(Date);

    props = {
      name: "Movie",
      description: "any_description",
    };

    category = new Category(props);

    expect(category.name).toBe("Movie");
    expect(category.description).toBe("any_description");
    expect(category.isActive).toBeTruthy();
    expect(category.createdAt).toBeInstanceOf(Date);

    props = {
      name: "Movie",
      description: "any_description",
      isActive: false,
    };

    category = new Category(props);

    expect(category.name).toBe("Movie");
    expect(category.description).toBe("any_description");
    expect(category.isActive).toBeFalsy();
    expect(category.createdAt).toBeInstanceOf(Date);

    const today = new Date();

    props = {
      name: "Movie",
      description: "any_description",
      isActive: false,
      createdAt: today,
    };

    category = new Category(props);

    expect(category.name).toBe("Movie");
    expect(category.description).toBe("any_description");
    expect(category.isActive).toBeFalsy();
    expect(category.createdAt).toBe(today);

    expect(category.props).toStrictEqual(props);
  });

  test("should test the id field", () => {
    let category = new Category({ name: "Movie" });

    expect(category.id).not.toBeNull();
    expect(uuidIsValid(category.id)).toBeTruthy();
    expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId);

    category = new Category({ name: "Movie" }, null);

    expect(category.id).not.toBeNull();
    expect(uuidIsValid(category.id)).toBeTruthy();
    expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId);

    category = new Category({ name: "Movie" }, undefined);

    expect(category.id).not.toBeNull();
    expect(uuidIsValid(category.id)).toBeTruthy();
    expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId);

    let _id = new UniqueEntityId("328a0db3-17ad-453a-96a6-b7a232ab447e");
    category = new Category({ name: "Movie" }, _id);

    expect(category.id).not.toBeNull();
    expect(uuidIsValid(category.id)).toBeTruthy();
    expect(category.id).toBe(_id.value);
    expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
  });

  it('should set the name', () => {
    const category = new Category({ name: 'Movie' });
    category['name'] = 'Movie 2';
    expect(category.name).toBe('Movie 2');
  })

  it('should activate the category', () => {
    const today = new Date();

    const props = {
      name: "Movie",
      description: "any_description",
      isActive: false,
      createdAt: today,
    };

    const category = new Category(props);

    category.activate();

    expect(category.isActive).toBeTruthy();
  })

  it('should deactivate the category', () => {
    const today = new Date();

    const props = {
      name: "Movie",
      description: "any_description",
      isActive: true,
      createdAt: today,
    };

    const category = new Category(props);

    category.deactivate();

    expect(category.isActive).toBeFalsy();
  })

  it('should update the category', () => {
    const today = new Date();

    const props = {
      name: "Movie",
      description: "any_description",
      isActive: false,
      createdAt: today,
    };

    const category = new Category(props);

    category.update('Movie 2', 'any_description 2');

    expect(category.name).toBe('Movie 2');
    expect(category.description).toBe('any_description 2');
  })
});
