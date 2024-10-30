﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.EmployeeSelfService.BusinessTripParticipantRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IBusinessTripParticipantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripParticipantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripParticipantDeleteHandler
    {
        public BusinessTripParticipantDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}