namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.Announcement';
        export const lookupKey = 'EmployeeSelfService.Announcement';

        export function getLookup(): Q.Lookup<AnnouncementRow> {
            return Q.getLookup<AnnouncementRow>('EmployeeSelfService.Announcement');
        }
        export const deletePermission = 'EmployeeSelfService:Announcement';
        export const insertPermission = 'EmployeeSelfService:Announcement';
        export const readPermission = 'EmployeeSelfService:Announcement';
        export const updatePermission = 'EmployeeSelfService:Announcement';

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
