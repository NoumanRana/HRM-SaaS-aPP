using Serenity.Navigation;
using MyPages = Indotalent.Recruitment.Pages;


[assembly: NavigationMenu(8400, "Recruitment", icon: "fa-handshake-o")]
[assembly: NavigationLink(8400, "Recruitment/Vacancy", typeof(MyPages.VacancyController), icon: "fa-folder")] 
[assembly: NavigationLink(8400, "Recruitment/Applicant", typeof(MyPages.ApplicantController), icon: "fa-folder")] 
[assembly: NavigationLink(8400, "Recruitment/Interview", typeof(MyPages.InterviewController), icon: "fa-folder")] 