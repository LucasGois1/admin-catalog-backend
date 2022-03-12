import ValueObject from "../../../src/@seedwork/domain/value-objects/value-object";

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

    vo = new StubValueObject(() => {});

    valueString = `${vo}`;

    expect(valueString).toBe("()=>{}");

    vo = new StubValueObject(new Error("any error"));

    valueString = `${vo}`;

    expect(valueString).toBe("Error: any error");

    vo = new StubValueObject({ a: {} });

    valueString = `${vo}`;

    expect(valueString).toBe(valueString);
  });

  it("Should value to be  an immutable element", () => {
    const myObj = {
      prop1: "value1",
      deep: { prop2: "value2", prop3: new Date() },
    };

    const vo = new StubValueObject(myObj);

    expect(() => {
      (vo as any).value = "aaaaa";
    }).toThrowError(
      "Cannot set property value of #<ValueObject> which has only a getter"
    );

    expect(() => {
      (vo as any).value.prop1 = "aaaaa";
    }).toThrowError(
      "Cannot assign to read only property 'prop1' of object '#<Object>'"
    );
  });
});
