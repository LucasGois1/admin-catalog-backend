import { deepFreeze } from "../../../src/@seedwork/domain/utils/object";

describe("Object functions tests", () => {
  it("Should must a immutable obj", () => {
    const str = deepFreeze("a");

    expect(typeof str).toBe("string");

    const bool = deepFreeze(true);

    expect(typeof bool).toBe("boolean");

    const num = deepFreeze(1);

    expect(typeof num).toBe("number");
  });

  it("should be a immutable object", () => {
    const myObj = deepFreeze({
      prop1: "value1",
      deep: { prop2: "value2", prop3: new Date() },
    });

    expect(() => {
      (myObj as any).prop1 = "aaaaa";
    }).toThrowError(
      "Cannot assign to read only property 'prop1' of object '#<Object>'"
    );

    expect(() => {
      (myObj as any).deep.prop2 = "aaaaa";
    }).toThrowError(
      "Cannot assign to read only property 'prop2' of object '#<Object>'"
    );

    expect(myObj.deep.prop3).toBeInstanceOf(Date);
  });
});
