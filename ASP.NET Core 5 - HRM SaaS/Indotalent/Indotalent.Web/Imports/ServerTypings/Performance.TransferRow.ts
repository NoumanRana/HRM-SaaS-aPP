namespace Indotalent.Performance {
    export interface TransferRow {
        Id?: number;
        Number?: string;
        Description?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        EffectiveDate?: string;
        PromotorId?: number;
        PromotorName?: string;
        CurrentBasicSalary?: number;
        NewBasicSalary?: number;
        CurrentBranchId?: number;
        CurrentBranchName?: string;
        NewBranchId?: number;
        NewBranchName?: string;
        CurrentDepartmentId?: number;
        CurrentDepartmentName?: string;
        NewDepartmentId?: number;
        NewDepartmentName?: string;
        CurrentDesignationId?: number;
        CurrentDesignationName?: string;
        NewDesignationId?: number;
        NewDesignationName?: string;
        CurrentSupervisorId?: number;
        CurrentSupervisorName?: string;
        NewSupervisorId?: number;
        NewSupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        TransferReasonList?: TransferReasonRow[];
        TransferCompetencyList?: TransferCompetencyRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TransferRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Performance.Transfer';
        export const lookupKey = 'Performance.Transfer';

        export function getLookup(): Q.Lookup<TransferRow> {
            return Q.getLookup<TransferRow>('Performance.Transfer');
        }
        export const deletePermission = 'Performance:Transfer';
        export const insertPermission = 'Performance:Transfer';
        export const readPermission = 'Performance:Transfer';
        export const updatePermission = 'Performance:Transfer';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EffectiveDate = "EffectiveDate",
            PromotorId = "PromotorId",
            PromotorName = "PromotorName",
            CurrentBasicSalary = "CurrentBasicSalary",
            NewBasicSalary = "NewBasicSalary",
            CurrentBranchId = "CurrentBranchId",
            CurrentBranchName = "CurrentBranchName",
            NewBranchId = "NewBranchId",
            NewBranchName = "NewBranchName",
            CurrentDepartmentId = "CurrentDepartmentId",
            CurrentDepartmentName = "CurrentDepartmentName",
            NewDepartmentId = "NewDepartmentId",
            NewDepartmentName = "NewDepartmentName",
            CurrentDesignationId = "CurrentDesignationId",
            CurrentDesignationName = "CurrentDesignationName",
            NewDesignationId = "NewDesignationId",
            NewDesignationName = "NewDesignationName",
            CurrentSupervisorId = "CurrentSupervisorId",
            CurrentSupervisorName = "CurrentSupervisorName",
            NewSupervisorId = "NewSupervisorId",
            NewSupervisorName = "NewSupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TransferReasonList = "TransferReasonList",
            TransferCompetencyList = "TransferCompetencyList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
