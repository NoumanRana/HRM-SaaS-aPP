namespace Indotalent.Recruitment {
    export interface ApplicantTopSkillRow {
        Id?: number;
        ApplicantId?: number;
        SkillName?: string;
        ProficiencyScore?: number;
        ApplicantName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ApplicantTopSkillRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SkillName';
        export const localTextPrefix = 'Recruitment.ApplicantTopSkill';
        export const lookupKey = 'Recruitment.ApplicantTopSkill';

        export function getLookup(): Q.Lookup<ApplicantTopSkillRow> {
            return Q.getLookup<ApplicantTopSkillRow>('Recruitment.ApplicantTopSkill');
        }
        export const deletePermission = 'Recruitment:Applicant';
        export const insertPermission = 'Recruitment:Applicant';
        export const readPermission = 'Recruitment:Applicant';
        export const updatePermission = 'Recruitment:Applicant';

        export declare const enum Fields {
            Id = "Id",
            ApplicantId = "ApplicantId",
            SkillName = "SkillName",
            ProficiencyScore = "ProficiencyScore",
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
