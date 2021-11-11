import { answerQuestDetail } from "./answerQuestDetail";

export class answerQuest{
    QuestId?: number; 
    NameParticipant?: string;
    QuestAnswerDetails?: answerQuestDetail[]=[];
}