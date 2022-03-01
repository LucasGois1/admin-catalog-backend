import { v4 as uuidv4, validate as uuidValidation } from "uuid";
import InvalidUuidError from "../errors/invalid-uuid-error";

export default class UniqueEntityId {
  constructor(public readonly value?: string) {
    this.value = value || uuidv4();
    this.validate();
  }

  private validate() {
    const isValid = uuidValidation(this.value);

    if (!isValid) throw new InvalidUuidError();
  }
}
