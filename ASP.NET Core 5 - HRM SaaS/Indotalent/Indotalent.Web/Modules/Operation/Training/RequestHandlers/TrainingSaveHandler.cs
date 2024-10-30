using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.TrainingRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.TrainingRow;

namespace Indotalent.Operation
{
    public interface ITrainingSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingSaveHandler
    {
        public TrainingSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}