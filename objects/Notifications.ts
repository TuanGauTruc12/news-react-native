import { Notification } from "./Notification";

export class Notifications{
    private _notifications: Notification[];
    private _timeNotification: string;

    constructor(notifications: Notification[], timeNotification: string){
        this._notifications = notifications;
        this._timeNotification = timeNotification;
    }
    /**
     * Getter notifications
     * @return {Notification[]}
     */
	public get notifications(): Notification[] {
		return this._notifications;
	}

    /**
     * Getter timeNotification
     * @return {string}
     */
	public get timeNotification(): string {
		return this._timeNotification;
	}

    /**
     * Setter notifications
     * @param {Notification[]} value
     */
	public set notifications(value: Notification[]) {
		this._notifications = value;
	}

    /**
     * Setter timeNotification
     * @param {string} value
     */
	public set timeNotification(value: string) {
		this._timeNotification = value;
	}
    

}