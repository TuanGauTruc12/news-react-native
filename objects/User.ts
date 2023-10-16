export class User{

    private _id:number;
    private _displayName:string;
    private _avatar: string;

    constructor(id: number, displayName:string,avatar: string){
        this._id = id;
        this._displayName = displayName;
        this._avatar = avatar;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter displayName
     * @return {string}
     */
	public get displayName(): string {
		return this._displayName;
	}

    /**
     * Getter avatar
     * @return {string}
     */
	public get avatar(): string {
		return this._avatar;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter displayName
     * @param {string} value
     */
	public set displayName(value: string) {
		this._displayName = value;
	}

    /**
     * Setter avatar
     * @param {string} value
     */
	public set avatar(value: string) {
		this._avatar = value;
	}
}