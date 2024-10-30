namespace Indotalent.Operation {
    export interface AnnouncementRow {
        Id?: number;
        Name?: string;
        Date?: string;
        Message?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AnnouncementRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Operation.Announcement';
        export const lookupKey = 'Operation.Announcement';

        export function getLookup(): Q.Lookup<AnnouncementRow> {
            return Q.getLookup<AnnouncementRow>('Operation.Announcement');
        }
        export const deletePermission = 'Operation:Announcement';
        export const insertPermission = 'Operation:Announcement';
        export const readPermission = 'Operation:Announcement';
        export const updatePermission = 'Operation:Announcement';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Date = "Date",
            Message = "Message",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
