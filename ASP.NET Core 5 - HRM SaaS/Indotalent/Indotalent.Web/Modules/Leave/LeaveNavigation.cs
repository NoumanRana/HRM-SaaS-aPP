using Serenity.Navigation;
using MyPages = Indotalent.Leave.Pages;


[assembly: NavigationMenu(8300, "Leave", icon: "fa-umbrella")]
[assembly: NavigationLink(8300, "Leave/Leave Type", typeof(MyPages.LeaveTypeController), icon: "fa-folder")] 
[assembly: NavigationLink(8300, "Leave/Leave Request", typeof(MyPages.LeaveRequestController), icon: "fa-folder")] 