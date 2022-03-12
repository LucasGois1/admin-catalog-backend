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
});
