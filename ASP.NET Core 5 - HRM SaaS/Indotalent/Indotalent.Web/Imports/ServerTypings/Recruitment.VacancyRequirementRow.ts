namespace Indotalent.Recruitment {
    export interface VacancyRequirementRow {
        Id?: number;
        VacancyId?: number;
        VacancyNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace VacancyRequirementRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Recruitment.VacancyRequirement';
        export const lookupKey = 'Recruitment.VacancyRequirement';

        export function getLookup(): Q.Lookup<VacancyRequirementRow> {
            return Q.getLookup<VacancyRequirementRow>('Recruitment.VacancyRequirement');
        }
        export const deletePermission = 'Recruitment:Vacancy';
        export const insertPermission = 'Recruitment:Vacancy';
        export const readPermission = 'Recruitment:Vacancy';
        export const updatePermission = 'Recruitment:Vacancy';

        export declare const enum Fields {
            Id = "Id",
            VacancyId = "VacancyId",
            VacancyNumber = "VacancyNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
