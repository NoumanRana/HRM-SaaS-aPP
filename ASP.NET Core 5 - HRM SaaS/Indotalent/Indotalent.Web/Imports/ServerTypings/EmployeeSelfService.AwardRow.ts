namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.Award';
        export const lookupKey = 'EmployeeSelfService.Award';

        export function getLookup(): Q.Lookup<AwardRow> {
            return Q.getLookup<AwardRow>('EmployeeSelfService.Award');
        }
        export const deletePermission = 'EmployeeSelfService:Award';
        export const insertPermission = 'EmployeeSelfService:Award';
        export const readPermission = 'EmployeeSelfService:Award';
        export const updatePermission = 'EmployeeSelfService:Award';

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
