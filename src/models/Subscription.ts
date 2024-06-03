export class Subscription {
	private readonly _id: number;
	private _startDate: Date;
	private _endDate: Date;
	private _planName: string;

	constructor(
		id: number,
		startDate: Date,
		endDate: Date,
		planName: string) {
		this._id = id;
		this._planName = planName;
		this._startDate = startDate;
		this._endDate = endDate;
	}

	get id(): number {
		return this._id;
	}

	get startDate(): Date {
		return this._startDate;
	}

	get endDate(): Date {
		return this._endDate;
	}

	get planName(): string {
		return this._planName;
	}

	// 	SETTERS
	set startDate(value: Date) {
		this._startDate = value;
	}

	set endDate(value: Date) {
		this._endDate = value;
	}

	set planName(value: string) {
		this._planName = value;
	}
}