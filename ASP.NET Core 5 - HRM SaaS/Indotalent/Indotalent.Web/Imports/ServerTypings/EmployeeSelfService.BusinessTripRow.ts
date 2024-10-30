namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.BusinessTrip';
        export const lookupKey = 'EmployeeSelfService.BusinessTrip';

        export function getLookup(): Q.Lookup<BusinessTripRow> {
            return Q.getLookup<BusinessTripRow>('EmployeeSelfService.BusinessTrip');
        }
        export const deletePermission = 'EmployeeSelfService:BusinessTrip';
        export const insertPermission = 'EmployeeSelfService:BusinessTrip';
        export const readPermission = 'EmployeeSelfService:BusinessTrip';
        export const updatePermission = 'EmployeeSelfService:BusinessTrip';

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
