﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.ReimbursementDetailRow;

namespace Indotalent.Operation
{
    public interface IReimbursementDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementDetailDeleteHandler
    {
        public ReimbursementDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}