using BackEnd.Domains.IServices;
using BackEnd.Domains.Models;
using BackEnd.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerQuestController : ControllerBase
    {
        private readonly IAnswerQuestService answerQuestService;
        public AnswerQuestController(IAnswerQuestService answerQuestService)
        {
            this.answerQuestService = answerQuestService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(QuestAnswer questAnswer)
        {
            try
            {
                if (questAnswer == null)
                {
                    return BadRequest();
                }
                await answerQuestService.SaveAnswerQuest(questAnswer);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("{idQuest}")]
        public async Task<IActionResult> Get(int idQuest)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                
                int idUser = JwtConfigurator.GetTokenUsuarioId(identity);

                var list = await answerQuestService.GetQuestAnswers(idQuest, idUser);


                if (list == null)
                {
                    return BadRequest(new { message = "No existen datos" });
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
