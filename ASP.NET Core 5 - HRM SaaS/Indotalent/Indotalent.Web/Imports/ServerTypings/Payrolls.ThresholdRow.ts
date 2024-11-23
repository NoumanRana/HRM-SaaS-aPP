namespace Indotalent.Payrolls {
    export interface ThresholdRow {
        Id?: number;
        Name?: string;
        Value?: number;
        IsActive?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ThresholdRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.Threshold';
        export const lookupKey = 'Payrolls.Threshold';

        export function getLookup(): Q.Lookup<ThresholdRow> {
            return Q.getLookup<ThresholdRow>('Payrolls.Threshold');
        }
        export const deletePermission = 'Payrolls:Threshold';
        export const insertPermission = 'Payrolls:Threshold';
        export const readPermission = 'Payrolls:Threshold';
        export const updatePermission = 'Payrolls:Threshold';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Value = "Value",
            IsActive = "IsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
