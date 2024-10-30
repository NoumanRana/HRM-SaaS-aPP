namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.Meeting';
        export const lookupKey = 'EmployeeSelfService.Meeting';

        export function getLookup(): Q.Lookup<MeetingRow> {
            return Q.getLookup<MeetingRow>('EmployeeSelfService.Meeting');
        }
        export const deletePermission = 'EmployeeSelfService:Meeting';
        export const insertPermission = 'EmployeeSelfService:Meeting';
        export const readPermission = 'EmployeeSelfService:Meeting';
        export const updatePermission = 'EmployeeSelfService:Meeting';

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
