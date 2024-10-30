namespace Indotalent.Operation {
    export interface MeetingRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Location?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        StartDate?: string;
        EndDate?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: MeetingParticipantRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace MeetingRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Operation.Meeting';
        export const lookupKey = 'Operation.Meeting';

        export function getLookup(): Q.Lookup<MeetingRow> {
            return Q.getLookup<MeetingRow>('Operation.Meeting');
        }
        export const deletePermission = 'Operation:Meeting';
        export const insertPermission = 'Operation:Meeting';
        export const readPermission = 'Operation:Meeting';
        export const updatePermission = 'Operation:Meeting';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Location = "Location",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            StartDate = "StartDate",
            EndDate = "EndDate",
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
