using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.TrainingRow>;
using MyRow = Indotalent.EmployeeSelfService.TrainingRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITrainingListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingListHandler
    {
        public TrainingListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}