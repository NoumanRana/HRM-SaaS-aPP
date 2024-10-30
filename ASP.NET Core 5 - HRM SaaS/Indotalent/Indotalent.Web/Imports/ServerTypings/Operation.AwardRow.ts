namespace Indotalent.Operation {
    export interface AwardRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Date?: string;
        Reward?: string;
        Achievement?: string;
        AwardeeId?: number;
        AwardeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AwardRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Operation.Award';
        export const lookupKey = 'Operation.Award';

        export function getLookup(): Q.Lookup<AwardRow> {
            return Q.getLookup<AwardRow>('Operation.Award');
        }
        export const deletePermission = 'Operation:Award';
        export const insertPermission = 'Operation:Award';
        export const readPermission = 'Operation:Award';
        export const updatePermission = 'Operation:Award';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Date = "Date",
            Reward = "Reward",
            Achievement = "Achievement",
            AwardeeId = "AwardeeId",
            AwardeeName = "AwardeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
