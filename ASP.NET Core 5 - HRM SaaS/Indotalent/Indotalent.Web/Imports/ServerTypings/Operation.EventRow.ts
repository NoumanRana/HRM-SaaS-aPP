namespace Indotalent.Operation {
    export interface EventRow {
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EventRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Operation.Event';
        export const lookupKey = 'Operation.Event';

        export function getLookup(): Q.Lookup<EventRow> {
            return Q.getLookup<EventRow>('Operation.Event');
        }
        export const deletePermission = 'Operation:Event';
        export const insertPermission = 'Operation:Event';
        export const readPermission = 'Operation:Event';
        export const updatePermission = 'Operation:Event';

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
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
