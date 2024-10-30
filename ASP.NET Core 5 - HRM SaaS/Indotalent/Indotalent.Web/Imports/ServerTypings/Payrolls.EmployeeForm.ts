namespace Indotalent.Payrolls {
    export interface EmployeeForm {
        Name: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        EmployeeNumber: Serenity.StringEditor;
        TaxNumber: Serenity.StringEditor;
        BiometricNumber: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Picture: Serenity.ImageUploadEditor;
        DateOfBirth: Serenity.DateEditor;
        PlaceOfBirth: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        DateOfJoining: Serenity.DateEditor;
        DepartmentId: Serenity.LookupEditor;
        GradeId: Serenity.LookupEditor;
        DesignationId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        LeaveQuota: Serenity.DecimalEditor;
        LeaveTaken: Serenity.DecimalEditor;
        BasicSalary: Serenity.DecimalEditor;
        IncomeList: EmployeeIncomeEditor;
        DeductionList: EmployeeDeductionEditor;
        BankAccountForPayroll: Serenity.StringEditor;
        BankNameForPayroll: Serenity.StringEditor;
        SpouseName: Serenity.StringEditor;
        SpouseProfession: Serenity.StringEditor;
        SpouseDateOfBirth: Serenity.DateEditor;
        SpouseStreet: Serenity.StringEditor;
        SpouseCity: Serenity.StringEditor;
        SpouseState: Serenity.StringEditor;
        SpouseZipCode: Serenity.StringEditor;
        SpousePhone: Serenity.StringEditor;
        SpouseEmail: Serenity.StringEditor;
        ParentList: EmployeeParentEditor;
        ChildrenList: EmployeeChildrenEditor;
        DocumentList: EmployeeDocumentEditor;
        ExperienceList: EmployeeExperienceEditor;
        LatestEducationDegree: Serenity.EnumEditor;
        EducationList: EmployeeEducationEditor;
        TopSkillList: EmployeeTopSkillEditor;
        JobDescriptionList: EmployeeJobDescriptionEditor;
        KpiList: EmployeeKpiEditor;
        OkrObjectiveList: EmployeeOkrObjectiveEditor;
        OkrResultList: EmployeeOkrResultEditor;
        SystemUserId: Serenity.LookupEditor;
    }

    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.Employee';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeForm.init)  {
                EmployeeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.DateEditor;
                var w5 = s.DecimalEditor;
                var w6 = EmployeeIncomeEditor;
                var w7 = EmployeeDeductionEditor;
                var w8 = EmployeeParentEditor;
                var w9 = EmployeeChildrenEditor;
                var w10 = EmployeeDocumentEditor;
                var w11 = EmployeeExperienceEditor;
                var w12 = s.EnumEditor;
                var w13 = EmployeeEducationEditor;
                var w14 = EmployeeTopSkillEditor;
                var w15 = EmployeeJobDescriptionEditor;
                var w16 = EmployeeKpiEditor;
                var w17 = EmployeeOkrObjectiveEditor;
                var w18 = EmployeeOkrResultEditor;

                Q.initFormType(EmployeeForm, [
                    'Name', w0,
                    'GenderId', w1,
                    'EmployeeNumber', w0,
                    'TaxNumber', w0,
                    'BiometricNumber', w0,
                    'Description', w2,
                    'Picture', w3,
                    'DateOfBirth', w4,
                    'PlaceOfBirth', w0,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'DateOfJoining', w4,
                    'DepartmentId', w1,
                    'GradeId', w1,
                    'DesignationId', w1,
                    'BranchId', w1,
                    'SupervisorId', w1,
                    'LeaveQuota', w5,
                    'LeaveTaken', w5,
                    'BasicSalary', w5,
                    'IncomeList', w6,
                    'DeductionList', w7,
                    'BankAccountForPayroll', w0,
                    'BankNameForPayroll', w0,
                    'SpouseName', w0,
                    'SpouseProfession', w0,
                    'SpouseDateOfBirth', w4,
                    'SpouseStreet', w0,
                    'SpouseCity', w0,
                    'SpouseState', w0,
                    'SpouseZipCode', w0,
                    'SpousePhone', w0,
                    'SpouseEmail', w0,
                    'ParentList', w8,
                    'ChildrenList', w9,
                    'DocumentList', w10,
                    'ExperienceList', w11,
                    'LatestEducationDegree', w12,
                    'EducationList', w13,
                    'TopSkillList', w14,
                    'JobDescriptionList', w15,
                    'KpiList', w16,
                    'OkrObjectiveList', w17,
                    'OkrResultList', w18,
                    'SystemUserId', w1
                ]);
            }
        }
    }
}
