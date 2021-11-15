import { Answer } from "./answer";

export class Ask{
    Description: string;
    Answers: Answer[];
    hide?: boolean;


    /**
     *
     */
    constructor( Description: string,
        listAnswer: Answer[],
        hide?: boolean,) {
            
            this.Description =Description;
            this.Answers = listAnswer;
            this.hide = true;

    }
}