using BackEnd.Domains.IRepositories;
using BackEnd.Domains.Models;
using BackEnd.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Repositories
{
    public class AnswerQuestRepository : IAnswerQuestRepository
    {
        private readonly AplicationDbContext dbContext;
        public AnswerQuestRepository( AplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<List<QuestAnswer>> GetQuestAnswers(int idQuest, int idUser)
        {
            var list = await dbContext.QuestAnswer.Where(c => c.QuestId == idQuest
                                                            && c.Active == 1
                                                   && c.Quest.UsuarioId == idUser).
                                                   OrderByDescending(c => c.Date).ToListAsync();
            return list;
        }

        public async Task SaveAnswerQuest(QuestAnswer questAnswer) 
        {
            questAnswer.Active = 1;
            questAnswer.Date = DateTime.Now;
            dbContext.Add(questAnswer);
            await dbContext.SaveChangesAsync();
        } 
        
            
        
    }
}
