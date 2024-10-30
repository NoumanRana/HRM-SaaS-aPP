namespace Indotalent.Recruitment {
    export interface VacancyRow {
        Id?: number;
        Number?: string;
        JobTitle?: string;
        JobDescription?: string;
        HiringManagerId?: number;
        HiringManagerName?: string;
        HiringManagerDepartmentId?: number;
        HiringManagerDepartmentName?: string;
        HiringManagerBranchId?: number;
        HiringManagerBranchName?: string;
        OpenDate?: string;
        CloseDate?: string;
        TenantId?: number;
        TenantName?: string;
        VacancyRequirementList?: VacancyRequirementRow[];
        VacancyBenefitList?: VacancyBenefitRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace VacancyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Recruitment.Vacancy';
        export const lookupKey = 'Recruitment.Vacancy';

        export function getLookup(): Q.Lookup<VacancyRow> {
            return Q.getLookup<VacancyRow>('Recruitment.Vacancy');
        }
        export const deletePermission = 'Recruitment:Vacancy';
        export const insertPermission = 'Recruitment:Vacancy';
        export const readPermission = 'Recruitment:Vacancy';
        export const updatePermission = 'Recruitment:Vacancy';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            JobTitle = "JobTitle",
            JobDescription = "JobDescription",
            HiringManagerId = "HiringManagerId",
            HiringManagerName = "HiringManagerName",
            HiringManagerDepartmentId = "HiringManagerDepartmentId",
            HiringManagerDepartmentName = "HiringManagerDepartmentName",
            HiringManagerBranchId = "HiringManagerBranchId",
            HiringManagerBranchName = "HiringManagerBranchName",
            OpenDate = "OpenDate",
            CloseDate = "CloseDate",
            TenantId = "TenantId",
            TenantName = "TenantName",
            VacancyRequirementList = "VacancyRequirementList",
            VacancyBenefitList = "VacancyBenefitList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
