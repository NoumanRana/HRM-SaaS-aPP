using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.Employee")]
    [BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
    public class EmployeeForm
    {
        [Tab("General")]
        [Category("Employee Info")]
        public String Name { get; set; }
        [HalfWidth]
        public Int32 GenderId { get; set; }
        [HalfWidth]
        public String EmployeeNumber { get; set; }
        [HalfWidth]
        public String TaxNumber { get; set; }
        [HalfWidth]
        public String BiometricNumber { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Employee Picture")]
        public String Picture { get; set; }

        [Category("Birth Info")]
        [HalfWidth]
        public DateTime DateOfBirth { get; set; }
        [HalfWidth]
        public String PlaceOfBirth { get; set; }

        [Category("Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }

        [Category("Organization")]
        [HalfWidth]
        public DateTime DateOfJoining { get; set; }
        [HalfWidth]
        public Int32 DepartmentId { get; set; }
        [HalfWidth]
        public Int32 GradeId { get; set; }
        [HalfWidth]
        public Int32 DesignationId { get; set; }
        [HalfWidth]
        public Int32 BranchId { get; set; }
        [HalfWidth]
        public Int32 SupervisorId { get; set; }

        [Category("Leave")]
        public Double LeaveQuota { get; set; }
        public Double LeaveTaken { get; set; }

        [Category("Payroll")]
        public Double BasicSalary { get; set; }

        [EmployeeIncomeEditor]
        public List<EmployeeIncomeRow> IncomeList { get; set; }

        [EmployeeDeductionEditor]
        public List<EmployeeDeductionRow> DeductionList { get; set; }
        public String BankAccountForPayroll { get; set; }
        public String BankNameForPayroll { get; set; }

        [Tab("Family")]
        [Category("Spouse Info")]
        public String SpouseName { get; set; }
        public String SpouseProfession { get; set; }
        public DateTime SpouseDateOfBirth { get; set; }

        [Category("Spouse Address")]
        public String SpouseStreet { get; set; }
        public String SpouseCity { get; set; }
        public String SpouseState { get; set; }
        public String SpouseZipCode { get; set; }
        public String SpousePhone { get; set; }
        public String SpouseEmail { get; set; }

        [Category("Parents")]
        [EmployeeParentEditor]
        public List<EmployeeParentRow> ParentList { get; set; }

        [Category("Children")]
        [EmployeeChildrenEditor]
        public List<EmployeeChildrenRow> ChildrenList { get; set; }


        [Tab("Documents")]
        [Category("Info")]
        [EmployeeDocumentEditor]
        public List<EmployeeDocumentRow> DocumentList { get; set; }


        [Tab("Experiences")]
        [Category("Info")]
        [EmployeeExperienceEditor]
        public List<EmployeeExperienceRow> ExperienceList { get; set; }


        [Tab("Educations")]
        [Category("Degree")]
        public Int32 LatestEducationDegree { get; set; }
        [Category("Info")]
        [EmployeeEducationEditor]
        public List<EmployeeEducationRow> EducationList { get; set; }


        [Tab("Skills")]
        [Category("Info")]
        [EmployeeTopSkillEditor]
        public List<EmployeeTopSkillRow> TopSkillList { get; set; }


        [Tab("Job Desc")]
        [Category("Info")]
        [EmployeeJobDescriptionEditor]
        public List<EmployeeJobDescriptionRow> JobDescriptionList { get; set; }


        [Tab("KPI")]
        [Category("Info")]
        [EmployeeKpiEditor]
        public List<EmployeeKpiRow> KpiList { get; set; }


        [Tab("OKR")]
        [Category("Objectives")]
        [EmployeeOkrObjectiveEditor]
        public List<EmployeeOkrObjectiveRow> OkrObjectiveList { get; set; }

        [Category("Results")]
        [EmployeeOkrResultEditor]
        public List<EmployeeOkrResultRow> OkrResultList { get; set; }


        [Tab("System User")]
        [Category("Info")]
        public Int32 SystemUserId { get; set; }
    }
}