namespace Indotalent.Operation {
    export interface TerminationRow {
        Id?: number;
        Number?: string;
        Description?: string;
        TerminationReason?: string;
        ReturnedItem?: string;
        CompletedForm?: string;
        TerminationDate?: string;
        EffectiveDate?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TerminationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Operation.Termination';
        export const lookupKey = 'Operation.Termination';

        export function getLookup(): Q.Lookup<TerminationRow> {
            return Q.getLookup<TerminationRow>('Operation.Termination');
        }
        export const deletePermission = 'Operation:Termination';
        export const insertPermission = 'Operation:Termination';
        export const readPermission = 'Operation:Termination';
        export const updatePermission = 'Operation:Termination';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            TerminationReason = "TerminationReason",
            ReturnedItem = "ReturnedItem",
            CompletedForm = "CompletedForm",
            TerminationDate = "TerminationDate",
            EffectiveDate = "EffectiveDate",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
