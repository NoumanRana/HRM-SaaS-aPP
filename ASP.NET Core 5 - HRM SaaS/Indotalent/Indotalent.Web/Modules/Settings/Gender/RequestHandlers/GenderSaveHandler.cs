using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Settings.GenderRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Settings.GenderRow;

namespace Indotalent.Settings
{
    public interface IGenderSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GenderSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenderSaveHandler
    {
        public GenderSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}