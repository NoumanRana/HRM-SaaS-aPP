namespace Indotalent.EmployeeSelfService {
    export interface TicketDetailRow {
        Id?: number;
        TicketId?: number;
        Response?: string;
        ResponseBy?: string;
        ResponseAt?: string;
        TicketNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TicketDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TicketNumber';
        export const localTextPrefix = 'EmployeeSelfService.TicketDetail';
        export const lookupKey = 'EmployeeSelfService.TicketDetail';

        export function getLookup(): Q.Lookup<TicketDetailRow> {
            return Q.getLookup<TicketDetailRow>('EmployeeSelfService.TicketDetail');
        }
        export const deletePermission = 'EmployeeSelfService:Ticket';
        export const insertPermission = 'EmployeeSelfService:Ticket';
        export const readPermission = 'EmployeeSelfService:Ticket';
        export const updatePermission = 'EmployeeSelfService:Ticket';

        export declare const enum Fields {
            Id = "Id",
            TicketId = "TicketId",
            Response = "Response",
            ResponseBy = "ResponseBy",
            ResponseAt = "ResponseAt",
            TicketNumber = "TicketNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
