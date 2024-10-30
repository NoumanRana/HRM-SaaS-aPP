namespace Indotalent.Operation {
    export interface ResignationRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ResignationDate?: string;
        EffectiveDate?: string;
        ResigneeId?: number;
        ResigneeName?: string;
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

    export namespace ResignationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Operation.Resignation';
        export const lookupKey = 'Operation.Resignation';

        export function getLookup(): Q.Lookup<ResignationRow> {
            return Q.getLookup<ResignationRow>('Operation.Resignation');
        }
        export const deletePermission = 'Operation:Resignation';
        export const insertPermission = 'Operation:Resignation';
        export const readPermission = 'Operation:Resignation';
        export const updatePermission = 'Operation:Resignation';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            ResignationDate = "ResignationDate",
            EffectiveDate = "EffectiveDate",
            ResigneeId = "ResigneeId",
            ResigneeName = "ResigneeName",
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
