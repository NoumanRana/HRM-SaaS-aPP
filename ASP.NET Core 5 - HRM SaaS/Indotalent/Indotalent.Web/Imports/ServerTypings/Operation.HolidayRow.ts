namespace Indotalent.Operation {
    export interface HolidayRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Date?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace HolidayRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Operation.Holiday';
        export const lookupKey = 'Operation.Holiday';

        export function getLookup(): Q.Lookup<HolidayRow> {
            return Q.getLookup<HolidayRow>('Operation.Holiday');
        }
        export const deletePermission = 'Operation:Holiday';
        export const insertPermission = 'Operation:Holiday';
        export const readPermission = 'Operation:Holiday';
        export const updatePermission = 'Operation:Holiday';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Date = "Date",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
