export class Profile {
	private readonly _id: number;
	private readonly _username: string;
	private readonly _age: number;
	private readonly _gender: string;
	private readonly _photoUrl: string;

	constructor(
		id: number,
		username: string,
		age: number,
		gender: string,
		photoUrl: string,
	) {
		this._id = id;
		this._username = username;
		this._age = age;
		this._gender = gender;
		this._photoUrl = photoUrl;
	}

	get id(): number {
		return this._id;
	}

	get username(): string {
		return this._username;
	}

	get age(): number {
		return this._age;
	}

	get gender(): string {
		return this._gender;
	}

	get photoUrl(): string {
		return this._photoUrl;
	}
}