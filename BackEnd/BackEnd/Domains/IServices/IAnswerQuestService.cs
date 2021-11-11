using BackEnd.Domains.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domains.IServices
{
    public interface IAnswerQuestService
    {
        Task SaveAnswerQuest(QuestAnswer questAnswer);
        Task<List<QuestAnswer>> GetQuestAnswers(int idQuest, int idUser);
    }
}
