namespace Indotalent.Recruitment {
    export interface ApplicantRow {
        Id?: number;
        Name?: string;
        Number?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Picture?: string;
        DateOfBirth?: string;
        PlaceOfBirth?: string;
        GenderId?: number;
        GenderName?: string;
        VacancyId?: number;
        VacancyNumber?: string;
        JobTitle?: string;
        HiringManagerId?: number;
        HiringManagerName?: string;
        TenantId?: number;
        TenantName?: string;
        ExperienceList?: ApplicantExperienceRow[];
        EducationList?: ApplicantEducationRow[];
        SkillList?: ApplicantTopSkillRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ApplicantRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Recruitment.Applicant';
        export const lookupKey = 'Recruitment.Applicant';

        export function getLookup(): Q.Lookup<ApplicantRow> {
            return Q.getLookup<ApplicantRow>('Recruitment.Applicant');
        }
        export const deletePermission = 'Recruitment:Applicant';
        export const insertPermission = 'Recruitment:Applicant';
        export const readPermission = 'Recruitment:Applicant';
        export const updatePermission = 'Recruitment:Applicant';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Number = "Number",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Picture = "Picture",
            DateOfBirth = "DateOfBirth",
            PlaceOfBirth = "PlaceOfBirth",
            GenderId = "GenderId",
            GenderName = "GenderName",
            VacancyId = "VacancyId",
            VacancyNumber = "VacancyNumber",
            JobTitle = "JobTitle",
            HiringManagerId = "HiringManagerId",
            HiringManagerName = "HiringManagerName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ExperienceList = "ExperienceList",
            EducationList = "EducationList",
            SkillList = "SkillList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
