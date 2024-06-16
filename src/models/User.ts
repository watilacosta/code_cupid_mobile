import { Subscription } from "@/models/Subscription";

export class User {
  private readonly _id: number;
  private _age: number;
  private _email: string;
  private _phone_number: string;
  private _username: string;
  private _gender: string;
  private _subscription: Subscription;


  constructor(
    id: number,
    age: number,
    email: string,
    phone_number: string,
    username: string,
    gender: string,
    subscription: Subscription
  ) {
    this._id = id;
    this._age = age
    this._email = email;
    this._phone_number = phone_number;
    this._username = username;
    this._gender = gender;
    this._subscription = subscription;
  }

  get id(): number {
    return this._id;
  }

  get age(): number {
    return this._age
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

  get gender(): string {
    return this._gender;
  }

  get subscription(): Subscription {
    return this._subscription;
  }

  // SET
   set age(age: number) {
    this._age = age;
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

  set gender(gender: string) {
    this._gender = gender;
  }

  set subscription(subscription: Subscription) {
    this._subscription = subscription;
  }
}