namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.Ticket';
        export const lookupKey = 'EmployeeSelfService.Ticket';

        export function getLookup(): Q.Lookup<TicketRow> {
            return Q.getLookup<TicketRow>('EmployeeSelfService.Ticket');
        }
        export const deletePermission = 'EmployeeSelfService:Ticket';
        export const insertPermission = 'EmployeeSelfService:Ticket';
        export const readPermission = 'EmployeeSelfService:Ticket';
        export const updatePermission = 'EmployeeSelfService:Ticket';

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
