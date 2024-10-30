using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.AnnouncementRow>;
using MyRow = Indotalent.EmployeeSelfService.AnnouncementRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IAnnouncementListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class AnnouncementListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementListHandler
    {
        protected IUserRetrieveService UserRetrieveService { get; }
        protected IUserAccessor UserAccessor { get; }
        public AnnouncementListHandler(IRequestContext context, IUserRetrieveService userRetrieveService, IUserAccessor userAccessor)
             : base(context)
        {
            UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
        }
    }
}