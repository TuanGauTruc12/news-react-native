import { Comment } from "./Comment";

export class Comments{
    private _comments: Comment[];
    private _idComment: number;

    constructor(comments:Comment[], idComment:number){
        this._comments = comments;
        this._idComment = idComment;
    }

	public get comments(): Comment[] {
		return this._comments;
	}

	public get idComment(): number {
		return this._idComment;
	}

	public set comments(value: Comment[]) {
		this._comments = value;
	}

	public set idComment(value: number) {
		this._idComment = value;
	}

}
