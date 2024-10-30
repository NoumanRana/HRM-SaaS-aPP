namespace Indotalent.Operation {
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
        export const localTextPrefix = 'Operation.TicketDetail';
        export const lookupKey = 'Operation.TicketDetail';

        export function getLookup(): Q.Lookup<TicketDetailRow> {
            return Q.getLookup<TicketDetailRow>('Operation.TicketDetail');
        }
        export const deletePermission = 'Operation:Ticket';
        export const insertPermission = 'Operation:Ticket';
        export const readPermission = 'Operation:Ticket';
        export const updatePermission = 'Operation:Ticket';

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
