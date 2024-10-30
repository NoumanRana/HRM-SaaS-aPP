using Serenity.Navigation;
using MyPages = Indotalent.Settings.Pages;

[assembly: NavigationMenu(8900, "Settings", icon: "fa-gear")]
[assembly: NavigationLink(8900, "Settings/My Company", typeof(MyPages.MyCompanyController), icon: "fa-home")]
[assembly: NavigationLink(8900, "Settings/Gender", typeof(MyPages.GenderController), icon: "fa-folder")]