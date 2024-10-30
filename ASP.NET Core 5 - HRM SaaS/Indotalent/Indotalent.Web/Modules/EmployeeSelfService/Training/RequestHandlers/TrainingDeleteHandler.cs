using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.EmployeeSelfService.TrainingRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITrainingDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TrainingDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITrainingDeleteHandler
    {
        public TrainingDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}