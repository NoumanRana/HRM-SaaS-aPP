namespace Indotalent.Recruitment {
    export interface ApplicantEducationRow {
        Id?: number;
        ApplicantId?: number;
        SchoolName?: string;
        StudyMajor?: string;
        Grade?: string;
        ShortNote?: string;
        StartDate?: string;
        EndDate?: string;
        ApplicantName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ApplicantEducationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SchoolName';
        export const localTextPrefix = 'Recruitment.ApplicantEducation';
        export const lookupKey = 'Recruitment.ApplicantEducation';

        export function getLookup(): Q.Lookup<ApplicantEducationRow> {
            return Q.getLookup<ApplicantEducationRow>('Recruitment.ApplicantEducation');
        }
        export const deletePermission = 'Recruitment:Applicant';
        export const insertPermission = 'Recruitment:Applicant';
        export const readPermission = 'Recruitment:Applicant';
        export const updatePermission = 'Recruitment:Applicant';

        export declare const enum Fields {
            Id = "Id",
            ApplicantId = "ApplicantId",
            SchoolName = "SchoolName",
            StudyMajor = "StudyMajor",
            Grade = "Grade",
            ShortNote = "ShortNote",
            StartDate = "StartDate",
            EndDate = "EndDate",
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
