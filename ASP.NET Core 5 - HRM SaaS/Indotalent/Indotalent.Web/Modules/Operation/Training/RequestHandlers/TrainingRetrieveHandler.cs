using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.TrainingRow>;
using MyRow = Indotalent.Operation.TrainingRow;

namespace Indotalent.Operation
{
    public interface ITrainingRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingRetrieveHandler
    {
        public TrainingRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}