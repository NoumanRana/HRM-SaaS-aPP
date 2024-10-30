using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.TrainingParticipantRow>;
using MyRow = Indotalent.Operation.TrainingParticipantRow;

namespace Indotalent.Operation
{
    public interface ITrainingParticipantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingParticipantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingParticipantListHandler
    {
        public TrainingParticipantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}