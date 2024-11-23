﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.ThresholdRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.ThresholdRow;

namespace Indotalent.Payrolls
{
    public interface IThresholdSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ThresholdSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IThresholdSaveHandler
    {
        public ThresholdSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}