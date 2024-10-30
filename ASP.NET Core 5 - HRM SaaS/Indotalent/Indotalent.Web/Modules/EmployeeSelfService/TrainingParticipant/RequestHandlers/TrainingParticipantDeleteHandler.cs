using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.EmployeeSelfService.TrainingParticipantRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITrainingParticipantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingParticipantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingParticipantDeleteHandler
    {
        public TrainingParticipantDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}