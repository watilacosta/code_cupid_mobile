export class Plan {
	private readonly _id: number;
	private _name: string;
	private _duration_in_months: number;
	private _price: number;

	constructor(
		id: number,
		name: string,
		duration_in_months: number,
		price: number) {
		this._id = id;
		this._name = name;
		this._duration_in_months = duration_in_months;
		this._price = price;
	}

	get id(): number {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get duration_in_months(): number {
		return this._duration_in_months;
	}

	get price(): number {
		return this._price;
	}

	// SETS

	set name(value: string) {
		this._name = value;
	}

	set duration_in_months(value: number) {
		this._duration_in_months = value;
	}

	set price(value: number) {
		this._price = value;
	}
}