using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Settings.GenderRow>;
using MyRow = Indotalent.Settings.GenderRow;

namespace Indotalent.Settings
{
    public interface IGenderRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GenderRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGenderRetrieveHandler
    {
        public GenderRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}