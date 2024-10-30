namespace Indotalent.Operation {
    export interface BusinessTripRow {
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
        ItemList?: BusinessTripParticipantRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace BusinessTripRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Operation.BusinessTrip';
        export const lookupKey = 'Operation.BusinessTrip';

        export function getLookup(): Q.Lookup<BusinessTripRow> {
            return Q.getLookup<BusinessTripRow>('Operation.BusinessTrip');
        }
        export const deletePermission = 'Operation:BusinessTrip';
        export const insertPermission = 'Operation:BusinessTrip';
        export const readPermission = 'Operation:BusinessTrip';
        export const updatePermission = 'Operation:BusinessTrip';

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
