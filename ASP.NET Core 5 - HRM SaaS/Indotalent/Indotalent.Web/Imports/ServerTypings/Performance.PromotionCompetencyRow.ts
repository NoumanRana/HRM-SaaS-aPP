namespace Indotalent.Performance {
    export interface PromotionCompetencyRow {
        Id?: number;
        PromotionId?: number;
        PromotionNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PromotionCompetencyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Performance.PromotionCompetency';
        export const lookupKey = 'Performance.PromotionCompetency';

        export function getLookup(): Q.Lookup<PromotionCompetencyRow> {
            return Q.getLookup<PromotionCompetencyRow>('Performance.PromotionCompetency');
        }
        export const deletePermission = 'Performance:Promotion';
        export const insertPermission = 'Performance:Promotion';
        export const readPermission = 'Performance:Promotion';
        export const updatePermission = 'Performance:Promotion';

        export declare const enum Fields {
            Id = "Id",
            PromotionId = "PromotionId",
            PromotionNumber = "PromotionNumber",
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
