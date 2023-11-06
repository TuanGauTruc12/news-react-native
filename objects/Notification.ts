import { parseDate } from "../utils";
import { User } from "./User";

export class Notification{
    private _notification: string;
    private _timeNotification: string;
    private _author: User;

    constructor(notification: string, timeNotification: string, author: User){
        this._notification = notification;
        this._timeNotification = parseDate(timeNotification);
        this._author = author;
    }

    /**
     * Getter notification
     * @return {string}
     */
	public get notification(): string {
		return this._notification;
	}

    /**
     * Getter timeNotification
     * @return {string}
     */
	public get timeNotification(): string {
		return this._timeNotification;
	}

    /**
     * Getter author
     * @return {User}
     */
	public get author(): User {
		return this._author;
	}

    /**
     * Setter notification
     * @param {string} value
     */
	public set notification(value: string) {
		this._notification = value;
	}

    /**
     * Setter timeNotification
     * @param {string} value
     */
	public set timeNotification(value: string) {
		this._timeNotification = parseDate(value);
	}

    /**
     * Setter author
     * @param {User} value
     */
	public set author(value: User) {
		this._author = value;
	}

}