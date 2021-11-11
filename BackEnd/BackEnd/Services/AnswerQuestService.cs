using BackEnd.Domains.IRepositories;
using BackEnd.Domains.IServices;
using BackEnd.Domains.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class AnswerQuestService : IAnswerQuestService
    {
        private readonly IAnswerQuestRepository answerQuestRepository;

        public AnswerQuestService(IAnswerQuestRepository answerQuestRepository)
        {
            this.answerQuestRepository = answerQuestRepository;
        }

        public async Task<List<QuestAnswer>> GetQuestAnswers(int idQuest, int idUser)
        {
          return  await answerQuestRepository.GetQuestAnswers(idQuest, idUser);
        }

        public async Task SaveAnswerQuest(QuestAnswer questAnswer) 
        {
            await answerQuestRepository.SaveAnswerQuest(questAnswer);
        } 
        
       
        
    }
}
