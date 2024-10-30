namespace Indotalent.Performance {
    export interface PromotionReasonRow {
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

    export namespace PromotionReasonRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Performance.PromotionReason';
        export const lookupKey = 'Performance.PromotionReason';

        export function getLookup(): Q.Lookup<PromotionReasonRow> {
            return Q.getLookup<PromotionReasonRow>('Performance.PromotionReason');
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
