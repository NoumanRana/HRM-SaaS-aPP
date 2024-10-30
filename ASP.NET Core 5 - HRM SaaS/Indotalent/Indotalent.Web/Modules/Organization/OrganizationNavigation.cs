using Serenity.Navigation;
using MyPages = Indotalent.Organization.Pages;

[assembly: NavigationMenu(8800, "Organization", icon: "fa-bank")]
[assembly: NavigationLink(8800, "Organization/Designation", typeof(MyPages.DesignationController), icon: "fa-folder")]
[assembly: NavigationLink(8800, "Organization/Department", typeof(MyPages.DepartmentController), icon: "fa-folder")]
[assembly: NavigationLink(8800, "Organization/Branch", typeof(MyPages.BranchController), icon: "fa-folder")]