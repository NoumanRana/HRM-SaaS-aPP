namespace Indotalent.Performance {
    export interface EvaluationRow {
        Id?: number;
        Name?: string;
        Number?: string;
        Group?: string;
        Indicator?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EvaluationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Performance.Evaluation';
        export const lookupKey = 'Performance.Evaluation';

        export function getLookup(): Q.Lookup<EvaluationRow> {
            return Q.getLookup<EvaluationRow>('Performance.Evaluation');
        }
        export const deletePermission = 'Performance:Evaluation';
        export const insertPermission = 'Performance:Evaluation';
        export const readPermission = 'Performance:Evaluation';
        export const updatePermission = 'Performance:Evaluation';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Number = "Number",
            Group = "Group",
            Indicator = "Indicator",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
