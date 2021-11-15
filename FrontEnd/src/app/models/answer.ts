export class Answer{

    Id?: number;
    Description: string;
    isCorrect: boolean;

    constructor(description: string, isCorrect: boolean, id?:number) {
        this.Id = id;
        this.Description = description;
        this.isCorrect = isCorrect;

    }

}