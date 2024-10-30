using Serenity.Navigation;
using MyPages = Indotalent.Operation.Pages;


[assembly: NavigationMenu(8600, "Operation", icon: "fa-briefcase")]
[assembly: NavigationLink(8600, "Operation/Reimbursement", typeof(MyPages.ReimbursementController), icon: "fa-folder")]
[assembly: NavigationLink(8600, "Operation/Ticket", typeof(MyPages.TicketController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Meeting", typeof(MyPages.MeetingController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Training", typeof(MyPages.TrainingController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Business Trip", typeof(MyPages.BusinessTripController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Asset", typeof(MyPages.AssetController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Asset Hand Over", typeof(MyPages.AssetHandOverController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Complaint", typeof(MyPages.ComplaintController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Event", typeof(MyPages.EventController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Holiday", typeof(MyPages.HolidayController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Award", typeof(MyPages.AwardController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Resignation", typeof(MyPages.ResignationController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Warning", typeof(MyPages.WarningController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Termination", typeof(MyPages.TerminationController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/Announcement", typeof(MyPages.AnnouncementController), icon: "fa-folder")] 
[assembly: NavigationLink(8600, "Operation/SOP", typeof(MyPages.SOPController), icon: "fa-folder")] 