using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.TrainingParticipantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.TrainingParticipantRow;

namespace Indotalent.Operation
{
    public interface ITrainingParticipantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingParticipantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingParticipantSaveHandler
    {
        public TrainingParticipantSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}