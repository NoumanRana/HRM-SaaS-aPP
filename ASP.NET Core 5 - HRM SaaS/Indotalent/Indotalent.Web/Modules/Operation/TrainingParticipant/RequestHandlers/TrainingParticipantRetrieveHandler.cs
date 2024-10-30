using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.TrainingParticipantRow>;
using MyRow = Indotalent.Operation.TrainingParticipantRow;

namespace Indotalent.Operation
{
    public interface ITrainingParticipantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingParticipantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingParticipantRetrieveHandler
    {
        public TrainingParticipantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}