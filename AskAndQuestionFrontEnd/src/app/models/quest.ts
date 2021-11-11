
import { Ask } from "./ask";

export class Quest{

    Id?: number;
    Name?: string;
    Description?: string;
    DateCreated?: Date;
    Asks?: Ask[];


    /**
     *
     */
    constructor(
        id: number, name: string,description: string, dateCreate: Date,listAsk: Ask[]
    ) {
        this.Id = id;
        this.Name = name;
        this.Description =description;
        this.DateCreated = dateCreate;
        this.Asks = listAsk;
        
    }
}