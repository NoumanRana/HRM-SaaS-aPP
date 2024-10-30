namespace Indotalent.Operation {
    export interface TrainingRow {
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
        ItemList?: TrainingParticipantRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TrainingRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Operation.Training';
        export const lookupKey = 'Operation.Training';

        export function getLookup(): Q.Lookup<TrainingRow> {
            return Q.getLookup<TrainingRow>('Operation.Training');
        }
        export const deletePermission = 'Operation:Training';
        export const insertPermission = 'Operation:Training';
        export const readPermission = 'Operation:Training';
        export const updatePermission = 'Operation:Training';

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
