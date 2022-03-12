import ValueObject from "../value-object";

class StubValueObject extends ValueObject {}

describe("ValueObject tests", () => {
  it("Should set value", () => {
    const vo = new StubValueObject("string value");
    expect(vo.value).toBe("string value");
  });

  it("Should set value", () => {
    const vo = new StubValueObject({ prop1: "value1" });
    expect(vo.value).toStrictEqual({ prop1: "value1" });
  });

  it("Should convert to string", () => {
    let vo = new StubValueObject({ prop1: "value1" });

    let valueString = `${vo}`;

    expect(valueString).toBe(valueString);

    vo = new StubValueObject(null);

    valueString = `${vo}`;

    expect(valueString).toBe("null");

    vo = new StubValueObject(undefined);

    valueString = `${vo}`;

    expect(valueString).toBe("undefined");

    vo = new StubValueObject(true);

    valueString = `${vo}`;

    expect(valueString).toBe("true");

    vo = new StubValueObject(Number(5));

    valueString = `${vo}`;

    expect(valueString).toBe("5");

    vo = new StubValueObject([]);

    valueString = `${vo}`;

    expect(valueString).toBe("");

    vo = new StubValueObject([1, 2, 3]);

    valueString = `${vo}`;

    expect(valueString).toBe("1,2,3");
  });
});
