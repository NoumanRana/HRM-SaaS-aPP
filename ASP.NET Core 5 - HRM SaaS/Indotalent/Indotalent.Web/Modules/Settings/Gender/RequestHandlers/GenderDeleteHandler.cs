using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Settings.GenderRow;

namespace Indotalent.Settings
{
    public interface IGenderDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GenderDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGenderDeleteHandler
    {
        public GenderDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}