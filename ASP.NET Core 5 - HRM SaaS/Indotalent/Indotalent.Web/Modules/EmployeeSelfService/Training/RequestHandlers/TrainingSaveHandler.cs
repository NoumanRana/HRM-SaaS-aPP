using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.TrainingRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.TrainingRow;

namespace Indotalent.EmployeeSelfService
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