import {Subscription} from "@/models/Subscription";

export class User {
  private readonly _id: number;
  private readonly _age: number
  private _birthdate: Date;
  private _email: string;
  private _phone_number: string;
  private _username: string;
  private _subscription: Subscription;


  constructor(
    id: number,
    age: number,
    birthdate: Date,
    email: string,
    phone_number: string,
    username: string,
    subscription: Subscription
  ) {
    this._id = id;
    this._age = age
    this._birthdate = birthdate;
    this._email = email;
    this._phone_number = phone_number;
    this._username = username;
    this._subscription = subscription;
  }

  get id(): number {
    return this._id;
  }

  get age(): number {
    return this._age
  }
   get birthdate(): Date {
    return this._birthdate;
  }

  get email(): string {
    return this._email;
  }

  get phone_number(): string {
    return this._phone_number;
  }

  get username(): string {
    return this._username;
  }

  get subscription(): Subscription {
    return this._subscription;
  }

  // SET
   set birthdate(birthdate: Date) {
    this._birthdate = birthdate;
  }

  set email(email: string) {
    this._email = email;
  }

  set phone_number(phone_number: string) {
    this._phone_number = phone_number;
  }

  set username(username: string) {
    this._username = username;
  }

  set subscription(subscription: Subscription) {
    this._subscription = subscription;
  }
}