using Serenity.Navigation;
using MyPages = Indotalent.Payrolls.Pages;


[assembly: NavigationMenu(8700, "Payrolls", icon: "fa-dollar")]
[assembly: NavigationLink(8700, "Payrolls/Income", typeof(MyPages.IncomeController), icon: "fa-folder")]
[assembly: NavigationLink(8700, "Payrolls/Deduction", typeof(MyPages.DeductionController), icon: "fa-folder")]
[assembly: NavigationLink(8700, "Payrolls/Grade", typeof(MyPages.GradeController), icon: "fa-folder")]
[assembly: NavigationLink(8700, "Payrolls/Employee", typeof(MyPages.EmployeeController), icon: "fa-folder")]
[assembly: NavigationLink(8700, "Payrolls/Payroll", typeof(MyPages.PayrollController), icon: "fa-folder")] 