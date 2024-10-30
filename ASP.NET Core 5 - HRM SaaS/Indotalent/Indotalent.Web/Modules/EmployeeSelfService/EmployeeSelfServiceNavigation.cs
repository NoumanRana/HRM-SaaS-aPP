using Serenity.Navigation;
using MyPages = Indotalent.EmployeeSelfService.Pages;

[assembly: NavigationMenu(8100, "Employee Self Service", icon: "fa-life-bouy")]
[assembly: NavigationLink(8100, "Employee Self Service/Punch In", typeof(MyPages.PunchInController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Punch Out", typeof(MyPages.PunchOutController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Overtime", typeof(MyPages.OvertimeController), icon: "fa-folder")]
[assembly: NavigationLink(8100, "Employee Self Service/Timesheet", typeof(MyPages.TimesheetController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Leave Request", typeof(MyPages.LeaveRequestController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Reimbursement", typeof(MyPages.ReimbursementController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Ticket", typeof(MyPages.TicketController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Meeting", typeof(MyPages.MeetingController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Training", typeof(MyPages.TrainingController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Business Trip", typeof(MyPages.BusinessTripController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Complaint", typeof(MyPages.ComplaintController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Warning", typeof(MyPages.WarningController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Award", typeof(MyPages.AwardController), icon: "fa-folder")] 
[assembly: NavigationLink(8100, "Employee Self Service/Announcement", typeof(MyPages.AnnouncementController), icon: "fa-folder")] 