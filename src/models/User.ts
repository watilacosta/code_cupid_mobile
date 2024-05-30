 export class User {
  private readonly _id: number;
  private readonly _age: number
  private _bio: string;
  private _birthdate: Date;
  private _email: string
  private _gender: string
  private _locale: string
  private _phone_number: string
  private _username: string

  constructor(
    id: number,
    age: number,
    bio: string,
    birthdate: Date,
    email: string,
    gender: string,
    locale: string,
    phone_number: string,
    username: string
  ) {
    this._id = id;
    this._age = age
    this._bio = bio;
    this._birthdate = birthdate;
    this._email = email;
    this._gender = gender;
    this._locale = locale;
    this._phone_number = phone_number;
    this._username = username;
  }

  get id(): number {
    return this._id;
  }

  get age(): number {
    return this._age
  }

  get bio(): string {
    return this._bio;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  get email(): string {
    return this._email;
  }

  get gender(): string {
    return this._gender;
  }

  get locale(): string {
    return this._locale;
  }

  get phone_number(): string {
    return this._phone_number;
  }

  get username(): string {
    return this._username;
  }

  // SET
  set bio(bio: string) {
    this._bio = bio;
  }

  set birthdate(birthdate: Date) {
    this._birthdate = birthdate;
  }

  set email(email: string) {
    this._email = email;
  }

  set gender(gender: string) {
    this._gender = gender;
  }

  set locale(locale: string) {
    this._locale = locale;
  }

  set phone_number(phone_number: string) {
    this._phone_number = phone_number;
  }

  set username(username: string) {
    this._username = username;
  }
}