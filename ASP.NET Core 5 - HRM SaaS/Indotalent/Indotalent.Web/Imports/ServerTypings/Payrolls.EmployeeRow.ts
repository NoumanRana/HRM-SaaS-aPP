namespace Indotalent.Payrolls {
    export interface EmployeeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        EmployeeNumber?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Picture?: string;
        GradeId?: number;
        BasicSalary?: number;
        DesignationId?: number;
        DepartmentId?: number;
        BankAccountForPayroll?: string;
        BankNameForPayroll?: string;
        DateOfBirth?: string;
        PlaceOfBirth?: string;
        BiometricNumber?: string;
        TaxNumber?: string;
        GenderId?: number;
        GenderName?: string;
        DateOfJoining?: string;
        BranchId?: number;
        BranchName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        GradeName?: string;
        DesignationName?: string;
        DepartmentName?: string;
        LeaveQuota?: number;
        LeaveTaken?: number;
        LatestEducationDegree?: LatestEducationDegree;
        SpouseName?: string;
        SpouseDateOfBirth?: string;
        SpouseProfession?: string;
        SpouseStreet?: string;
        SpouseCity?: string;
        SpouseState?: string;
        SpouseZipCode?: string;
        SpousePhone?: string;
        SpouseEmail?: string;
        IncomeList?: EmployeeIncomeRow[];
        DeductionList?: EmployeeDeductionRow[];
        DocumentList?: EmployeeDocumentRow[];
        ExperienceList?: EmployeeExperienceRow[];
        EducationList?: EmployeeEducationRow[];
        TopSkillList?: EmployeeTopSkillRow[];
        ParentList?: EmployeeParentRow[];
        ChildrenList?: EmployeeChildrenRow[];
        JobDescriptionList?: EmployeeJobDescriptionRow[];
        KpiList?: EmployeeKpiRow[];
        OkrObjectiveList?: EmployeeOkrObjectiveRow[];
        OkrResultList?: EmployeeOkrResultRow[];
        SystemUserId?: number;
        SystemUsername?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.Employee';
        export const lookupKey = 'Payrolls.Employee';

        export function getLookup(): Q.Lookup<EmployeeRow> {
            return Q.getLookup<EmployeeRow>('Payrolls.Employee');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            EmployeeNumber = "EmployeeNumber",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Picture = "Picture",
            GradeId = "GradeId",
            BasicSalary = "BasicSalary",
            DesignationId = "DesignationId",
            DepartmentId = "DepartmentId",
            BankAccountForPayroll = "BankAccountForPayroll",
            BankNameForPayroll = "BankNameForPayroll",
            DateOfBirth = "DateOfBirth",
            PlaceOfBirth = "PlaceOfBirth",
            BiometricNumber = "BiometricNumber",
            TaxNumber = "TaxNumber",
            GenderId = "GenderId",
            GenderName = "GenderName",
            DateOfJoining = "DateOfJoining",
            BranchId = "BranchId",
            BranchName = "BranchName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            GradeName = "GradeName",
            DesignationName = "DesignationName",
            DepartmentName = "DepartmentName",
            LeaveQuota = "LeaveQuota",
            LeaveTaken = "LeaveTaken",
            LatestEducationDegree = "LatestEducationDegree",
            SpouseName = "SpouseName",
            SpouseDateOfBirth = "SpouseDateOfBirth",
            SpouseProfession = "SpouseProfession",
            SpouseStreet = "SpouseStreet",
            SpouseCity = "SpouseCity",
            SpouseState = "SpouseState",
            SpouseZipCode = "SpouseZipCode",
            SpousePhone = "SpousePhone",
            SpouseEmail = "SpouseEmail",
            IncomeList = "IncomeList",
            DeductionList = "DeductionList",
            DocumentList = "DocumentList",
            ExperienceList = "ExperienceList",
            EducationList = "EducationList",
            TopSkillList = "TopSkillList",
            ParentList = "ParentList",
            ChildrenList = "ChildrenList",
            JobDescriptionList = "JobDescriptionList",
            KpiList = "KpiList",
            OkrObjectiveList = "OkrObjectiveList",
            OkrResultList = "OkrResultList",
            SystemUserId = "SystemUserId",
            SystemUsername = "SystemUsername",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
