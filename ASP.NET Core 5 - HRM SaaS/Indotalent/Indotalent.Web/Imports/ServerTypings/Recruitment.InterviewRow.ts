namespace Indotalent.Recruitment {
    export interface InterviewRow {
        Id?: number;
        Room?: string;
        Number?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        StartDate?: string;
        EndDate?: string;
        ApplicantId?: number;
        ApplicantName?: string;
        VacancyId?: number;
        VacancyNumber?: string;
        JobTitle?: string;
        HiringManagerId?: number;
        HiringManagerName?: string;
        TenantId?: number;
        TenantName?: string;
        ResultList?: InterviewResultRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace InterviewRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Recruitment.Interview';
        export const lookupKey = 'Recruitment.Interview';

        export function getLookup(): Q.Lookup<InterviewRow> {
            return Q.getLookup<InterviewRow>('Recruitment.Interview');
        }
        export const deletePermission = 'Recruitment:Interview';
        export const insertPermission = 'Recruitment:Interview';
        export const readPermission = 'Recruitment:Interview';
        export const updatePermission = 'Recruitment:Interview';

        export declare const enum Fields {
            Id = "Id",
            Room = "Room",
            Number = "Number",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ApplicantId = "ApplicantId",
            ApplicantName = "ApplicantName",
            VacancyId = "VacancyId",
            VacancyNumber = "VacancyNumber",
            JobTitle = "JobTitle",
            HiringManagerId = "HiringManagerId",
            HiringManagerName = "HiringManagerName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ResultList = "ResultList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
