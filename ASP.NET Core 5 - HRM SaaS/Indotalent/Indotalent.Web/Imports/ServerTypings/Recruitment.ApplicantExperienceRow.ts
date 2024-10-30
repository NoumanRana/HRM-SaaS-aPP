namespace Indotalent.Recruitment {
    export interface ApplicantExperienceRow {
        Id?: number;
        ApplicantId?: number;
        CompanyName?: string;
        Position?: string;
        StartDate?: string;
        EndDate?: string;
        Salary?: number;
        ApplicantName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ApplicantExperienceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Recruitment.ApplicantExperience';
        export const lookupKey = 'Recruitment.ApplicantExperience';

        export function getLookup(): Q.Lookup<ApplicantExperienceRow> {
            return Q.getLookup<ApplicantExperienceRow>('Recruitment.ApplicantExperience');
        }
        export const deletePermission = 'Recruitment:Applicant';
        export const insertPermission = 'Recruitment:Applicant';
        export const readPermission = 'Recruitment:Applicant';
        export const updatePermission = 'Recruitment:Applicant';

        export declare const enum Fields {
            Id = "Id",
            ApplicantId = "ApplicantId",
            CompanyName = "CompanyName",
            Position = "Position",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Salary = "Salary",
            ApplicantName = "ApplicantName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
