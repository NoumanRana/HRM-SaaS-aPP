using Serenity.Navigation;
using MyPages = Indotalent.Attendance.Pages;

[assembly: NavigationMenu(8200, "Attendance", icon: "fa-clock-o")]
[assembly: NavigationLink(8200, "Attendance/Punch In", typeof(MyPages.PunchInController), icon: "fa-folder")] 
[assembly: NavigationLink(8200, "Attendance/Punch Out", typeof(MyPages.PunchOutController), icon: "fa-folder")] 
[assembly: NavigationLink(8200, "Attendance/Overtime", typeof(MyPages.OvertimeController), icon: "fa-folder")]
[assembly: NavigationLink(8200, "Attendance/Timesheet", typeof(MyPages.TimesheetController), icon: "fa-folder")] 