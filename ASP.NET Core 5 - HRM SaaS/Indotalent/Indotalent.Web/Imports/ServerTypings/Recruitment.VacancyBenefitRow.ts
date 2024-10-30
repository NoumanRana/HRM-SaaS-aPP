namespace Indotalent.Recruitment {
    export interface VacancyBenefitRow {
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

    export namespace VacancyBenefitRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Recruitment.VacancyBenefit';
        export const lookupKey = 'Recruitment.VacancyBenefit';

        export function getLookup(): Q.Lookup<VacancyBenefitRow> {
            return Q.getLookup<VacancyBenefitRow>('Recruitment.VacancyBenefit');
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
