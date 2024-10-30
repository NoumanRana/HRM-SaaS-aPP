using Serenity.Navigation;
using MyPages = Indotalent.Performance.Pages;

[assembly: NavigationMenu(8500, "Performance", icon: "fa-bolt")]
[assembly: NavigationLink(8500, "Performance/Evaluation", typeof(MyPages.EvaluationController), icon: "fa-folder")] 
[assembly: NavigationLink(8500, "Performance/Appraisal", typeof(MyPages.AppraisalController), icon: "fa-folder")] 
[assembly: NavigationLink(8500, "Performance/Promotion", typeof(MyPages.PromotionController), icon: "fa-folder")] 
[assembly: NavigationLink(8500, "Performance/Transfer", typeof(MyPages.TransferController), icon: "fa-folder")] 