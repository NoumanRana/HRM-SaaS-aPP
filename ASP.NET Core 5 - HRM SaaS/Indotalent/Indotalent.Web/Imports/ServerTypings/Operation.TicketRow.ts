namespace Indotalent.Operation {
    export interface TicketRow {
        Id?: number;
        Number?: string;
        Request?: string;
        TicketDate?: string;
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
        ItemList?: TicketDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TicketRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Operation.Ticket';
        export const lookupKey = 'Operation.Ticket';

        export function getLookup(): Q.Lookup<TicketRow> {
            return Q.getLookup<TicketRow>('Operation.Ticket');
        }
        export const deletePermission = 'Operation:Ticket';
        export const insertPermission = 'Operation:Ticket';
        export const readPermission = 'Operation:Ticket';
        export const updatePermission = 'Operation:Ticket';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Request = "Request",
            TicketDate = "TicketDate",
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
            ItemList = "ItemList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
