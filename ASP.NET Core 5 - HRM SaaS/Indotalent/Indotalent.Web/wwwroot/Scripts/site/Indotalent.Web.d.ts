/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
/// <reference types="serenity.extensions" />
declare namespace Indotalent.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
        const Tenant = "Administration:Tenant";
    }
}
declare namespace Indotalent.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Indotalent.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Indotalent.Administration {
    class TenantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface TenantForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EmployeeNumberPrefix: Serenity.StringEditor;
        EmployeeNumberUseDate: Serenity.BooleanEditor;
        EmployeeNumberLength: Serenity.IntegerEditor;
        LeaveRequestNumberPrefix: Serenity.StringEditor;
        LeaveRequestNumberUseDate: Serenity.BooleanEditor;
        LeaveRequestNumberLength: Serenity.IntegerEditor;
        EvaluationNumberPrefix: Serenity.StringEditor;
        EvaluationNumberUseDate: Serenity.BooleanEditor;
        EvaluationNumberLength: Serenity.IntegerEditor;
        AppraisalNumberPrefix: Serenity.StringEditor;
        AppraisalNumberUseDate: Serenity.BooleanEditor;
        AppraisalNumberLength: Serenity.IntegerEditor;
        PromotionNumberPrefix: Serenity.StringEditor;
        PromotionNumberUseDate: Serenity.BooleanEditor;
        PromotionNumberLength: Serenity.IntegerEditor;
        TransferNumberPrefix: Serenity.StringEditor;
        TransferNumberUseDate: Serenity.BooleanEditor;
        TransferNumberLength: Serenity.IntegerEditor;
        VacancyNumberPrefix: Serenity.StringEditor;
        VacancyNumberUseDate: Serenity.BooleanEditor;
        VacancyNumberLength: Serenity.IntegerEditor;
        ApplicantNumberPrefix: Serenity.StringEditor;
        ApplicantNumberUseDate: Serenity.BooleanEditor;
        ApplicantNumberLength: Serenity.IntegerEditor;
        InterviewNumberPrefix: Serenity.StringEditor;
        InterviewNumberUseDate: Serenity.BooleanEditor;
        InterviewNumberLength: Serenity.IntegerEditor;
        ReimbursementNumberPrefix: Serenity.StringEditor;
        ReimbursementNumberUseDate: Serenity.BooleanEditor;
        ReimbursementNumberLength: Serenity.IntegerEditor;
        TicketNumberPrefix: Serenity.StringEditor;
        TicketNumberUseDate: Serenity.BooleanEditor;
        TicketNumberLength: Serenity.IntegerEditor;
        AssetNumberPrefix: Serenity.StringEditor;
        AssetNumberUseDate: Serenity.BooleanEditor;
        AssetNumberLength: Serenity.IntegerEditor;
        AssetHandOverNumberPrefix: Serenity.StringEditor;
        AssetHandOverNumberUseDate: Serenity.BooleanEditor;
        AssetHandOverNumberLength: Serenity.IntegerEditor;
        ComplaintNumberPrefix: Serenity.StringEditor;
        ComplaintNumberUseDate: Serenity.BooleanEditor;
        ComplaintNumberLength: Serenity.IntegerEditor;
        ResignationNumberPrefix: Serenity.StringEditor;
        ResignationNumberUseDate: Serenity.BooleanEditor;
        ResignationNumberLength: Serenity.IntegerEditor;
        WarningNumberPrefix: Serenity.StringEditor;
        WarningNumberUseDate: Serenity.BooleanEditor;
        WarningNumberLength: Serenity.IntegerEditor;
        TerminationNumberPrefix: Serenity.StringEditor;
        TerminationNumberUseDate: Serenity.BooleanEditor;
        TerminationNumberLength: Serenity.IntegerEditor;
        SOPNumberPrefix: Serenity.StringEditor;
        SOPNumberUseDate: Serenity.BooleanEditor;
        SOPNumberLength: Serenity.IntegerEditor;
        PayrollNumberPrefix: Serenity.StringEditor;
        PayrollNumberUseDate: Serenity.BooleanEditor;
        PayrollNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
    }
    class TenantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Currency?: string;
        MaximumUser?: number;
        EmployeeNumberPrefix?: string;
        EmployeeNumberUseDate?: boolean;
        EmployeeNumberLength?: number;
        LeaveRequestNumberPrefix?: string;
        LeaveRequestNumberUseDate?: boolean;
        LeaveRequestNumberLength?: number;
        EvaluationNumberPrefix?: string;
        EvaluationNumberUseDate?: boolean;
        EvaluationNumberLength?: number;
        AppraisalNumberPrefix?: string;
        AppraisalNumberUseDate?: boolean;
        AppraisalNumberLength?: number;
        PromotionNumberPrefix?: string;
        PromotionNumberUseDate?: boolean;
        PromotionNumberLength?: number;
        TransferNumberPrefix?: string;
        TransferNumberUseDate?: boolean;
        TransferNumberLength?: number;
        VacancyNumberPrefix?: string;
        VacancyNumberUseDate?: boolean;
        VacancyNumberLength?: number;
        ApplicantNumberPrefix?: string;
        ApplicantNumberUseDate?: boolean;
        ApplicantNumberLength?: number;
        InterviewNumberPrefix?: string;
        InterviewNumberUseDate?: boolean;
        InterviewNumberLength?: number;
        ReimbursementNumberPrefix?: string;
        ReimbursementNumberUseDate?: boolean;
        ReimbursementNumberLength?: number;
        TicketNumberPrefix?: string;
        TicketNumberUseDate?: boolean;
        TicketNumberLength?: number;
        AssetNumberPrefix?: string;
        AssetNumberUseDate?: boolean;
        AssetNumberLength?: number;
        AssetHandOverNumberPrefix?: string;
        AssetHandOverNumberUseDate?: boolean;
        AssetHandOverNumberLength?: number;
        ComplaintNumberPrefix?: string;
        ComplaintNumberUseDate?: boolean;
        ComplaintNumberLength?: number;
        ResignationNumberPrefix?: string;
        ResignationNumberUseDate?: boolean;
        ResignationNumberLength?: number;
        WarningNumberPrefix?: string;
        WarningNumberUseDate?: boolean;
        WarningNumberLength?: number;
        TerminationNumberPrefix?: string;
        TerminationNumberUseDate?: boolean;
        TerminationNumberLength?: number;
        SOPNumberPrefix?: string;
        SOPNumberUseDate?: boolean;
        SOPNumberLength?: number;
        PayrollNumberPrefix?: string;
        PayrollNumberUseDate?: boolean;
        PayrollNumberLength?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TenantRow {
        const idProperty = "TenantId";
        const nameProperty = "TenantName";
        const localTextPrefix = "Administration.Tenant";
        const lookupKey = "Administration.Tenant";
        function getLookup(): Q.Lookup<TenantRow>;
        const deletePermission = "Administration:Tenant";
        const insertPermission = "Administration:Tenant";
        const readPermission = "Administration:Tenant";
        const updatePermission = "Administration:Tenant";
        const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Currency = "Currency",
            MaximumUser = "MaximumUser",
            EmployeeNumberPrefix = "EmployeeNumberPrefix",
            EmployeeNumberUseDate = "EmployeeNumberUseDate",
            EmployeeNumberLength = "EmployeeNumberLength",
            LeaveRequestNumberPrefix = "LeaveRequestNumberPrefix",
            LeaveRequestNumberUseDate = "LeaveRequestNumberUseDate",
            LeaveRequestNumberLength = "LeaveRequestNumberLength",
            EvaluationNumberPrefix = "EvaluationNumberPrefix",
            EvaluationNumberUseDate = "EvaluationNumberUseDate",
            EvaluationNumberLength = "EvaluationNumberLength",
            AppraisalNumberPrefix = "AppraisalNumberPrefix",
            AppraisalNumberUseDate = "AppraisalNumberUseDate",
            AppraisalNumberLength = "AppraisalNumberLength",
            PromotionNumberPrefix = "PromotionNumberPrefix",
            PromotionNumberUseDate = "PromotionNumberUseDate",
            PromotionNumberLength = "PromotionNumberLength",
            TransferNumberPrefix = "TransferNumberPrefix",
            TransferNumberUseDate = "TransferNumberUseDate",
            TransferNumberLength = "TransferNumberLength",
            VacancyNumberPrefix = "VacancyNumberPrefix",
            VacancyNumberUseDate = "VacancyNumberUseDate",
            VacancyNumberLength = "VacancyNumberLength",
            ApplicantNumberPrefix = "ApplicantNumberPrefix",
            ApplicantNumberUseDate = "ApplicantNumberUseDate",
            ApplicantNumberLength = "ApplicantNumberLength",
            InterviewNumberPrefix = "InterviewNumberPrefix",
            InterviewNumberUseDate = "InterviewNumberUseDate",
            InterviewNumberLength = "InterviewNumberLength",
            ReimbursementNumberPrefix = "ReimbursementNumberPrefix",
            ReimbursementNumberUseDate = "ReimbursementNumberUseDate",
            ReimbursementNumberLength = "ReimbursementNumberLength",
            TicketNumberPrefix = "TicketNumberPrefix",
            TicketNumberUseDate = "TicketNumberUseDate",
            TicketNumberLength = "TicketNumberLength",
            AssetNumberPrefix = "AssetNumberPrefix",
            AssetNumberUseDate = "AssetNumberUseDate",
            AssetNumberLength = "AssetNumberLength",
            AssetHandOverNumberPrefix = "AssetHandOverNumberPrefix",
            AssetHandOverNumberUseDate = "AssetHandOverNumberUseDate",
            AssetHandOverNumberLength = "AssetHandOverNumberLength",
            ComplaintNumberPrefix = "ComplaintNumberPrefix",
            ComplaintNumberUseDate = "ComplaintNumberUseDate",
            ComplaintNumberLength = "ComplaintNumberLength",
            ResignationNumberPrefix = "ResignationNumberPrefix",
            ResignationNumberUseDate = "ResignationNumberUseDate",
            ResignationNumberLength = "ResignationNumberLength",
            WarningNumberPrefix = "WarningNumberPrefix",
            WarningNumberUseDate = "WarningNumberUseDate",
            WarningNumberLength = "WarningNumberLength",
            TerminationNumberPrefix = "TerminationNumberPrefix",
            TerminationNumberUseDate = "TerminationNumberUseDate",
            TerminationNumberLength = "TerminationNumberLength",
            SOPNumberPrefix = "SOPNumberPrefix",
            SOPNumberUseDate = "SOPNumberUseDate",
            SOPNumberLength = "SOPNumberLength",
            PayrollNumberPrefix = "PayrollNumberPrefix",
            PayrollNumberUseDate = "PayrollNumberUseDate",
            PayrollNumberLength = "PayrollNumberLength",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace TenantService {
        const baseUrl = "Administration/Tenant";
        function Create(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Tenant/Create",
            Update = "Administration/Tenant/Update",
            Delete = "Administration/Tenant/Delete",
            Retrieve = "Administration/Tenant/Retrieve",
            List = "Administration/Tenant/List"
        }
    }
}
declare namespace Indotalent.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Indotalent.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Indotalent.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Indotalent.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Indotalent.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface UserForm {
        IsActive: Serenity.BooleanEditor;
        IsTenantAdmin: Serenity.BooleanEditor;
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Indotalent.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Indotalent.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Indotalent.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        TenantId?: number;
        TenantName?: string;
        IsActive?: number;
        IsTenantAdmin?: boolean;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            TenantId = "TenantId",
            TenantName = "TenantName",
            IsActive = "IsActive",
            IsTenantAdmin = "IsTenantAdmin",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Indotalent.Attendance {
    class OvertimeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Attendance {
    interface OvertimeEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Attendance {
    interface OvertimeEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
    }
}
declare namespace Indotalent.Attendance {
    interface OvertimeForm {
        EmployeeId: Serenity.LookupEditor;
        OvertimeDate: Serenity.DateEditor;
        Duration: Serenity.IntegerEditor;
        Description: Serenity.TextAreaEditor;
        OvertimeStatus: Serenity.EnumEditor;
    }
    class OvertimeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Attendance {
    interface OvertimeRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        OvertimeDate?: string;
        Duration?: number;
        Description?: string;
        OvertimeStatus?: OvertimeStatus;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace OvertimeRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "Attendance.Overtime";
        const lookupKey = "Attendance.Overtime";
        function getLookup(): Q.Lookup<OvertimeRow>;
        const deletePermission = "Attendance:Overtime";
        const insertPermission = "Attendance:Overtime";
        const readPermission = "Attendance:Overtime";
        const updatePermission = "Attendance:Overtime";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            OvertimeDate = "OvertimeDate",
            Duration = "Duration",
            Description = "Description",
            OvertimeStatus = "OvertimeStatus",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Attendance {
    namespace OvertimeService {
        const baseUrl = "Attendance/Overtime";
        function Create(request: Serenity.SaveRequest<OvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: OvertimeEmployeeIdRequest, onSuccess?: (response: OvertimeEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Attendance/Overtime/Create",
            Update = "Attendance/Overtime/Update",
            Delete = "Attendance/Overtime/Delete",
            Retrieve = "Attendance/Overtime/Retrieve",
            List = "Attendance/Overtime/List",
            EmployeeId = "Attendance/Overtime/EmployeeId"
        }
    }
}
declare namespace Indotalent.Attendance {
    enum OvertimeStatus {
        Submit = 1,
        Approve = 2
    }
}
declare namespace Indotalent.Attendance {
    class PunchInColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Attendance {
    interface PunchInEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Attendance {
    interface PunchInEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
    }
}
declare namespace Indotalent.Attendance {
    interface PunchInForm {
        EmployeeId: Serenity.LookupEditor;
        PunchDate: Serenity.DateEditor;
        InHour: Serenity.IntegerEditor;
        InMinute: Serenity.IntegerEditor;
    }
    class PunchInForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Attendance {
    interface PunchInRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        PunchDate?: string;
        PunchIn?: string;
        InHour?: number;
        InMinute?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PunchInRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "Attendance.PunchIn";
        const lookupKey = "Attendance.PunchIn";
        function getLookup(): Q.Lookup<PunchInRow>;
        const deletePermission = "Attendance:PunchIn";
        const insertPermission = "Attendance:PunchIn";
        const readPermission = "Attendance:PunchIn";
        const updatePermission = "Attendance:PunchIn";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            PunchDate = "PunchDate",
            PunchIn = "PunchIn",
            InHour = "InHour",
            InMinute = "InMinute",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Attendance {
    namespace PunchInService {
        const baseUrl = "Attendance/PunchIn";
        function Create(request: Serenity.SaveRequest<PunchInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PunchInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PunchInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PunchInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: PunchInEmployeeIdRequest, onSuccess?: (response: PunchInEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Attendance/PunchIn/Create",
            Update = "Attendance/PunchIn/Update",
            Delete = "Attendance/PunchIn/Delete",
            Retrieve = "Attendance/PunchIn/Retrieve",
            List = "Attendance/PunchIn/List",
            EmployeeId = "Attendance/PunchIn/EmployeeId"
        }
    }
}
declare namespace Indotalent.Attendance {
    class PunchOutColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Attendance {
    interface PunchOutForm {
        EmployeeId: Serenity.LookupEditor;
        PunchDate: Serenity.DateEditor;
        OutHour: Serenity.IntegerEditor;
        OutMinute: Serenity.IntegerEditor;
    }
    class PunchOutForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Attendance {
    interface PunchOutRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        PunchDate?: string;
        PunchOut?: string;
        OutHour?: number;
        OutMinute?: number;
        PunchIn?: string;
        Duration?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PunchOutRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "Attendance.PunchOut";
        const lookupKey = "Attendance.PunchOut";
        function getLookup(): Q.Lookup<PunchOutRow>;
        const deletePermission = "Attendance:PunchOut";
        const insertPermission = "Attendance:PunchOut";
        const readPermission = "Attendance:PunchOut";
        const updatePermission = "Attendance:PunchOut";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            PunchDate = "PunchDate",
            PunchOut = "PunchOut",
            OutHour = "OutHour",
            OutMinute = "OutMinute",
            PunchIn = "PunchIn",
            Duration = "Duration",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Attendance {
    namespace PunchOutService {
        const baseUrl = "Attendance/PunchOut";
        function Create(request: Serenity.SaveRequest<PunchOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PunchOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PunchOutRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PunchOutRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Attendance/PunchOut/Create",
            Update = "Attendance/PunchOut/Update",
            Delete = "Attendance/PunchOut/Delete",
            Retrieve = "Attendance/PunchOut/Retrieve",
            List = "Attendance/PunchOut/List"
        }
    }
}
declare namespace Indotalent.Attendance {
    class TimesheetColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Attendance {
    interface TimesheetRow {
        Id?: number;
        EmployeeNumber?: string;
        EmployeeName?: string;
        CalendarDate?: string;
        PunchIn?: string;
        PunchOut?: string;
        WorkingDuration?: number;
        OvertimeDuration?: number;
    }
    namespace TimesheetRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "Attendance.Timesheet";
        const lookupKey = "Attendance.Timesheet";
        function getLookup(): Q.Lookup<TimesheetRow>;
        const deletePermission = "Attendance:Timesheet";
        const insertPermission = "Attendance:Timesheet";
        const readPermission = "Attendance:Timesheet";
        const updatePermission = "Attendance:Timesheet";
        const enum Fields {
            Id = "Id",
            EmployeeNumber = "EmployeeNumber",
            EmployeeName = "EmployeeName",
            CalendarDate = "CalendarDate",
            PunchIn = "PunchIn",
            PunchOut = "PunchOut",
            WorkingDuration = "WorkingDuration",
            OvertimeDuration = "OvertimeDuration"
        }
    }
}
declare namespace Indotalent.Attendance {
    namespace TimesheetService {
        const baseUrl = "Attendance/Timesheet";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TimesheetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Attendance/Timesheet/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class AnnouncementColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface AnnouncementForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Message: Controls.CustomHtmlNoteContentEditor;
    }
    class AnnouncementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface AnnouncementRow {
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
    namespace AnnouncementRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "EmployeeSelfService.Announcement";
        const lookupKey = "EmployeeSelfService.Announcement";
        function getLookup(): Q.Lookup<AnnouncementRow>;
        const deletePermission = "EmployeeSelfService:Announcement";
        const insertPermission = "EmployeeSelfService:Announcement";
        const readPermission = "EmployeeSelfService:Announcement";
        const updatePermission = "EmployeeSelfService:Announcement";
        const enum Fields {
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
declare namespace Indotalent.EmployeeSelfService {
    namespace AnnouncementService {
        const baseUrl = "EmployeeSelfService/Announcement";
        function Create(request: Serenity.SaveRequest<AnnouncementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AnnouncementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AnnouncementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AnnouncementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Announcement/Create",
            Update = "EmployeeSelfService/Announcement/Update",
            Delete = "EmployeeSelfService/Announcement/Delete",
            Retrieve = "EmployeeSelfService/Announcement/Retrieve",
            List = "EmployeeSelfService/Announcement/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class AwardColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface AwardEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface AwardEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface AwardForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        Achievement: Controls.CustomHtmlNoteContentEditor;
        AwardeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        Reward: Serenity.StringEditor;
    }
    class AwardForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface AwardRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Date?: string;
        Reward?: string;
        Achievement?: string;
        AwardeeId?: number;
        AwardeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace AwardRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "EmployeeSelfService.Award";
        const lookupKey = "EmployeeSelfService.Award";
        function getLookup(): Q.Lookup<AwardRow>;
        const deletePermission = "EmployeeSelfService:Award";
        const insertPermission = "EmployeeSelfService:Award";
        const readPermission = "EmployeeSelfService:Award";
        const updatePermission = "EmployeeSelfService:Award";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Date = "Date",
            Reward = "Reward",
            Achievement = "Achievement",
            AwardeeId = "AwardeeId",
            AwardeeName = "AwardeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace AwardService {
        const baseUrl = "EmployeeSelfService/Award";
        function Create(request: Serenity.SaveRequest<AwardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AwardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AwardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AwardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: AwardEmployeeIdRequest, onSuccess?: (response: AwardEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Award/Create",
            Update = "EmployeeSelfService/Award/Update",
            Delete = "EmployeeSelfService/Award/Delete",
            Retrieve = "EmployeeSelfService/Award/Retrieve",
            List = "EmployeeSelfService/Award/List",
            EmployeeId = "EmployeeSelfService/Award/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class BusinessTripColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface BusinessTripEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface BusinessTripEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface BusinessTripForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ItemList: BusinessTripParticipantEditor;
    }
    class BusinessTripForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class BusinessTripParticipantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface BusinessTripParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class BusinessTripParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface BusinessTripParticipantRow {
        Id?: number;
        BusinessTripId?: number;
        BusinessTripName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace BusinessTripParticipantRow {
        const idProperty = "Id";
        const nameProperty = "BusinessTripName";
        const localTextPrefix = "EmployeeSelfService.BusinessTripParticipant";
        const lookupKey = "EmployeeSelfService.BusinessTripParticipant";
        function getLookup(): Q.Lookup<BusinessTripParticipantRow>;
        const deletePermission = "EmployeeSelfService:BusinessTrip";
        const insertPermission = "EmployeeSelfService:BusinessTrip";
        const readPermission = "EmployeeSelfService:BusinessTrip";
        const updatePermission = "EmployeeSelfService:BusinessTrip";
        const enum Fields {
            Id = "Id",
            BusinessTripId = "BusinessTripId",
            BusinessTripName = "BusinessTripName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace BusinessTripParticipantService {
        const baseUrl = "EmployeeSelfService/BusinessTripParticipant";
        function Create(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/BusinessTripParticipant/Create",
            Update = "EmployeeSelfService/BusinessTripParticipant/Update",
            Delete = "EmployeeSelfService/BusinessTripParticipant/Delete",
            Retrieve = "EmployeeSelfService/BusinessTripParticipant/Retrieve",
            List = "EmployeeSelfService/BusinessTripParticipant/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface BusinessTripRow {
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
    namespace BusinessTripRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "EmployeeSelfService.BusinessTrip";
        const lookupKey = "EmployeeSelfService.BusinessTrip";
        function getLookup(): Q.Lookup<BusinessTripRow>;
        const deletePermission = "EmployeeSelfService:BusinessTrip";
        const insertPermission = "EmployeeSelfService:BusinessTrip";
        const readPermission = "EmployeeSelfService:BusinessTrip";
        const updatePermission = "EmployeeSelfService:BusinessTrip";
        const enum Fields {
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
declare namespace Indotalent.EmployeeSelfService {
    namespace BusinessTripService {
        const baseUrl = "EmployeeSelfService/BusinessTrip";
        function Create(request: Serenity.SaveRequest<BusinessTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BusinessTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: BusinessTripEmployeeIdRequest, onSuccess?: (response: BusinessTripEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/BusinessTrip/Create",
            Update = "EmployeeSelfService/BusinessTrip/Update",
            Delete = "EmployeeSelfService/BusinessTrip/Delete",
            Retrieve = "EmployeeSelfService/BusinessTrip/Retrieve",
            List = "EmployeeSelfService/BusinessTrip/List",
            EmployeeId = "EmployeeSelfService/BusinessTrip/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ComplaintColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ComplaintEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ComplaintEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ComplaintForm {
        Number: Serenity.StringEditor;
        IncidentDate: Serenity.DateEditor;
        Location: Serenity.TextAreaEditor;
        Witness: Controls.CustomHtmlNoteContentEditor;
        IncidentDescription: Controls.CustomHtmlNoteContentEditor;
        ResolveSuggestion: Controls.CustomHtmlNoteContentEditor;
        ReporterId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class ComplaintForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ComplaintRow {
        Id?: number;
        Number?: string;
        IncidentDescription?: string;
        IncidentDate?: string;
        ResolveSuggestion?: string;
        Location?: string;
        Witness?: string;
        ReporterId?: number;
        ReporterName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ComplaintRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "EmployeeSelfService.Complaint";
        const lookupKey = "EmployeeSelfService.Complaint";
        function getLookup(): Q.Lookup<ComplaintRow>;
        const deletePermission = "EmployeeSelfService:Complaint";
        const insertPermission = "EmployeeSelfService:Complaint";
        const readPermission = "EmployeeSelfService:Complaint";
        const updatePermission = "EmployeeSelfService:Complaint";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            IncidentDescription = "IncidentDescription",
            IncidentDate = "IncidentDate",
            ResolveSuggestion = "ResolveSuggestion",
            Location = "Location",
            Witness = "Witness",
            ReporterId = "ReporterId",
            ReporterName = "ReporterName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace ComplaintService {
        const baseUrl = "EmployeeSelfService/Complaint";
        function Create(request: Serenity.SaveRequest<ComplaintRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ComplaintRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComplaintRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComplaintRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: ComplaintEmployeeIdRequest, onSuccess?: (response: ComplaintEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Complaint/Create",
            Update = "EmployeeSelfService/Complaint/Update",
            Delete = "EmployeeSelfService/Complaint/Delete",
            Retrieve = "EmployeeSelfService/Complaint/Retrieve",
            List = "EmployeeSelfService/Complaint/List",
            EmployeeId = "EmployeeSelfService/Complaint/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveDelegatedTaskColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveDelegatedTaskForm {
        ShortNote: Serenity.StringEditor;
    }
    class LeaveDelegatedTaskForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveDelegatedTaskRow {
        Id?: number;
        LeaveRequestId?: number;
        LeaveRequestNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LeaveDelegatedTaskRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "EmployeeSelfService.LeaveDelegatedTask";
        const lookupKey = "EmployeeSelfService.LeaveDelegatedTask";
        function getLookup(): Q.Lookup<LeaveDelegatedTaskRow>;
        const deletePermission = "EmployeeSelfService:LeaveRequest";
        const insertPermission = "EmployeeSelfService:LeaveRequest";
        const readPermission = "EmployeeSelfService:LeaveRequest";
        const updatePermission = "EmployeeSelfService:LeaveRequest";
        const enum Fields {
            Id = "Id",
            LeaveRequestId = "LeaveRequestId",
            LeaveRequestNumber = "LeaveRequestNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace LeaveDelegatedTaskService {
        const baseUrl = "EmployeeSelfService/LeaveDelegatedTask";
        function Create(request: Serenity.SaveRequest<LeaveDelegatedTaskRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LeaveDelegatedTaskRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveDelegatedTaskRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveDelegatedTaskRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/LeaveDelegatedTask/Create",
            Update = "EmployeeSelfService/LeaveDelegatedTask/Update",
            Delete = "EmployeeSelfService/LeaveDelegatedTask/Delete",
            Retrieve = "EmployeeSelfService/LeaveDelegatedTask/Retrieve",
            List = "EmployeeSelfService/LeaveDelegatedTask/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveEmergencyContactColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveEmergencyContactForm {
        ContactName: Serenity.StringEditor;
        ContactPhoneNumber: Serenity.StringEditor;
    }
    class LeaveEmergencyContactForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveEmergencyContactRow {
        Id?: number;
        LeaveRequestId?: number;
        LeaveRequestNumber?: string;
        ContactName?: string;
        ContactPhoneNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LeaveEmergencyContactRow {
        const idProperty = "Id";
        const nameProperty = "ContactName";
        const localTextPrefix = "EmployeeSelfService.LeaveEmergencyContact";
        const lookupKey = "EmployeeSelfService.LeaveEmergencyContact";
        function getLookup(): Q.Lookup<LeaveEmergencyContactRow>;
        const deletePermission = "EmployeeSelfService:LeaveRequest";
        const insertPermission = "EmployeeSelfService:LeaveRequest";
        const readPermission = "EmployeeSelfService:LeaveRequest";
        const updatePermission = "EmployeeSelfService:LeaveRequest";
        const enum Fields {
            Id = "Id",
            LeaveRequestId = "LeaveRequestId",
            LeaveRequestNumber = "LeaveRequestNumber",
            ContactName = "ContactName",
            ContactPhoneNumber = "ContactPhoneNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace LeaveEmergencyContactService {
        const baseUrl = "EmployeeSelfService/LeaveEmergencyContact";
        function Create(request: Serenity.SaveRequest<LeaveEmergencyContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LeaveEmergencyContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveEmergencyContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveEmergencyContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/LeaveEmergencyContact/Create",
            Update = "EmployeeSelfService/LeaveEmergencyContact/Update",
            Delete = "EmployeeSelfService/LeaveEmergencyContact/Delete",
            Retrieve = "EmployeeSelfService/LeaveEmergencyContact/Retrieve",
            List = "EmployeeSelfService/LeaveEmergencyContact/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveRequestColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveRequestEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveRequestEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveRequestForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        LeaveTypeId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Duration: Serenity.DecimalEditor;
        LeaveRequestStatus: Serenity.EnumEditor;
        DelegatedEmployeeId: Serenity.LookupEditor;
        LeaveDelegatedTaskList: LeaveDelegatedTaskEditor;
        LeaveEmergencyContactList: LeaveEmergencyContactEditor;
    }
    class LeaveRequestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface LeaveRequestRow {
        Id?: number;
        Number?: string;
        Description?: string;
        FromDate?: string;
        ToDate?: string;
        Duration?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        DelegatedEmployeeId?: number;
        DelegatedEmployeeName?: string;
        LeaveTypeId?: number;
        LeaveTypeName?: string;
        LeaveRequestStatus?: LeaveRequestStatus;
        TenantId?: number;
        TenantName?: string;
        LeaveDelegatedTaskList?: LeaveDelegatedTaskRow[];
        LeaveEmergencyContactList?: LeaveEmergencyContactRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LeaveRequestRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "EmployeeSelfService.LeaveRequest";
        const lookupKey = "EmployeeSelfService.LeaveRequest";
        function getLookup(): Q.Lookup<LeaveRequestRow>;
        const deletePermission = "EmployeeSelfService:LeaveRequest";
        const insertPermission = "EmployeeSelfService:LeaveRequest";
        const readPermission = "EmployeeSelfService:LeaveRequest";
        const updatePermission = "EmployeeSelfService:LeaveRequest";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            FromDate = "FromDate",
            ToDate = "ToDate",
            Duration = "Duration",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            DelegatedEmployeeId = "DelegatedEmployeeId",
            DelegatedEmployeeName = "DelegatedEmployeeName",
            LeaveTypeId = "LeaveTypeId",
            LeaveTypeName = "LeaveTypeName",
            LeaveRequestStatus = "LeaveRequestStatus",
            TenantId = "TenantId",
            TenantName = "TenantName",
            LeaveDelegatedTaskList = "LeaveDelegatedTaskList",
            LeaveEmergencyContactList = "LeaveEmergencyContactList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace LeaveRequestService {
        const baseUrl = "EmployeeSelfService/LeaveRequest";
        function Create(request: Serenity.SaveRequest<LeaveRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LeaveRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: LeaveRequestEmployeeIdRequest, onSuccess?: (response: LeaveRequestEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/LeaveRequest/Create",
            Update = "EmployeeSelfService/LeaveRequest/Update",
            Delete = "EmployeeSelfService/LeaveRequest/Delete",
            Retrieve = "EmployeeSelfService/LeaveRequest/Retrieve",
            List = "EmployeeSelfService/LeaveRequest/List",
            EmployeeId = "EmployeeSelfService/LeaveRequest/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    enum LeaveRequestStatus {
        Submit = 1,
        Approve = 2
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class MeetingColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface MeetingEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface MeetingEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface MeetingForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ItemList: MeetingParticipantEditor;
    }
    class MeetingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class MeetingParticipantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface MeetingParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class MeetingParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface MeetingParticipantRow {
        Id?: number;
        MeetingId?: number;
        MeetingName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace MeetingParticipantRow {
        const idProperty = "Id";
        const nameProperty = "MeetingName";
        const localTextPrefix = "EmployeeSelfService.MeetingParticipant";
        const lookupKey = "EmployeeSelfService.MeetingParticipant";
        function getLookup(): Q.Lookup<MeetingParticipantRow>;
        const deletePermission = "EmployeeSelfService:Meeting";
        const insertPermission = "EmployeeSelfService:Meeting";
        const readPermission = "EmployeeSelfService:Meeting";
        const updatePermission = "EmployeeSelfService:Meeting";
        const enum Fields {
            Id = "Id",
            MeetingId = "MeetingId",
            MeetingName = "MeetingName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace MeetingParticipantService {
        const baseUrl = "EmployeeSelfService/MeetingParticipant";
        function Create(request: Serenity.SaveRequest<MeetingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/MeetingParticipant/Create",
            Update = "EmployeeSelfService/MeetingParticipant/Update",
            Delete = "EmployeeSelfService/MeetingParticipant/Delete",
            Retrieve = "EmployeeSelfService/MeetingParticipant/Retrieve",
            List = "EmployeeSelfService/MeetingParticipant/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface MeetingRow {
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
    namespace MeetingRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "EmployeeSelfService.Meeting";
        const lookupKey = "EmployeeSelfService.Meeting";
        function getLookup(): Q.Lookup<MeetingRow>;
        const deletePermission = "EmployeeSelfService:Meeting";
        const insertPermission = "EmployeeSelfService:Meeting";
        const readPermission = "EmployeeSelfService:Meeting";
        const updatePermission = "EmployeeSelfService:Meeting";
        const enum Fields {
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
declare namespace Indotalent.EmployeeSelfService {
    namespace MeetingService {
        const baseUrl = "EmployeeSelfService/Meeting";
        function Create(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: MeetingEmployeeIdRequest, onSuccess?: (response: MeetingEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Meeting/Create",
            Update = "EmployeeSelfService/Meeting/Update",
            Delete = "EmployeeSelfService/Meeting/Delete",
            Retrieve = "EmployeeSelfService/Meeting/Retrieve",
            List = "EmployeeSelfService/Meeting/List",
            EmployeeId = "EmployeeSelfService/Meeting/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class OvertimeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface OvertimeEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface OvertimeEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface OvertimeForm {
        EmployeeId: Serenity.LookupEditor;
        OvertimeDate: Serenity.DateEditor;
        Duration: Serenity.IntegerEditor;
        Description: Serenity.TextAreaEditor;
        OvertimeStatus: Serenity.EnumEditor;
    }
    class OvertimeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface OvertimeRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        OvertimeDate?: string;
        Duration?: number;
        Description?: string;
        OvertimeStatus?: OvertimeStatus;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace OvertimeRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "EmployeeSelfService.Overtime";
        const lookupKey = "EmployeeSelfService.Overtime";
        function getLookup(): Q.Lookup<OvertimeRow>;
        const deletePermission = "EmployeeSelfService:Overtime";
        const insertPermission = "EmployeeSelfService:Overtime";
        const readPermission = "EmployeeSelfService:Overtime";
        const updatePermission = "EmployeeSelfService:Overtime";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            OvertimeDate = "OvertimeDate",
            Duration = "Duration",
            Description = "Description",
            OvertimeStatus = "OvertimeStatus",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace OvertimeService {
        const baseUrl = "EmployeeSelfService/Overtime";
        function Create(request: Serenity.SaveRequest<OvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: OvertimeEmployeeIdRequest, onSuccess?: (response: OvertimeEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Overtime/Create",
            Update = "EmployeeSelfService/Overtime/Update",
            Delete = "EmployeeSelfService/Overtime/Delete",
            Retrieve = "EmployeeSelfService/Overtime/Retrieve",
            List = "EmployeeSelfService/Overtime/List",
            EmployeeId = "EmployeeSelfService/Overtime/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    enum OvertimeStatus {
        Submit = 1,
        Approve = 2
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class PunchInColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface PunchInEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface PunchInEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface PunchInForm {
        EmployeeId: Serenity.LookupEditor;
        PunchDate: Serenity.DateEditor;
        InHour: Serenity.IntegerEditor;
        InMinute: Serenity.IntegerEditor;
    }
    class PunchInForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface PunchInRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        PunchDate?: string;
        PunchIn?: string;
        InHour?: number;
        InMinute?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PunchInRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "EmployeeSelfService.PunchIn";
        const lookupKey = "EmployeeSelfService.PunchIn";
        function getLookup(): Q.Lookup<PunchInRow>;
        const deletePermission = "EmployeeSelfService:PunchIn";
        const insertPermission = "EmployeeSelfService:PunchIn";
        const readPermission = "EmployeeSelfService:PunchIn";
        const updatePermission = "EmployeeSelfService:PunchIn";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            PunchDate = "PunchDate",
            PunchIn = "PunchIn",
            InHour = "InHour",
            InMinute = "InMinute",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace PunchInService {
        const baseUrl = "EmployeeSelfService/PunchIn";
        function Create(request: Serenity.SaveRequest<PunchInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PunchInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PunchInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PunchInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: PunchInEmployeeIdRequest, onSuccess?: (response: PunchInEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/PunchIn/Create",
            Update = "EmployeeSelfService/PunchIn/Update",
            Delete = "EmployeeSelfService/PunchIn/Delete",
            Retrieve = "EmployeeSelfService/PunchIn/Retrieve",
            List = "EmployeeSelfService/PunchIn/List",
            EmployeeId = "EmployeeSelfService/PunchIn/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class PunchOutColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface PunchOutForm {
        EmployeeId: Serenity.LookupEditor;
        PunchDate: Serenity.DateEditor;
        OutHour: Serenity.IntegerEditor;
        OutMinute: Serenity.IntegerEditor;
    }
    class PunchOutForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface PunchOutRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        PunchDate?: string;
        PunchOut?: string;
        OutHour?: number;
        OutMinute?: number;
        PunchIn?: string;
        Duration?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PunchOutRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "EmployeeSelfService.PunchOut";
        const lookupKey = "EmployeeSelfService.PunchOut";
        function getLookup(): Q.Lookup<PunchOutRow>;
        const deletePermission = "EmployeeSelfService:PunchOut";
        const insertPermission = "EmployeeSelfService:PunchOut";
        const readPermission = "EmployeeSelfService:PunchOut";
        const updatePermission = "EmployeeSelfService:PunchOut";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            PunchDate = "PunchDate",
            PunchOut = "PunchOut",
            OutHour = "OutHour",
            OutMinute = "OutMinute",
            PunchIn = "PunchIn",
            Duration = "Duration",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace PunchOutService {
        const baseUrl = "EmployeeSelfService/PunchOut";
        function Create(request: Serenity.SaveRequest<PunchOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PunchOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PunchOutRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PunchOutRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/PunchOut/Create",
            Update = "EmployeeSelfService/PunchOut/Update",
            Delete = "EmployeeSelfService/PunchOut/Delete",
            Retrieve = "EmployeeSelfService/PunchOut/Retrieve",
            List = "EmployeeSelfService/PunchOut/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ReimbursementColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ReimbursementDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementDetailForm {
        ShortNote: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }
    class ReimbursementDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementDetailRow {
        Id?: number;
        ReimbursementId?: number;
        ShortNote?: string;
        Amount?: number;
        ReimbursementNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ReimbursementDetailRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "EmployeeSelfService.ReimbursementDetail";
        const lookupKey = "EmployeeSelfService.ReimbursementDetail";
        function getLookup(): Q.Lookup<ReimbursementDetailRow>;
        const deletePermission = "EmployeeSelfService:Reimbursement";
        const insertPermission = "EmployeeSelfService:Reimbursement";
        const readPermission = "EmployeeSelfService:Reimbursement";
        const updatePermission = "EmployeeSelfService:Reimbursement";
        const enum Fields {
            Id = "Id",
            ReimbursementId = "ReimbursementId",
            ShortNote = "ShortNote",
            Amount = "Amount",
            ReimbursementNumber = "ReimbursementNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace ReimbursementDetailService {
        const baseUrl = "EmployeeSelfService/ReimbursementDetail";
        function Create(request: Serenity.SaveRequest<ReimbursementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReimbursementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReimbursementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReimbursementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/ReimbursementDetail/Create",
            Update = "EmployeeSelfService/ReimbursementDetail/Update",
            Delete = "EmployeeSelfService/ReimbursementDetail/Delete",
            Retrieve = "EmployeeSelfService/ReimbursementDetail/Retrieve",
            List = "EmployeeSelfService/ReimbursementDetail/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementForm {
        Number: Serenity.StringEditor;
        TransactionDate: Serenity.DateEditor;
        ReimbursementStatus: Serenity.EnumEditor;
        Description: Serenity.TextAreaEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        CurrencyName: Serenity.StringEditor;
        ItemList: ReimbursementDetailEditor;
        TotalAmount: Serenity.DecimalEditor;
    }
    class ReimbursementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface ReimbursementRow {
        Id?: number;
        Number?: string;
        Description?: string;
        TransactionDate?: string;
        TotalAmount?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        ReimbursementStatus?: ReimbursementStatus;
        ItemList?: ReimbursementDetailRow[];
        TenantId?: number;
        TenantName?: string;
        CurrencyName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ReimbursementRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "EmployeeSelfService.Reimbursement";
        const lookupKey = "EmployeeSelfService.Reimbursement";
        function getLookup(): Q.Lookup<ReimbursementRow>;
        const deletePermission = "EmployeeSelfService:Reimbursement";
        const insertPermission = "EmployeeSelfService:Reimbursement";
        const readPermission = "EmployeeSelfService:Reimbursement";
        const updatePermission = "EmployeeSelfService:Reimbursement";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            TransactionDate = "TransactionDate",
            TotalAmount = "TotalAmount",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            ReimbursementStatus = "ReimbursementStatus",
            ItemList = "ItemList",
            TenantId = "TenantId",
            TenantName = "TenantName",
            CurrencyName = "CurrencyName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace ReimbursementService {
        const baseUrl = "EmployeeSelfService/Reimbursement";
        function Create(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Currency(request: ReimbursementCurrencyRequest, onSuccess?: (response: ReimbursementCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: ReimbursementEmployeeIdRequest, onSuccess?: (response: ReimbursementEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Reimbursement/Create",
            Update = "EmployeeSelfService/Reimbursement/Update",
            Delete = "EmployeeSelfService/Reimbursement/Delete",
            Retrieve = "EmployeeSelfService/Reimbursement/Retrieve",
            List = "EmployeeSelfService/Reimbursement/List",
            Currency = "EmployeeSelfService/Reimbursement/Currency",
            EmployeeId = "EmployeeSelfService/Reimbursement/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    enum ReimbursementStatus {
        Submit = 1,
        Approve = 2
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TicketColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TicketDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TicketDetailForm {
        Response: Controls.CustomHtmlNoteContentEditor;
        ResponseBy: Serenity.StringEditor;
        ResponseAt: Serenity.DateTimeEditor;
    }
    class TicketDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TicketDetailRow {
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
    namespace TicketDetailRow {
        const idProperty = "Id";
        const nameProperty = "TicketNumber";
        const localTextPrefix = "EmployeeSelfService.TicketDetail";
        const lookupKey = "EmployeeSelfService.TicketDetail";
        function getLookup(): Q.Lookup<TicketDetailRow>;
        const deletePermission = "EmployeeSelfService:Ticket";
        const insertPermission = "EmployeeSelfService:Ticket";
        const readPermission = "EmployeeSelfService:Ticket";
        const updatePermission = "EmployeeSelfService:Ticket";
        const enum Fields {
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
declare namespace Indotalent.EmployeeSelfService {
    namespace TicketDetailService {
        const baseUrl = "EmployeeSelfService/TicketDetail";
        function Create(request: Serenity.SaveRequest<TicketDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/TicketDetail/Create",
            Update = "EmployeeSelfService/TicketDetail/Update",
            Delete = "EmployeeSelfService/TicketDetail/Delete",
            Retrieve = "EmployeeSelfService/TicketDetail/Retrieve",
            List = "EmployeeSelfService/TicketDetail/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TicketEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TicketEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TicketForm {
        Number: Serenity.StringEditor;
        TicketDate: Serenity.DateEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        Request: Controls.CustomHtmlNoteContentEditor;
        ItemList: TicketDetailEditor;
    }
    class TicketForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TicketRow {
        Id?: number;
        Number?: string;
        Request?: string;
        TicketDate?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: TicketDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TicketRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "EmployeeSelfService.Ticket";
        const lookupKey = "EmployeeSelfService.Ticket";
        function getLookup(): Q.Lookup<TicketRow>;
        const deletePermission = "EmployeeSelfService:Ticket";
        const insertPermission = "EmployeeSelfService:Ticket";
        const readPermission = "EmployeeSelfService:Ticket";
        const updatePermission = "EmployeeSelfService:Ticket";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Request = "Request",
            TicketDate = "TicketDate",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
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
declare namespace Indotalent.EmployeeSelfService {
    namespace TicketService {
        const baseUrl = "EmployeeSelfService/Ticket";
        function Create(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: TicketEmployeeIdRequest, onSuccess?: (response: TicketEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Ticket/Create",
            Update = "EmployeeSelfService/Ticket/Update",
            Delete = "EmployeeSelfService/Ticket/Delete",
            Retrieve = "EmployeeSelfService/Ticket/Retrieve",
            List = "EmployeeSelfService/Ticket/List",
            EmployeeId = "EmployeeSelfService/Ticket/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TimesheetColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TimesheetRow {
        Id?: number;
        EmployeeNumber?: string;
        EmployeeName?: string;
        CalendarDate?: string;
        PunchIn?: string;
        PunchOut?: string;
        WorkingDuration?: number;
        OvertimeDuration?: number;
    }
    namespace TimesheetRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "EmployeeSelfService.Timesheet";
        const lookupKey = "EmployeeSelfService.Timesheet";
        function getLookup(): Q.Lookup<TimesheetRow>;
        const deletePermission = "EmployeeSelfService:Timesheet";
        const insertPermission = "EmployeeSelfService:Timesheet";
        const readPermission = "EmployeeSelfService:Timesheet";
        const updatePermission = "EmployeeSelfService:Timesheet";
        const enum Fields {
            Id = "Id",
            EmployeeNumber = "EmployeeNumber",
            EmployeeName = "EmployeeName",
            CalendarDate = "CalendarDate",
            PunchIn = "PunchIn",
            PunchOut = "PunchOut",
            WorkingDuration = "WorkingDuration",
            OvertimeDuration = "OvertimeDuration"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace TimesheetService {
        const baseUrl = "EmployeeSelfService/Timesheet";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TimesheetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "EmployeeSelfService/Timesheet/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TrainingColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TrainingEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TrainingEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TrainingForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ItemList: TrainingParticipantEditor;
    }
    class TrainingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TrainingParticipantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TrainingParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class TrainingParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TrainingParticipantRow {
        Id?: number;
        TrainingId?: number;
        TrainingName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TrainingParticipantRow {
        const idProperty = "Id";
        const nameProperty = "TrainingName";
        const localTextPrefix = "EmployeeSelfService.TrainingParticipant";
        const lookupKey = "EmployeeSelfService.TrainingParticipant";
        function getLookup(): Q.Lookup<TrainingParticipantRow>;
        const deletePermission = "EmployeeSelfService:Training";
        const insertPermission = "EmployeeSelfService:Training";
        const readPermission = "EmployeeSelfService:Training";
        const updatePermission = "EmployeeSelfService:Training";
        const enum Fields {
            Id = "Id",
            TrainingId = "TrainingId",
            TrainingName = "TrainingName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace TrainingParticipantService {
        const baseUrl = "EmployeeSelfService/TrainingParticipant";
        function Create(request: Serenity.SaveRequest<TrainingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TrainingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TrainingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TrainingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/TrainingParticipant/Create",
            Update = "EmployeeSelfService/TrainingParticipant/Update",
            Delete = "EmployeeSelfService/TrainingParticipant/Delete",
            Retrieve = "EmployeeSelfService/TrainingParticipant/Retrieve",
            List = "EmployeeSelfService/TrainingParticipant/List"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface TrainingRow {
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
    namespace TrainingRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "EmployeeSelfService.Training";
        const lookupKey = "EmployeeSelfService.Training";
        function getLookup(): Q.Lookup<TrainingRow>;
        const deletePermission = "EmployeeSelfService:Training";
        const insertPermission = "EmployeeSelfService:Training";
        const readPermission = "EmployeeSelfService:Training";
        const updatePermission = "EmployeeSelfService:Training";
        const enum Fields {
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
declare namespace Indotalent.EmployeeSelfService {
    namespace TrainingService {
        const baseUrl = "EmployeeSelfService/Training";
        function Create(request: Serenity.SaveRequest<TrainingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TrainingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TrainingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TrainingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: TrainingEmployeeIdRequest, onSuccess?: (response: TrainingEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Training/Create",
            Update = "EmployeeSelfService/Training/Update",
            Delete = "EmployeeSelfService/Training/Delete",
            Retrieve = "EmployeeSelfService/Training/Retrieve",
            List = "EmployeeSelfService/Training/List",
            EmployeeId = "EmployeeSelfService/Training/EmployeeId"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class WarningColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface WarningEmployeeIdRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface WarningEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface WarningForm {
        Number: Serenity.StringEditor;
        WarningDate: Serenity.DateEditor;
        CorrectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        WarningReason: Controls.CustomHtmlNoteContentEditor;
        CorrectiveAction: Controls.CustomHtmlNoteContentEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
    }
    class WarningForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    interface WarningRow {
        Id?: number;
        Number?: string;
        Description?: string;
        WarningReason?: string;
        CorrectiveAction?: string;
        WarningDate?: string;
        CorrectiveDate?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WarningRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "EmployeeSelfService.Warning";
        const lookupKey = "EmployeeSelfService.Warning";
        function getLookup(): Q.Lookup<WarningRow>;
        const deletePermission = "EmployeeSelfService:Warning";
        const insertPermission = "EmployeeSelfService:Warning";
        const readPermission = "EmployeeSelfService:Warning";
        const updatePermission = "EmployeeSelfService:Warning";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            WarningReason = "WarningReason",
            CorrectiveAction = "CorrectiveAction",
            WarningDate = "WarningDate",
            CorrectiveDate = "CorrectiveDate",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.EmployeeSelfService {
    namespace WarningService {
        const baseUrl = "EmployeeSelfService/Warning";
        function Create(request: Serenity.SaveRequest<WarningRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WarningRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WarningRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WarningRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmployeeId(request: WarningEmployeeIdRequest, onSuccess?: (response: WarningEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EmployeeSelfService/Warning/Create",
            Update = "EmployeeSelfService/Warning/Update",
            Delete = "EmployeeSelfService/Warning/Delete",
            Retrieve = "EmployeeSelfService/Warning/Retrieve",
            List = "EmployeeSelfService/Warning/List",
            EmployeeId = "EmployeeSelfService/Warning/EmployeeId"
        }
    }
}
declare namespace Indotalent {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Indotalent {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Indotalent.Leave {
    class LeaveDelegatedTaskColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Leave {
    interface LeaveDelegatedTaskForm {
        ShortNote: Serenity.StringEditor;
    }
    class LeaveDelegatedTaskForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Leave {
    interface LeaveDelegatedTaskRow {
        Id?: number;
        LeaveRequestId?: number;
        LeaveRequestNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LeaveDelegatedTaskRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Leave.LeaveDelegatedTask";
        const lookupKey = "Leave.LeaveDelegatedTask";
        function getLookup(): Q.Lookup<LeaveDelegatedTaskRow>;
        const deletePermission = "Leave:LeaveRequest";
        const insertPermission = "Leave:LeaveRequest";
        const readPermission = "Leave:LeaveRequest";
        const updatePermission = "Leave:LeaveRequest";
        const enum Fields {
            Id = "Id",
            LeaveRequestId = "LeaveRequestId",
            LeaveRequestNumber = "LeaveRequestNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Leave {
    namespace LeaveDelegatedTaskService {
        const baseUrl = "Leave/LeaveDelegatedTask";
        function Create(request: Serenity.SaveRequest<LeaveDelegatedTaskRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LeaveDelegatedTaskRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveDelegatedTaskRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveDelegatedTaskRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Leave/LeaveDelegatedTask/Create",
            Update = "Leave/LeaveDelegatedTask/Update",
            Delete = "Leave/LeaveDelegatedTask/Delete",
            Retrieve = "Leave/LeaveDelegatedTask/Retrieve",
            List = "Leave/LeaveDelegatedTask/List"
        }
    }
}
declare namespace Indotalent.Leave {
    class LeaveEmergencyContactColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Leave {
    interface LeaveEmergencyContactForm {
        ContactName: Serenity.StringEditor;
        ContactPhoneNumber: Serenity.StringEditor;
    }
    class LeaveEmergencyContactForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Leave {
    interface LeaveEmergencyContactRow {
        Id?: number;
        LeaveRequestId?: number;
        LeaveRequestNumber?: string;
        ContactName?: string;
        ContactPhoneNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LeaveEmergencyContactRow {
        const idProperty = "Id";
        const nameProperty = "ContactName";
        const localTextPrefix = "Leave.LeaveEmergencyContact";
        const lookupKey = "Leave.LeaveEmergencyContact";
        function getLookup(): Q.Lookup<LeaveEmergencyContactRow>;
        const deletePermission = "Leave:LeaveRequest";
        const insertPermission = "Leave:LeaveRequest";
        const readPermission = "Leave:LeaveRequest";
        const updatePermission = "Leave:LeaveRequest";
        const enum Fields {
            Id = "Id",
            LeaveRequestId = "LeaveRequestId",
            LeaveRequestNumber = "LeaveRequestNumber",
            ContactName = "ContactName",
            ContactPhoneNumber = "ContactPhoneNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Leave {
    namespace LeaveEmergencyContactService {
        const baseUrl = "Leave/LeaveEmergencyContact";
        function Create(request: Serenity.SaveRequest<LeaveEmergencyContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LeaveEmergencyContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveEmergencyContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveEmergencyContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Leave/LeaveEmergencyContact/Create",
            Update = "Leave/LeaveEmergencyContact/Update",
            Delete = "Leave/LeaveEmergencyContact/Delete",
            Retrieve = "Leave/LeaveEmergencyContact/Retrieve",
            List = "Leave/LeaveEmergencyContact/List"
        }
    }
}
declare namespace Indotalent.Leave {
    class LeaveRequestColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Leave {
    interface LeaveRequestForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        LeaveTypeId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Duration: Serenity.DecimalEditor;
        LeaveRequestStatus: Serenity.EnumEditor;
        DelegatedEmployeeId: Serenity.LookupEditor;
        LeaveDelegatedTaskList: LeaveDelegatedTaskEditor;
        LeaveEmergencyContactList: LeaveEmergencyContactEditor;
    }
    class LeaveRequestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Leave {
    interface LeaveRequestRow {
        Id?: number;
        Number?: string;
        Description?: string;
        FromDate?: string;
        ToDate?: string;
        Duration?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        DelegatedEmployeeId?: number;
        DelegatedEmployeeName?: string;
        LeaveTypeId?: number;
        LeaveTypeName?: string;
        LeaveRequestStatus?: LeaveRequestStatus;
        TenantId?: number;
        TenantName?: string;
        LeaveDelegatedTaskList?: LeaveDelegatedTaskRow[];
        LeaveEmergencyContactList?: LeaveEmergencyContactRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LeaveRequestRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Leave.LeaveRequest";
        const lookupKey = "Leave.LeaveRequest";
        function getLookup(): Q.Lookup<LeaveRequestRow>;
        const deletePermission = "Leave:LeaveRequest";
        const insertPermission = "Leave:LeaveRequest";
        const readPermission = "Leave:LeaveRequest";
        const updatePermission = "Leave:LeaveRequest";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            FromDate = "FromDate",
            ToDate = "ToDate",
            Duration = "Duration",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            DelegatedEmployeeId = "DelegatedEmployeeId",
            DelegatedEmployeeName = "DelegatedEmployeeName",
            LeaveTypeId = "LeaveTypeId",
            LeaveTypeName = "LeaveTypeName",
            LeaveRequestStatus = "LeaveRequestStatus",
            TenantId = "TenantId",
            TenantName = "TenantName",
            LeaveDelegatedTaskList = "LeaveDelegatedTaskList",
            LeaveEmergencyContactList = "LeaveEmergencyContactList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Leave {
    namespace LeaveRequestService {
        const baseUrl = "Leave/LeaveRequest";
        function Create(request: Serenity.SaveRequest<LeaveRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LeaveRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Leave/LeaveRequest/Create",
            Update = "Leave/LeaveRequest/Update",
            Delete = "Leave/LeaveRequest/Delete",
            Retrieve = "Leave/LeaveRequest/Retrieve",
            List = "Leave/LeaveRequest/List"
        }
    }
}
declare namespace Indotalent.Leave {
    enum LeaveRequestStatus {
        Submit = 1,
        Approve = 2
    }
}
declare namespace Indotalent.Leave {
    class LeaveTypeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Leave {
    interface LeaveTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class LeaveTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Leave {
    interface LeaveTypeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LeaveTypeRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Leave.LeaveType";
        const lookupKey = "Leave.LeaveType";
        function getLookup(): Q.Lookup<LeaveTypeRow>;
        const deletePermission = "Leave:LeaveType";
        const insertPermission = "Leave:LeaveType";
        const readPermission = "Leave:LeaveType";
        const updatePermission = "Leave:LeaveType";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Leave {
    namespace LeaveTypeService {
        const baseUrl = "Leave/LeaveType";
        function Create(request: Serenity.SaveRequest<LeaveTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LeaveTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Leave/LeaveType/Create",
            Update = "Leave/LeaveType/Update",
            Delete = "Leave/LeaveType/Delete",
            Retrieve = "Leave/LeaveType/Retrieve",
            List = "Leave/LeaveType/List"
        }
    }
}
declare namespace Indotalent.Membership {
    interface ChangePasswordForm {
        NewPassword: Serenity.PasswordEditor;
        OldPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        NewPassword?: string;
        OldPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Indotalent.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.StringEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Indotalent.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Indotalent.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Indotalent.Membership {
    interface SignUpForm {
        CompanyName: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ConfirmEmail: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        CompanyName?: string;
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Indotalent.Operation {
    class AnnouncementColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface AnnouncementForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Message: Controls.CustomHtmlNoteContentEditor;
    }
    class AnnouncementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface AnnouncementRow {
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
    namespace AnnouncementRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Operation.Announcement";
        const lookupKey = "Operation.Announcement";
        function getLookup(): Q.Lookup<AnnouncementRow>;
        const deletePermission = "Operation:Announcement";
        const insertPermission = "Operation:Announcement";
        const readPermission = "Operation:Announcement";
        const updatePermission = "Operation:Announcement";
        const enum Fields {
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
declare namespace Indotalent.Operation {
    namespace AnnouncementService {
        const baseUrl = "Operation/Announcement";
        function Create(request: Serenity.SaveRequest<AnnouncementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AnnouncementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AnnouncementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AnnouncementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Announcement/Create",
            Update = "Operation/Announcement/Update",
            Delete = "Operation/Announcement/Delete",
            Retrieve = "Operation/Announcement/Retrieve",
            List = "Operation/Announcement/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class AssetColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface AssetForm {
        Number: Serenity.StringEditor;
        AssetTagNumber: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PurchaseDate: Serenity.DateEditor;
        PurchasePrice: Serenity.DecimalEditor;
        PurchaseOrderNumber: Serenity.StringEditor;
        PurchaseOrderBill: Serenity.StringEditor;
        SupportCenter: Serenity.TextAreaEditor;
        Manufacturer: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        ProductionYear: Serenity.IntegerEditor;
        Images: Serenity.MultipleImageUploadEditor;
    }
    class AssetForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    class AssetHandOverColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface AssetHandOverForm {
        Number: Serenity.StringEditor;
        HandOverDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        HandOverById: Serenity.LookupEditor;
        HandOverToId: Serenity.LookupEditor;
        AssetId: Serenity.LookupEditor;
        AssetDescription: Serenity.TextAreaEditor;
        AssetTagNumber: Serenity.StringEditor;
        Manufacturer: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        ProductionYear: Serenity.IntegerEditor;
    }
    class AssetHandOverForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface AssetHandOverRow {
        Id?: number;
        Number?: string;
        Description?: string;
        HandOverDate?: string;
        AssetId?: number;
        AssetNumber?: string;
        AssetDescription?: string;
        AssetTagNumber?: string;
        Manufacturer?: string;
        Model?: string;
        SerialNumber?: string;
        ProductionYear?: number;
        HandOverById?: number;
        HandOverByName?: string;
        HandOverToId?: number;
        HandOverToName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace AssetHandOverRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.AssetHandOver";
        const lookupKey = "Operation.AssetHandOver";
        function getLookup(): Q.Lookup<AssetHandOverRow>;
        const deletePermission = "Operation:AssetHandOver";
        const insertPermission = "Operation:AssetHandOver";
        const readPermission = "Operation:AssetHandOver";
        const updatePermission = "Operation:AssetHandOver";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            HandOverDate = "HandOverDate",
            AssetId = "AssetId",
            AssetNumber = "AssetNumber",
            AssetDescription = "AssetDescription",
            AssetTagNumber = "AssetTagNumber",
            Manufacturer = "Manufacturer",
            Model = "Model",
            SerialNumber = "SerialNumber",
            ProductionYear = "ProductionYear",
            HandOverById = "HandOverById",
            HandOverByName = "HandOverByName",
            HandOverToId = "HandOverToId",
            HandOverToName = "HandOverToName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace AssetHandOverService {
        const baseUrl = "Operation/AssetHandOver";
        function Create(request: Serenity.SaveRequest<AssetHandOverRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetHandOverRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetHandOverRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetHandOverRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/AssetHandOver/Create",
            Update = "Operation/AssetHandOver/Update",
            Delete = "Operation/AssetHandOver/Delete",
            Retrieve = "Operation/AssetHandOver/Retrieve",
            List = "Operation/AssetHandOver/List"
        }
    }
}
declare namespace Indotalent.Operation {
    interface AssetRow {
        Id?: number;
        Number?: string;
        Description?: string;
        PurchaseDate?: string;
        PurchasePrice?: number;
        PurchaseOrderNumber?: string;
        PurchaseOrderBill?: string;
        SupportCenter?: string;
        Manufacturer?: string;
        Model?: string;
        SerialNumber?: string;
        ProductionYear?: number;
        AssetTagNumber?: string;
        Images?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace AssetRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.Asset";
        const lookupKey = "Operation.Asset";
        function getLookup(): Q.Lookup<AssetRow>;
        const deletePermission = "Operation:Asset";
        const insertPermission = "Operation:Asset";
        const readPermission = "Operation:Asset";
        const updatePermission = "Operation:Asset";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            PurchaseDate = "PurchaseDate",
            PurchasePrice = "PurchasePrice",
            PurchaseOrderNumber = "PurchaseOrderNumber",
            PurchaseOrderBill = "PurchaseOrderBill",
            SupportCenter = "SupportCenter",
            Manufacturer = "Manufacturer",
            Model = "Model",
            SerialNumber = "SerialNumber",
            ProductionYear = "ProductionYear",
            AssetTagNumber = "AssetTagNumber",
            Images = "Images",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace AssetService {
        const baseUrl = "Operation/Asset";
        function Create(request: Serenity.SaveRequest<AssetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Asset/Create",
            Update = "Operation/Asset/Update",
            Delete = "Operation/Asset/Delete",
            Retrieve = "Operation/Asset/Retrieve",
            List = "Operation/Asset/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class AwardColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface AwardForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        Achievement: Controls.CustomHtmlNoteContentEditor;
        AwardeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        Reward: Serenity.StringEditor;
    }
    class AwardForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface AwardRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Date?: string;
        Reward?: string;
        Achievement?: string;
        AwardeeId?: number;
        AwardeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace AwardRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Operation.Award";
        const lookupKey = "Operation.Award";
        function getLookup(): Q.Lookup<AwardRow>;
        const deletePermission = "Operation:Award";
        const insertPermission = "Operation:Award";
        const readPermission = "Operation:Award";
        const updatePermission = "Operation:Award";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Date = "Date",
            Reward = "Reward",
            Achievement = "Achievement",
            AwardeeId = "AwardeeId",
            AwardeeName = "AwardeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace AwardService {
        const baseUrl = "Operation/Award";
        function Create(request: Serenity.SaveRequest<AwardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AwardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AwardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AwardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Award/Create",
            Update = "Operation/Award/Update",
            Delete = "Operation/Award/Delete",
            Retrieve = "Operation/Award/Retrieve",
            List = "Operation/Award/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class BusinessTripColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface BusinessTripForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ItemList: BusinessTripParticipantEditor;
    }
    class BusinessTripForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    class BusinessTripParticipantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface BusinessTripParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class BusinessTripParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface BusinessTripParticipantRow {
        Id?: number;
        BusinessTripId?: number;
        BusinessTripName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace BusinessTripParticipantRow {
        const idProperty = "Id";
        const nameProperty = "BusinessTripName";
        const localTextPrefix = "Operation.BusinessTripParticipant";
        const lookupKey = "Operation.BusinessTripParticipant";
        function getLookup(): Q.Lookup<BusinessTripParticipantRow>;
        const deletePermission = "Operation:BusinessTrip";
        const insertPermission = "Operation:BusinessTrip";
        const readPermission = "Operation:BusinessTrip";
        const updatePermission = "Operation:BusinessTrip";
        const enum Fields {
            Id = "Id",
            BusinessTripId = "BusinessTripId",
            BusinessTripName = "BusinessTripName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace BusinessTripParticipantService {
        const baseUrl = "Operation/BusinessTripParticipant";
        function Create(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/BusinessTripParticipant/Create",
            Update = "Operation/BusinessTripParticipant/Update",
            Delete = "Operation/BusinessTripParticipant/Delete",
            Retrieve = "Operation/BusinessTripParticipant/Retrieve",
            List = "Operation/BusinessTripParticipant/List"
        }
    }
}
declare namespace Indotalent.Operation {
    interface BusinessTripRow {
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
    namespace BusinessTripRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Operation.BusinessTrip";
        const lookupKey = "Operation.BusinessTrip";
        function getLookup(): Q.Lookup<BusinessTripRow>;
        const deletePermission = "Operation:BusinessTrip";
        const insertPermission = "Operation:BusinessTrip";
        const readPermission = "Operation:BusinessTrip";
        const updatePermission = "Operation:BusinessTrip";
        const enum Fields {
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
declare namespace Indotalent.Operation {
    namespace BusinessTripService {
        const baseUrl = "Operation/BusinessTrip";
        function Create(request: Serenity.SaveRequest<BusinessTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BusinessTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/BusinessTrip/Create",
            Update = "Operation/BusinessTrip/Update",
            Delete = "Operation/BusinessTrip/Delete",
            Retrieve = "Operation/BusinessTrip/Retrieve",
            List = "Operation/BusinessTrip/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class ComplaintColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface ComplaintForm {
        Number: Serenity.StringEditor;
        IncidentDate: Serenity.DateEditor;
        Location: Serenity.TextAreaEditor;
        Witness: Controls.CustomHtmlNoteContentEditor;
        IncidentDescription: Controls.CustomHtmlNoteContentEditor;
        ResolveSuggestion: Controls.CustomHtmlNoteContentEditor;
        ReporterId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class ComplaintForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface ComplaintRow {
        Id?: number;
        Number?: string;
        IncidentDescription?: string;
        IncidentDate?: string;
        ResolveSuggestion?: string;
        Location?: string;
        Witness?: string;
        ReporterId?: number;
        ReporterName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ComplaintRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.Complaint";
        const lookupKey = "Operation.Complaint";
        function getLookup(): Q.Lookup<ComplaintRow>;
        const deletePermission = "Operation:Complaint";
        const insertPermission = "Operation:Complaint";
        const readPermission = "Operation:Complaint";
        const updatePermission = "Operation:Complaint";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            IncidentDescription = "IncidentDescription",
            IncidentDate = "IncidentDate",
            ResolveSuggestion = "ResolveSuggestion",
            Location = "Location",
            Witness = "Witness",
            ReporterId = "ReporterId",
            ReporterName = "ReporterName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace ComplaintService {
        const baseUrl = "Operation/Complaint";
        function Create(request: Serenity.SaveRequest<ComplaintRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ComplaintRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComplaintRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComplaintRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Complaint/Create",
            Update = "Operation/Complaint/Update",
            Delete = "Operation/Complaint/Delete",
            Retrieve = "Operation/Complaint/Retrieve",
            List = "Operation/Complaint/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class EventColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface EventForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
    class EventForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface EventRow {
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
    namespace EventRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Operation.Event";
        const lookupKey = "Operation.Event";
        function getLookup(): Q.Lookup<EventRow>;
        const deletePermission = "Operation:Event";
        const insertPermission = "Operation:Event";
        const readPermission = "Operation:Event";
        const updatePermission = "Operation:Event";
        const enum Fields {
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
declare namespace Indotalent.Operation {
    namespace EventService {
        const baseUrl = "Operation/Event";
        function Create(request: Serenity.SaveRequest<EventRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EventRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EventRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EventRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Event/Create",
            Update = "Operation/Event/Update",
            Delete = "Operation/Event/Delete",
            Retrieve = "Operation/Event/Retrieve",
            List = "Operation/Event/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class HolidayColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface HolidayForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
    }
    class HolidayForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface HolidayRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Date?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace HolidayRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Operation.Holiday";
        const lookupKey = "Operation.Holiday";
        function getLookup(): Q.Lookup<HolidayRow>;
        const deletePermission = "Operation:Holiday";
        const insertPermission = "Operation:Holiday";
        const readPermission = "Operation:Holiday";
        const updatePermission = "Operation:Holiday";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Date = "Date",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace HolidayService {
        const baseUrl = "Operation/Holiday";
        function Create(request: Serenity.SaveRequest<HolidayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HolidayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HolidayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HolidayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Holiday/Create",
            Update = "Operation/Holiday/Update",
            Delete = "Operation/Holiday/Delete",
            Retrieve = "Operation/Holiday/Retrieve",
            List = "Operation/Holiday/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class MeetingColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface MeetingForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ItemList: MeetingParticipantEditor;
    }
    class MeetingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    class MeetingParticipantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface MeetingParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class MeetingParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface MeetingParticipantRow {
        Id?: number;
        MeetingId?: number;
        MeetingName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace MeetingParticipantRow {
        const idProperty = "Id";
        const nameProperty = "MeetingName";
        const localTextPrefix = "Operation.MeetingParticipant";
        const lookupKey = "Operation.MeetingParticipant";
        function getLookup(): Q.Lookup<MeetingParticipantRow>;
        const deletePermission = "Operation:Meeting";
        const insertPermission = "Operation:Meeting";
        const readPermission = "Operation:Meeting";
        const updatePermission = "Operation:Meeting";
        const enum Fields {
            Id = "Id",
            MeetingId = "MeetingId",
            MeetingName = "MeetingName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace MeetingParticipantService {
        const baseUrl = "Operation/MeetingParticipant";
        function Create(request: Serenity.SaveRequest<MeetingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/MeetingParticipant/Create",
            Update = "Operation/MeetingParticipant/Update",
            Delete = "Operation/MeetingParticipant/Delete",
            Retrieve = "Operation/MeetingParticipant/Retrieve",
            List = "Operation/MeetingParticipant/List"
        }
    }
}
declare namespace Indotalent.Operation {
    interface MeetingRow {
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
    namespace MeetingRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Operation.Meeting";
        const lookupKey = "Operation.Meeting";
        function getLookup(): Q.Lookup<MeetingRow>;
        const deletePermission = "Operation:Meeting";
        const insertPermission = "Operation:Meeting";
        const readPermission = "Operation:Meeting";
        const updatePermission = "Operation:Meeting";
        const enum Fields {
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
declare namespace Indotalent.Operation {
    namespace MeetingService {
        const baseUrl = "Operation/Meeting";
        function Create(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Meeting/Create",
            Update = "Operation/Meeting/Update",
            Delete = "Operation/Meeting/Delete",
            Retrieve = "Operation/Meeting/Retrieve",
            List = "Operation/Meeting/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class ReimbursementColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface ReimbursementCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Operation {
    interface ReimbursementCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Operation {
    class ReimbursementDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface ReimbursementDetailForm {
        ShortNote: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }
    class ReimbursementDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface ReimbursementDetailRow {
        Id?: number;
        ReimbursementId?: number;
        ShortNote?: string;
        Amount?: number;
        ReimbursementNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ReimbursementDetailRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Operation.ReimbursementDetail";
        const lookupKey = "Operation.ReimbursementDetail";
        function getLookup(): Q.Lookup<ReimbursementDetailRow>;
        const deletePermission = "Operation:Reimbursement";
        const insertPermission = "Operation:Reimbursement";
        const readPermission = "Operation:Reimbursement";
        const updatePermission = "Operation:Reimbursement";
        const enum Fields {
            Id = "Id",
            ReimbursementId = "ReimbursementId",
            ShortNote = "ShortNote",
            Amount = "Amount",
            ReimbursementNumber = "ReimbursementNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace ReimbursementDetailService {
        const baseUrl = "Operation/ReimbursementDetail";
        function Create(request: Serenity.SaveRequest<ReimbursementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReimbursementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReimbursementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReimbursementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/ReimbursementDetail/Create",
            Update = "Operation/ReimbursementDetail/Update",
            Delete = "Operation/ReimbursementDetail/Delete",
            Retrieve = "Operation/ReimbursementDetail/Retrieve",
            List = "Operation/ReimbursementDetail/List"
        }
    }
}
declare namespace Indotalent.Operation {
    interface ReimbursementForm {
        Number: Serenity.StringEditor;
        TransactionDate: Serenity.DateEditor;
        ReimbursementStatus: Serenity.EnumEditor;
        Description: Serenity.TextAreaEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        CurrencyName: Serenity.StringEditor;
        ItemList: ReimbursementDetailEditor;
        TotalAmount: Serenity.DecimalEditor;
    }
    class ReimbursementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface ReimbursementRow {
        Id?: number;
        Number?: string;
        Description?: string;
        TransactionDate?: string;
        TotalAmount?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        ReimbursementStatus?: ReimbursementStatus;
        ItemList?: ReimbursementDetailRow[];
        TenantId?: number;
        TenantName?: string;
        CurrencyName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ReimbursementRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.Reimbursement";
        const lookupKey = "Operation.Reimbursement";
        function getLookup(): Q.Lookup<ReimbursementRow>;
        const deletePermission = "Operation:Reimbursement";
        const insertPermission = "Operation:Reimbursement";
        const readPermission = "Operation:Reimbursement";
        const updatePermission = "Operation:Reimbursement";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            TransactionDate = "TransactionDate",
            TotalAmount = "TotalAmount",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            ReimbursementStatus = "ReimbursementStatus",
            ItemList = "ItemList",
            TenantId = "TenantId",
            TenantName = "TenantName",
            CurrencyName = "CurrencyName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace ReimbursementService {
        const baseUrl = "Operation/Reimbursement";
        function Create(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Currency(request: ReimbursementCurrencyRequest, onSuccess?: (response: ReimbursementCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Reimbursement/Create",
            Update = "Operation/Reimbursement/Update",
            Delete = "Operation/Reimbursement/Delete",
            Retrieve = "Operation/Reimbursement/Retrieve",
            List = "Operation/Reimbursement/List",
            Currency = "Operation/Reimbursement/Currency"
        }
    }
}
declare namespace Indotalent.Operation {
    enum ReimbursementStatus {
        Submit = 1,
        Approve = 2
    }
}
declare namespace Indotalent.Operation {
    class ResignationColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface ResignationForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ResignationDate: Serenity.DateEditor;
        EffectiveDate: Serenity.DateEditor;
        ResigneeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class ResignationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface ResignationRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ResignationDate?: string;
        EffectiveDate?: string;
        ResigneeId?: number;
        ResigneeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ResignationRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.Resignation";
        const lookupKey = "Operation.Resignation";
        function getLookup(): Q.Lookup<ResignationRow>;
        const deletePermission = "Operation:Resignation";
        const insertPermission = "Operation:Resignation";
        const readPermission = "Operation:Resignation";
        const updatePermission = "Operation:Resignation";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            ResignationDate = "ResignationDate",
            EffectiveDate = "EffectiveDate",
            ResigneeId = "ResigneeId",
            ResigneeName = "ResigneeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace ResignationService {
        const baseUrl = "Operation/Resignation";
        function Create(request: Serenity.SaveRequest<ResignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ResignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ResignationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ResignationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Resignation/Create",
            Update = "Operation/Resignation/Update",
            Delete = "Operation/Resignation/Delete",
            Retrieve = "Operation/Resignation/Retrieve",
            List = "Operation/Resignation/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class SOPColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface SOPForm {
        Number: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Reference: Serenity.ImageUploadEditor;
    }
    class SOPForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface SOPRow {
        Id?: number;
        Number?: string;
        Name?: string;
        Description?: string;
        Reference?: string;
        TenantId?: number;
        TenantName?: string;
    }
    namespace SOPRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.SOP";
        const lookupKey = "Operation.SOP";
        function getLookup(): Q.Lookup<SOPRow>;
        const deletePermission = "Operation:SOP";
        const insertPermission = "Operation:SOP";
        const readPermission = "Operation:SOP";
        const updatePermission = "Operation:SOP";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Name = "Name",
            Description = "Description",
            Reference = "Reference",
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace SOPService {
        const baseUrl = "Operation/SOP";
        function Create(request: Serenity.SaveRequest<SOPRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SOPRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SOPRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SOPRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/SOP/Create",
            Update = "Operation/SOP/Update",
            Delete = "Operation/SOP/Delete",
            Retrieve = "Operation/SOP/Retrieve",
            List = "Operation/SOP/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class TerminationColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface TerminationForm {
        Number: Serenity.StringEditor;
        TerminationDate: Serenity.DateEditor;
        EffectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        TerminationReason: Controls.CustomHtmlNoteContentEditor;
        ReturnedItem: Controls.CustomHtmlNoteContentEditor;
        CompletedForm: Controls.CustomHtmlNoteContentEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
    }
    class TerminationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface TerminationRow {
        Id?: number;
        Number?: string;
        Description?: string;
        TerminationReason?: string;
        ReturnedItem?: string;
        CompletedForm?: string;
        TerminationDate?: string;
        EffectiveDate?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TerminationRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.Termination";
        const lookupKey = "Operation.Termination";
        function getLookup(): Q.Lookup<TerminationRow>;
        const deletePermission = "Operation:Termination";
        const insertPermission = "Operation:Termination";
        const readPermission = "Operation:Termination";
        const updatePermission = "Operation:Termination";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            TerminationReason = "TerminationReason",
            ReturnedItem = "ReturnedItem",
            CompletedForm = "CompletedForm",
            TerminationDate = "TerminationDate",
            EffectiveDate = "EffectiveDate",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace TerminationService {
        const baseUrl = "Operation/Termination";
        function Create(request: Serenity.SaveRequest<TerminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Termination/Create",
            Update = "Operation/Termination/Update",
            Delete = "Operation/Termination/Delete",
            Retrieve = "Operation/Termination/Retrieve",
            List = "Operation/Termination/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class TicketColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    class TicketDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface TicketDetailForm {
        Response: Controls.CustomHtmlNoteContentEditor;
        ResponseBy: Serenity.StringEditor;
        ResponseAt: Serenity.DateTimeEditor;
    }
    class TicketDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface TicketDetailRow {
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
    namespace TicketDetailRow {
        const idProperty = "Id";
        const nameProperty = "TicketNumber";
        const localTextPrefix = "Operation.TicketDetail";
        const lookupKey = "Operation.TicketDetail";
        function getLookup(): Q.Lookup<TicketDetailRow>;
        const deletePermission = "Operation:Ticket";
        const insertPermission = "Operation:Ticket";
        const readPermission = "Operation:Ticket";
        const updatePermission = "Operation:Ticket";
        const enum Fields {
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
declare namespace Indotalent.Operation {
    namespace TicketDetailService {
        const baseUrl = "Operation/TicketDetail";
        function Create(request: Serenity.SaveRequest<TicketDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/TicketDetail/Create",
            Update = "Operation/TicketDetail/Update",
            Delete = "Operation/TicketDetail/Delete",
            Retrieve = "Operation/TicketDetail/Retrieve",
            List = "Operation/TicketDetail/List"
        }
    }
}
declare namespace Indotalent.Operation {
    interface TicketForm {
        Number: Serenity.StringEditor;
        TicketDate: Serenity.DateEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        Request: Controls.CustomHtmlNoteContentEditor;
        ItemList: TicketDetailEditor;
    }
    class TicketForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface TicketRow {
        Id?: number;
        Number?: string;
        Request?: string;
        TicketDate?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: TicketDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TicketRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.Ticket";
        const lookupKey = "Operation.Ticket";
        function getLookup(): Q.Lookup<TicketRow>;
        const deletePermission = "Operation:Ticket";
        const insertPermission = "Operation:Ticket";
        const readPermission = "Operation:Ticket";
        const updatePermission = "Operation:Ticket";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Request = "Request",
            TicketDate = "TicketDate",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
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
declare namespace Indotalent.Operation {
    namespace TicketService {
        const baseUrl = "Operation/Ticket";
        function Create(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Ticket/Create",
            Update = "Operation/Ticket/Update",
            Delete = "Operation/Ticket/Delete",
            Retrieve = "Operation/Ticket/Retrieve",
            List = "Operation/Ticket/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class TrainingColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface TrainingForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ItemList: TrainingParticipantEditor;
    }
    class TrainingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    class TrainingParticipantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface TrainingParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }
    class TrainingParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface TrainingParticipantRow {
        Id?: number;
        TrainingId?: number;
        TrainingName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TrainingParticipantRow {
        const idProperty = "Id";
        const nameProperty = "TrainingName";
        const localTextPrefix = "Operation.TrainingParticipant";
        const lookupKey = "Operation.TrainingParticipant";
        function getLookup(): Q.Lookup<TrainingParticipantRow>;
        const deletePermission = "Operation:Training";
        const insertPermission = "Operation:Training";
        const readPermission = "Operation:Training";
        const updatePermission = "Operation:Training";
        const enum Fields {
            Id = "Id",
            TrainingId = "TrainingId",
            TrainingName = "TrainingName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace TrainingParticipantService {
        const baseUrl = "Operation/TrainingParticipant";
        function Create(request: Serenity.SaveRequest<TrainingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TrainingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TrainingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TrainingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/TrainingParticipant/Create",
            Update = "Operation/TrainingParticipant/Update",
            Delete = "Operation/TrainingParticipant/Delete",
            Retrieve = "Operation/TrainingParticipant/Retrieve",
            List = "Operation/TrainingParticipant/List"
        }
    }
}
declare namespace Indotalent.Operation {
    interface TrainingRow {
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
    namespace TrainingRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Operation.Training";
        const lookupKey = "Operation.Training";
        function getLookup(): Q.Lookup<TrainingRow>;
        const deletePermission = "Operation:Training";
        const insertPermission = "Operation:Training";
        const readPermission = "Operation:Training";
        const updatePermission = "Operation:Training";
        const enum Fields {
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
declare namespace Indotalent.Operation {
    namespace TrainingService {
        const baseUrl = "Operation/Training";
        function Create(request: Serenity.SaveRequest<TrainingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TrainingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TrainingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TrainingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Training/Create",
            Update = "Operation/Training/Update",
            Delete = "Operation/Training/Delete",
            Retrieve = "Operation/Training/Retrieve",
            List = "Operation/Training/List"
        }
    }
}
declare namespace Indotalent.Operation {
    class WarningColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Operation {
    interface WarningForm {
        Number: Serenity.StringEditor;
        WarningDate: Serenity.DateEditor;
        CorrectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        WarningReason: Controls.CustomHtmlNoteContentEditor;
        CorrectiveAction: Controls.CustomHtmlNoteContentEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
    }
    class WarningForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Operation {
    interface WarningRow {
        Id?: number;
        Number?: string;
        Description?: string;
        WarningReason?: string;
        CorrectiveAction?: string;
        WarningDate?: string;
        CorrectiveDate?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WarningRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Operation.Warning";
        const lookupKey = "Operation.Warning";
        function getLookup(): Q.Lookup<WarningRow>;
        const deletePermission = "Operation:Warning";
        const insertPermission = "Operation:Warning";
        const readPermission = "Operation:Warning";
        const updatePermission = "Operation:Warning";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            WarningReason = "WarningReason",
            CorrectiveAction = "CorrectiveAction",
            WarningDate = "WarningDate",
            CorrectiveDate = "CorrectiveDate",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Operation {
    namespace WarningService {
        const baseUrl = "Operation/Warning";
        function Create(request: Serenity.SaveRequest<WarningRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WarningRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WarningRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WarningRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Operation/Warning/Create",
            Update = "Operation/Warning/Update",
            Delete = "Operation/Warning/Delete",
            Retrieve = "Operation/Warning/Retrieve",
            List = "Operation/Warning/List"
        }
    }
}
declare namespace Indotalent.Organization {
    class BranchColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Organization {
    interface BranchForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class BranchForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Organization {
    interface BranchRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace BranchRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Organization.Branch";
        const lookupKey = "Organization.Branch";
        function getLookup(): Q.Lookup<BranchRow>;
        const deletePermission = "Organization:Branch";
        const insertPermission = "Organization:Branch";
        const readPermission = "Organization:Branch";
        const updatePermission = "Organization:Branch";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Organization {
    namespace BranchService {
        const baseUrl = "Organization/Branch";
        function Create(request: Serenity.SaveRequest<BranchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BranchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Organization/Branch/Create",
            Update = "Organization/Branch/Update",
            Delete = "Organization/Branch/Delete",
            Retrieve = "Organization/Branch/Retrieve",
            List = "Organization/Branch/List"
        }
    }
}
declare namespace Indotalent.Organization {
    class DepartmentColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Organization {
    interface DepartmentForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class DepartmentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Organization {
    interface DepartmentRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace DepartmentRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Organization.Department";
        const lookupKey = "Organization.Department";
        function getLookup(): Q.Lookup<DepartmentRow>;
        const deletePermission = "Organization:Department";
        const insertPermission = "Organization:Department";
        const readPermission = "Organization:Department";
        const updatePermission = "Organization:Department";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Organization {
    namespace DepartmentService {
        const baseUrl = "Organization/Department";
        function Create(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Organization/Department/Create",
            Update = "Organization/Department/Update",
            Delete = "Organization/Department/Delete",
            Retrieve = "Organization/Department/Retrieve",
            List = "Organization/Department/List"
        }
    }
}
declare namespace Indotalent.Organization {
    class DesignationColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Organization {
    interface DesignationForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class DesignationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Organization {
    interface DesignationRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace DesignationRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Organization.Designation";
        const lookupKey = "Organization.Designation";
        function getLookup(): Q.Lookup<DesignationRow>;
        const deletePermission = "Organization:Designation";
        const insertPermission = "Organization:Designation";
        const readPermission = "Organization:Designation";
        const updatePermission = "Organization:Designation";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Organization {
    namespace DesignationService {
        const baseUrl = "Organization/Designation";
        function Create(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Organization/Designation/Create",
            Update = "Organization/Designation/Update",
            Delete = "Organization/Designation/Delete",
            Retrieve = "Organization/Designation/Retrieve",
            List = "Organization/Designation/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class DeductionColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface DeductionForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        DeductionRate: Serenity.DecimalEditor;
    }
    class DeductionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface DeductionRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        DeductionRate?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace DeductionRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.Deduction";
        const lookupKey = "Payrolls.Deduction";
        function getLookup(): Q.Lookup<DeductionRow>;
        const deletePermission = "Payrolls:Deduction";
        const insertPermission = "Payrolls:Deduction";
        const readPermission = "Payrolls:Deduction";
        const updatePermission = "Payrolls:Deduction";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            DeductionRate = "DeductionRate",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace DeductionService {
        const baseUrl = "Payrolls/Deduction";
        function Create(request: Serenity.SaveRequest<DeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/Deduction/Create",
            Update = "Payrolls/Deduction/Update",
            Delete = "Payrolls/Deduction/Delete",
            Retrieve = "Payrolls/Deduction/Retrieve",
            List = "Payrolls/Deduction/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeChildrenColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeChildrenForm {
        Name: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        Profession: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
    class EmployeeChildrenForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeChildrenRow {
        Id?: number;
        EmployeeId?: number;
        Name?: string;
        Profession?: string;
        DateOfBirth?: string;
        EmployeeName?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeChildrenRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.EmployeeChildren";
        const lookupKey = "Payrolls.EmployeeChildren";
        function getLookup(): Q.Lookup<EmployeeChildrenRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Name = "Name",
            Profession = "Profession",
            DateOfBirth = "DateOfBirth",
            EmployeeName = "EmployeeName",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeChildrenService {
        const baseUrl = "Payrolls/EmployeeChildren";
        function Create(request: Serenity.SaveRequest<EmployeeChildrenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeChildrenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeChildrenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeChildrenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeChildren/Create",
            Update = "Payrolls/EmployeeChildren/Update",
            Delete = "Payrolls/EmployeeChildren/Delete",
            Retrieve = "Payrolls/EmployeeChildren/Retrieve",
            List = "Payrolls/EmployeeChildren/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDeductionColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeDeductionForm {
        DeductionId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
    }
    class EmployeeDeductionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeDeductionRow {
        Id?: number;
        EmployeeId?: number;
        DeductionId?: number;
        Description?: string;
        Amount?: number;
        EmployeeName?: string;
        DeductionName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeDeductionRow {
        const idProperty = "Id";
        const nameProperty = "DeductionName";
        const localTextPrefix = "Payrolls.EmployeeDeduction";
        const lookupKey = "Payrolls.EmployeeDeduction";
        function getLookup(): Q.Lookup<EmployeeDeductionRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            DeductionId = "DeductionId",
            Description = "Description",
            Amount = "Amount",
            EmployeeName = "EmployeeName",
            DeductionName = "DeductionName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeDeductionService {
        const baseUrl = "Payrolls/EmployeeDeduction";
        function Create(request: Serenity.SaveRequest<EmployeeDeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeDeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeDeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeDeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeDeduction/Create",
            Update = "Payrolls/EmployeeDeduction/Update",
            Delete = "Payrolls/EmployeeDeduction/Delete",
            Retrieve = "Payrolls/EmployeeDeduction/Retrieve",
            List = "Payrolls/EmployeeDeduction/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDocumentColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeDocumentForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ExpiredDate: Serenity.DateEditor;
        Picture: Serenity.ImageUploadEditor;
    }
    class EmployeeDocumentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeDocumentRow {
        Id?: number;
        EmployeeId?: number;
        Name?: string;
        Description?: string;
        ExpiredDate?: string;
        Picture?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeDocumentRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.EmployeeDocument";
        const lookupKey = "Payrolls.EmployeeDocument";
        function getLookup(): Q.Lookup<EmployeeDocumentRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Name = "Name",
            Description = "Description",
            ExpiredDate = "ExpiredDate",
            Picture = "Picture",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeDocumentService {
        const baseUrl = "Payrolls/EmployeeDocument";
        function Create(request: Serenity.SaveRequest<EmployeeDocumentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeDocumentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeDocumentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeDocumentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeDocument/Create",
            Update = "Payrolls/EmployeeDocument/Update",
            Delete = "Payrolls/EmployeeDocument/Delete",
            Retrieve = "Payrolls/EmployeeDocument/Retrieve",
            List = "Payrolls/EmployeeDocument/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeEducationColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeEducationForm {
        SchoolName: Serenity.StringEditor;
        StudyMajor: Serenity.StringEditor;
        Grade: Serenity.StringEditor;
        ShortNote: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
    }
    class EmployeeEducationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeEducationRow {
        Id?: number;
        EmployeeId?: number;
        SchoolName?: string;
        StudyMajor?: string;
        Grade?: string;
        ShortNote?: string;
        StartDate?: string;
        EndDate?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeEducationRow {
        const idProperty = "Id";
        const nameProperty = "SchoolName";
        const localTextPrefix = "Payrolls.EmployeeEducation";
        const lookupKey = "Payrolls.EmployeeEducation";
        function getLookup(): Q.Lookup<EmployeeEducationRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            SchoolName = "SchoolName",
            StudyMajor = "StudyMajor",
            Grade = "Grade",
            ShortNote = "ShortNote",
            StartDate = "StartDate",
            EndDate = "EndDate",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeEducationService {
        const baseUrl = "Payrolls/EmployeeEducation";
        function Create(request: Serenity.SaveRequest<EmployeeEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeEducation/Create",
            Update = "Payrolls/EmployeeEducation/Update",
            Delete = "Payrolls/EmployeeEducation/Delete",
            Retrieve = "Payrolls/EmployeeEducation/Retrieve",
            List = "Payrolls/EmployeeEducation/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeExperienceColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeExperienceForm {
        CompanyName: Serenity.StringEditor;
        Position: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Salary: Serenity.DecimalEditor;
    }
    class EmployeeExperienceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeExperienceRow {
        Id?: number;
        EmployeeId?: number;
        CompanyName?: string;
        Position?: string;
        StartDate?: string;
        EndDate?: string;
        Salary?: number;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeExperienceRow {
        const idProperty = "Id";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Payrolls.EmployeeExperience";
        const lookupKey = "Payrolls.EmployeeExperience";
        function getLookup(): Q.Lookup<EmployeeExperienceRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            CompanyName = "CompanyName",
            Position = "Position",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Salary = "Salary",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeExperienceService {
        const baseUrl = "Payrolls/EmployeeExperience";
        function Create(request: Serenity.SaveRequest<EmployeeExperienceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeExperienceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeExperienceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeExperienceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeExperience/Create",
            Update = "Payrolls/EmployeeExperience/Update",
            Delete = "Payrolls/EmployeeExperience/Delete",
            Retrieve = "Payrolls/EmployeeExperience/Retrieve",
            List = "Payrolls/EmployeeExperience/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeForm {
        Name: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        EmployeeNumber: Serenity.StringEditor;
        TaxNumber: Serenity.StringEditor;
        BiometricNumber: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Picture: Serenity.ImageUploadEditor;
        DateOfBirth: Serenity.DateEditor;
        PlaceOfBirth: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        DateOfJoining: Serenity.DateEditor;
        DepartmentId: Serenity.LookupEditor;
        GradeId: Serenity.LookupEditor;
        DesignationId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        LeaveQuota: Serenity.DecimalEditor;
        LeaveTaken: Serenity.DecimalEditor;
        BasicSalary: Serenity.DecimalEditor;
        IncomeList: EmployeeIncomeEditor;
        DeductionList: EmployeeDeductionEditor;
        BankAccountForPayroll: Serenity.StringEditor;
        BankNameForPayroll: Serenity.StringEditor;
        SpouseName: Serenity.StringEditor;
        SpouseProfession: Serenity.StringEditor;
        SpouseDateOfBirth: Serenity.DateEditor;
        SpouseStreet: Serenity.StringEditor;
        SpouseCity: Serenity.StringEditor;
        SpouseState: Serenity.StringEditor;
        SpouseZipCode: Serenity.StringEditor;
        SpousePhone: Serenity.StringEditor;
        SpouseEmail: Serenity.StringEditor;
        ParentList: EmployeeParentEditor;
        ChildrenList: EmployeeChildrenEditor;
        DocumentList: EmployeeDocumentEditor;
        ExperienceList: EmployeeExperienceEditor;
        LatestEducationDegree: Serenity.EnumEditor;
        EducationList: EmployeeEducationEditor;
        TopSkillList: EmployeeTopSkillEditor;
        JobDescriptionList: EmployeeJobDescriptionEditor;
        KpiList: EmployeeKpiEditor;
        OkrObjectiveList: EmployeeOkrObjectiveEditor;
        OkrResultList: EmployeeOkrResultEditor;
        SystemUserId: Serenity.LookupEditor;
    }
    class EmployeeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeIncomeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeIncomeForm {
        IncomeId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
    }
    class EmployeeIncomeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeIncomeRow {
        Id?: number;
        EmployeeId?: number;
        IncomeId?: number;
        Description?: string;
        Amount?: number;
        EmployeeName?: string;
        IncomeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeIncomeRow {
        const idProperty = "Id";
        const nameProperty = "IncomeName";
        const localTextPrefix = "Payrolls.EmployeeIncome";
        const lookupKey = "Payrolls.EmployeeIncome";
        function getLookup(): Q.Lookup<EmployeeIncomeRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            IncomeId = "IncomeId",
            Description = "Description",
            Amount = "Amount",
            EmployeeName = "EmployeeName",
            IncomeName = "IncomeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeIncomeService {
        const baseUrl = "Payrolls/EmployeeIncome";
        function Create(request: Serenity.SaveRequest<EmployeeIncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeIncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeIncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeIncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeIncome/Create",
            Update = "Payrolls/EmployeeIncome/Update",
            Delete = "Payrolls/EmployeeIncome/Delete",
            Retrieve = "Payrolls/EmployeeIncome/Retrieve",
            List = "Payrolls/EmployeeIncome/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeJobDescriptionColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeJobDescriptionForm {
        JobDescription: Serenity.StringEditor;
    }
    class EmployeeJobDescriptionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeJobDescriptionRow {
        Id?: number;
        EmployeeId?: number;
        JobDescription?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeJobDescriptionRow {
        const idProperty = "Id";
        const nameProperty = "JobDescription";
        const localTextPrefix = "Payrolls.EmployeeJobDescription";
        const lookupKey = "Payrolls.EmployeeJobDescription";
        function getLookup(): Q.Lookup<EmployeeJobDescriptionRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            JobDescription = "JobDescription",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeJobDescriptionService {
        const baseUrl = "Payrolls/EmployeeJobDescription";
        function Create(request: Serenity.SaveRequest<EmployeeJobDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeJobDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeJobDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeJobDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeJobDescription/Create",
            Update = "Payrolls/EmployeeJobDescription/Update",
            Delete = "Payrolls/EmployeeJobDescription/Delete",
            Retrieve = "Payrolls/EmployeeJobDescription/Retrieve",
            List = "Payrolls/EmployeeJobDescription/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeKpiColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeKpiForm {
        KpiDescription: Serenity.StringEditor;
        KpiIndicator: Serenity.DecimalEditor;
        KpiUnit: Serenity.StringEditor;
    }
    class EmployeeKpiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeKpiRow {
        Id?: number;
        EmployeeId?: number;
        KpiDescription?: string;
        KpiIndicator?: number;
        KpiUnit?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeKpiRow {
        const idProperty = "Id";
        const nameProperty = "KpiDescription";
        const localTextPrefix = "Payrolls.EmployeeKpi";
        const lookupKey = "Payrolls.EmployeeKpi";
        function getLookup(): Q.Lookup<EmployeeKpiRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            KpiDescription = "KpiDescription",
            KpiIndicator = "KpiIndicator",
            KpiUnit = "KpiUnit",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeKpiService {
        const baseUrl = "Payrolls/EmployeeKpi";
        function Create(request: Serenity.SaveRequest<EmployeeKpiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeKpiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeKpiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeKpiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeKpi/Create",
            Update = "Payrolls/EmployeeKpi/Update",
            Delete = "Payrolls/EmployeeKpi/Delete",
            Retrieve = "Payrolls/EmployeeKpi/Retrieve",
            List = "Payrolls/EmployeeKpi/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrObjectiveColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeOkrObjectiveForm {
        Objective: Serenity.StringEditor;
    }
    class EmployeeOkrObjectiveForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeOkrObjectiveRow {
        Id?: number;
        EmployeeId?: number;
        Objective?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeOkrObjectiveRow {
        const idProperty = "Id";
        const nameProperty = "Objective";
        const localTextPrefix = "Payrolls.EmployeeOkrObjective";
        const lookupKey = "Payrolls.EmployeeOkrObjective";
        function getLookup(): Q.Lookup<EmployeeOkrObjectiveRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Objective = "Objective",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeOkrObjectiveService {
        const baseUrl = "Payrolls/EmployeeOkrObjective";
        function Create(request: Serenity.SaveRequest<EmployeeOkrObjectiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeOkrObjectiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeOkrObjectiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeOkrObjectiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeOkrObjective/Create",
            Update = "Payrolls/EmployeeOkrObjective/Update",
            Delete = "Payrolls/EmployeeOkrObjective/Delete",
            Retrieve = "Payrolls/EmployeeOkrObjective/Retrieve",
            List = "Payrolls/EmployeeOkrObjective/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrResultColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeOkrResultForm {
        Result: Serenity.StringEditor;
    }
    class EmployeeOkrResultForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeOkrResultRow {
        Id?: number;
        EmployeeId?: number;
        Result?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeOkrResultRow {
        const idProperty = "Id";
        const nameProperty = "Result";
        const localTextPrefix = "Payrolls.EmployeeOkrResult";
        const lookupKey = "Payrolls.EmployeeOkrResult";
        function getLookup(): Q.Lookup<EmployeeOkrResultRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Result = "Result",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeOkrResultService {
        const baseUrl = "Payrolls/EmployeeOkrResult";
        function Create(request: Serenity.SaveRequest<EmployeeOkrResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeOkrResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeOkrResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeOkrResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeOkrResult/Create",
            Update = "Payrolls/EmployeeOkrResult/Update",
            Delete = "Payrolls/EmployeeOkrResult/Delete",
            Retrieve = "Payrolls/EmployeeOkrResult/Retrieve",
            List = "Payrolls/EmployeeOkrResult/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeParentColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeParentForm {
        Name: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        Profession: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
    class EmployeeParentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeParentRow {
        Id?: number;
        EmployeeId?: number;
        Name?: string;
        Profession?: string;
        DateOfBirth?: string;
        EmployeeName?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeParentRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.EmployeeParent";
        const lookupKey = "Payrolls.EmployeeParent";
        function getLookup(): Q.Lookup<EmployeeParentRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Name = "Name",
            Profession = "Profession",
            DateOfBirth = "DateOfBirth",
            EmployeeName = "EmployeeName",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeParentService {
        const baseUrl = "Payrolls/EmployeeParent";
        function Create(request: Serenity.SaveRequest<EmployeeParentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeParentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeParentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeParentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeParent/Create",
            Update = "Payrolls/EmployeeParent/Update",
            Delete = "Payrolls/EmployeeParent/Delete",
            Retrieve = "Payrolls/EmployeeParent/Retrieve",
            List = "Payrolls/EmployeeParent/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        EmployeeNumber?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Picture?: string;
        GradeId?: number;
        BasicSalary?: number;
        DesignationId?: number;
        DepartmentId?: number;
        BankAccountForPayroll?: string;
        BankNameForPayroll?: string;
        DateOfBirth?: string;
        PlaceOfBirth?: string;
        BiometricNumber?: string;
        TaxNumber?: string;
        GenderId?: number;
        GenderName?: string;
        DateOfJoining?: string;
        BranchId?: number;
        BranchName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        GradeName?: string;
        DesignationName?: string;
        DepartmentName?: string;
        LeaveQuota?: number;
        LeaveTaken?: number;
        LatestEducationDegree?: LatestEducationDegree;
        SpouseName?: string;
        SpouseDateOfBirth?: string;
        SpouseProfession?: string;
        SpouseStreet?: string;
        SpouseCity?: string;
        SpouseState?: string;
        SpouseZipCode?: string;
        SpousePhone?: string;
        SpouseEmail?: string;
        IncomeList?: EmployeeIncomeRow[];
        DeductionList?: EmployeeDeductionRow[];
        DocumentList?: EmployeeDocumentRow[];
        ExperienceList?: EmployeeExperienceRow[];
        EducationList?: EmployeeEducationRow[];
        TopSkillList?: EmployeeTopSkillRow[];
        ParentList?: EmployeeParentRow[];
        ChildrenList?: EmployeeChildrenRow[];
        JobDescriptionList?: EmployeeJobDescriptionRow[];
        KpiList?: EmployeeKpiRow[];
        OkrObjectiveList?: EmployeeOkrObjectiveRow[];
        OkrResultList?: EmployeeOkrResultRow[];
        SystemUserId?: number;
        SystemUsername?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.Employee";
        const lookupKey = "Payrolls.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            EmployeeNumber = "EmployeeNumber",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Picture = "Picture",
            GradeId = "GradeId",
            BasicSalary = "BasicSalary",
            DesignationId = "DesignationId",
            DepartmentId = "DepartmentId",
            BankAccountForPayroll = "BankAccountForPayroll",
            BankNameForPayroll = "BankNameForPayroll",
            DateOfBirth = "DateOfBirth",
            PlaceOfBirth = "PlaceOfBirth",
            BiometricNumber = "BiometricNumber",
            TaxNumber = "TaxNumber",
            GenderId = "GenderId",
            GenderName = "GenderName",
            DateOfJoining = "DateOfJoining",
            BranchId = "BranchId",
            BranchName = "BranchName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            GradeName = "GradeName",
            DesignationName = "DesignationName",
            DepartmentName = "DepartmentName",
            LeaveQuota = "LeaveQuota",
            LeaveTaken = "LeaveTaken",
            LatestEducationDegree = "LatestEducationDegree",
            SpouseName = "SpouseName",
            SpouseDateOfBirth = "SpouseDateOfBirth",
            SpouseProfession = "SpouseProfession",
            SpouseStreet = "SpouseStreet",
            SpouseCity = "SpouseCity",
            SpouseState = "SpouseState",
            SpouseZipCode = "SpouseZipCode",
            SpousePhone = "SpousePhone",
            SpouseEmail = "SpouseEmail",
            IncomeList = "IncomeList",
            DeductionList = "DeductionList",
            DocumentList = "DocumentList",
            ExperienceList = "ExperienceList",
            EducationList = "EducationList",
            TopSkillList = "TopSkillList",
            ParentList = "ParentList",
            ChildrenList = "ChildrenList",
            JobDescriptionList = "JobDescriptionList",
            KpiList = "KpiList",
            OkrObjectiveList = "OkrObjectiveList",
            OkrResultList = "OkrResultList",
            SystemUserId = "SystemUserId",
            SystemUsername = "SystemUsername",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeService {
        const baseUrl = "Payrolls/Employee";
        function Create(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/Employee/Create",
            Update = "Payrolls/Employee/Update",
            Delete = "Payrolls/Employee/Delete",
            Retrieve = "Payrolls/Employee/Retrieve",
            List = "Payrolls/Employee/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeTopSkillColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeTopSkillForm {
        SkillName: Serenity.StringEditor;
        ProficiencyScore: Serenity.IntegerEditor;
    }
    class EmployeeTopSkillForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface EmployeeTopSkillRow {
        Id?: number;
        EmployeeId?: number;
        SkillName?: string;
        ProficiencyScore?: number;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeeTopSkillRow {
        const idProperty = "Id";
        const nameProperty = "SkillName";
        const localTextPrefix = "Payrolls.EmployeeTopSkill";
        const lookupKey = "Payrolls.EmployeeTopSkill";
        function getLookup(): Q.Lookup<EmployeeTopSkillRow>;
        const deletePermission = "Payrolls:Employee";
        const insertPermission = "Payrolls:Employee";
        const readPermission = "Payrolls:Employee";
        const updatePermission = "Payrolls:Employee";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            SkillName = "SkillName",
            ProficiencyScore = "ProficiencyScore",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace EmployeeTopSkillService {
        const baseUrl = "Payrolls/EmployeeTopSkill";
        function Create(request: Serenity.SaveRequest<EmployeeTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/EmployeeTopSkill/Create",
            Update = "Payrolls/EmployeeTopSkill/Update",
            Delete = "Payrolls/EmployeeTopSkill/Delete",
            Retrieve = "Payrolls/EmployeeTopSkill/Retrieve",
            List = "Payrolls/EmployeeTopSkill/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class GradeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface GradeCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Payrolls {
    interface GradeCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface GradeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        CurrencyName: Serenity.StringEditor;
        BasicSalary: Serenity.DecimalEditor;
    }
    class GradeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface GradeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        BasicSalary?: number;
        TenantId?: number;
        TenantName?: string;
        CurrencyName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace GradeRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.Grade";
        const lookupKey = "Payrolls.Grade";
        function getLookup(): Q.Lookup<GradeRow>;
        const deletePermission = "Payrolls:Grade";
        const insertPermission = "Payrolls:Grade";
        const readPermission = "Payrolls:Grade";
        const updatePermission = "Payrolls:Grade";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            BasicSalary = "BasicSalary",
            TenantId = "TenantId",
            TenantName = "TenantName",
            CurrencyName = "CurrencyName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace GradeService {
        const baseUrl = "Payrolls/Grade";
        function Create(request: Serenity.SaveRequest<GradeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GradeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GradeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GradeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Currency(request: GradeCurrencyRequest, onSuccess?: (response: GradeCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/Grade/Create",
            Update = "Payrolls/Grade/Update",
            Delete = "Payrolls/Grade/Delete",
            Retrieve = "Payrolls/Grade/Retrieve",
            List = "Payrolls/Grade/List",
            Currency = "Payrolls/Grade/Currency"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class IncomeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface IncomeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class IncomeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface IncomeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace IncomeRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.Income";
        const lookupKey = "Payrolls.Income";
        function getLookup(): Q.Lookup<IncomeRow>;
        const deletePermission = "Payrolls:Income";
        const insertPermission = "Payrolls:Income";
        const readPermission = "Payrolls:Income";
        const updatePermission = "Payrolls:Income";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace IncomeService {
        const baseUrl = "Payrolls/Income";
        function Create(request: Serenity.SaveRequest<IncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<IncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<IncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<IncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/Income/Create",
            Update = "Payrolls/Income/Update",
            Delete = "Payrolls/Income/Delete",
            Retrieve = "Payrolls/Income/Retrieve",
            List = "Payrolls/Income/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    enum LatestEducationDegree {
        HighSchool = 1,
        Diploma = 2,
        Bachelor = 3,
        Master = 4,
        Doctor = 5
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailDeductionColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollDetailDeductionForm {
        DeductionId: Serenity.LookupEditor;
        ShortNote: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }
    class PayrollDetailDeductionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollDetailDeductionRow {
        Id?: number;
        PayrollDetailId?: number;
        DeductionId?: number;
        ShortNote?: string;
        Amount?: number;
        DeductionName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PayrollDetailDeductionRow {
        const idProperty = "Id";
        const nameProperty = "DeductionName";
        const localTextPrefix = "Payrolls.PayrollDetailDeduction";
        const lookupKey = "Payrolls.PayrollDetailDeduction";
        function getLookup(): Q.Lookup<PayrollDetailDeductionRow>;
        const deletePermission = "Payrolls:Payroll";
        const insertPermission = "Payrolls:Payroll";
        const readPermission = "Payrolls:Payroll";
        const updatePermission = "Payrolls:Payroll";
        const enum Fields {
            Id = "Id",
            PayrollDetailId = "PayrollDetailId",
            DeductionId = "DeductionId",
            ShortNote = "ShortNote",
            Amount = "Amount",
            DeductionName = "DeductionName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace PayrollDetailDeductionService {
        const baseUrl = "Payrolls/PayrollDetailDeduction";
        function Create(request: Serenity.SaveRequest<PayrollDetailDeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PayrollDetailDeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollDetailDeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollDetailDeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/PayrollDetailDeduction/Create",
            Update = "Payrolls/PayrollDetailDeduction/Update",
            Delete = "Payrolls/PayrollDetailDeduction/Delete",
            Retrieve = "Payrolls/PayrollDetailDeduction/Retrieve",
            List = "Payrolls/PayrollDetailDeduction/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollDetailForm {
        Id: Serenity.IntegerEditor;
        EmployeeId: Serenity.LookupEditor;
        BankAccount: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        IncomeList: PayrollDetailIncomeEditor;
        DeductionList: PayrollDetailDeductionEditor;
        BasicSalary: Serenity.DecimalEditor;
        TotalIncome: Serenity.DecimalEditor;
        TotalDeduction: Serenity.DecimalEditor;
        TakeHomePay: Serenity.DecimalEditor;
    }
    class PayrollDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailIncomeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollDetailIncomeForm {
        IncomeId: Serenity.LookupEditor;
        ShortNote: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }
    class PayrollDetailIncomeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollDetailIncomeRow {
        Id?: number;
        PayrollDetailId?: number;
        IncomeId?: number;
        ShortNote?: string;
        Amount?: number;
        IncomeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PayrollDetailIncomeRow {
        const idProperty = "Id";
        const nameProperty = "IncomeName";
        const localTextPrefix = "Payrolls.PayrollDetailIncome";
        const lookupKey = "Payrolls.PayrollDetailIncome";
        function getLookup(): Q.Lookup<PayrollDetailIncomeRow>;
        const deletePermission = "Payrolls:Payroll";
        const insertPermission = "Payrolls:Payroll";
        const readPermission = "Payrolls:Payroll";
        const updatePermission = "Payrolls:Payroll";
        const enum Fields {
            Id = "Id",
            PayrollDetailId = "PayrollDetailId",
            IncomeId = "IncomeId",
            ShortNote = "ShortNote",
            Amount = "Amount",
            IncomeName = "IncomeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace PayrollDetailIncomeService {
        const baseUrl = "Payrolls/PayrollDetailIncome";
        function Create(request: Serenity.SaveRequest<PayrollDetailIncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PayrollDetailIncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollDetailIncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollDetailIncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/PayrollDetailIncome/Create",
            Update = "Payrolls/PayrollDetailIncome/Update",
            Delete = "Payrolls/PayrollDetailIncome/Delete",
            Retrieve = "Payrolls/PayrollDetailIncome/Retrieve",
            List = "Payrolls/PayrollDetailIncome/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollDetailRow {
        Id?: number;
        PayrollId?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        BankAccount?: string;
        BankName?: string;
        BasicSalary?: number;
        TotalIncome?: number;
        TotalDeduction?: number;
        TakeHomePay?: number;
        TenantId?: number;
        TenantName?: string;
        IncomeList?: PayrollDetailIncomeRow[];
        DeductionList?: PayrollDetailDeductionRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PayrollDetailRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "Payrolls.PayrollDetail";
        const lookupKey = "Payrolls.PayrollDetail";
        function getLookup(): Q.Lookup<PayrollDetailRow>;
        const deletePermission = "Payrolls:Payroll";
        const insertPermission = "Payrolls:Payroll";
        const readPermission = "Payrolls:Payroll";
        const updatePermission = "Payrolls:Payroll";
        const enum Fields {
            Id = "Id",
            PayrollId = "PayrollId",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BankAccount = "BankAccount",
            BankName = "BankName",
            BasicSalary = "BasicSalary",
            TotalIncome = "TotalIncome",
            TotalDeduction = "TotalDeduction",
            TakeHomePay = "TakeHomePay",
            TenantId = "TenantId",
            TenantName = "TenantName",
            IncomeList = "IncomeList",
            DeductionList = "DeductionList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace PayrollDetailService {
        const baseUrl = "Payrolls/PayrollDetail";
        function Create(request: Serenity.SaveRequest<PayrollDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PayrollDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/PayrollDetail/Create",
            Update = "Payrolls/PayrollDetail/Update",
            Delete = "Payrolls/PayrollDetail/Delete",
            Retrieve = "Payrolls/PayrollDetail/Retrieve",
            List = "Payrolls/PayrollDetail/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PaymentDate: Serenity.DateEditor;
        AutoGeneratePayrollDetail: Serenity.BooleanEditor;
        ItemList: PayrollDetailEditor;
        CurrencyName: Serenity.StringEditor;
        TotalBasicSalary: Serenity.DecimalEditor;
        TotalIncome: Serenity.DecimalEditor;
        TotalDeduction: Serenity.DecimalEditor;
        TotalTakeHomePay: Serenity.DecimalEditor;
        TotalPaymentAmount: Serenity.DecimalEditor;
    }
    class PayrollForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface PayrollRow {
        Id?: number;
        Number?: string;
        Description?: string;
        PaymentDate?: string;
        AutoGeneratePayrollDetail?: boolean;
        TotalBasicSalary?: number;
        TotalIncome?: number;
        TotalDeduction?: number;
        TotalTakeHomePay?: number;
        TotalPaymentAmount?: number;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: PayrollDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PayrollRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Payrolls.Payroll";
        const lookupKey = "Payrolls.Payroll";
        function getLookup(): Q.Lookup<PayrollRow>;
        const deletePermission = "Payrolls:Payroll";
        const insertPermission = "Payrolls:Payroll";
        const readPermission = "Payrolls:Payroll";
        const updatePermission = "Payrolls:Payroll";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            PaymentDate = "PaymentDate",
            AutoGeneratePayrollDetail = "AutoGeneratePayrollDetail",
            TotalBasicSalary = "TotalBasicSalary",
            TotalIncome = "TotalIncome",
            TotalDeduction = "TotalDeduction",
            TotalTakeHomePay = "TotalTakeHomePay",
            TotalPaymentAmount = "TotalPaymentAmount",
            CurrencyName = "CurrencyName",
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
declare namespace Indotalent.Payrolls {
    namespace PayrollService {
        const baseUrl = "Payrolls/Payroll";
        function Create(request: Serenity.SaveRequest<PayrollRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PayrollRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Currency(request: PayrollCurrencyRequest, onSuccess?: (response: PayrollCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/Payroll/Create",
            Update = "Payrolls/Payroll/Update",
            Delete = "Payrolls/Payroll/Delete",
            Retrieve = "Payrolls/Payroll/Retrieve",
            List = "Payrolls/Payroll/List",
            Currency = "Payrolls/Payroll/Currency"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class SalaryTaxSlabColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface SalaryTaxSlabForm {
        From: Serenity.DecimalEditor;
        To: Serenity.DecimalEditor;
        ExemptedAmount: Serenity.DecimalEditor;
        Rate: Serenity.DecimalEditor;
    }
    class SalaryTaxSlabForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface SalaryTaxSlabRow {
        TaxSlabId?: number;
        SlabRange?: string;
        From?: number;
        To?: number;
        ExemptedAmount?: number;
        Rate?: number;
    }
    namespace SalaryTaxSlabRow {
        const idProperty = "TaxSlabId";
        const nameProperty = "SlabRange";
        const localTextPrefix = "Payrolls.SalaryTaxSlab";
        const deletePermission = "Payrolls:SalaryTaxSlab";
        const insertPermission = "Payrolls:SalaryTaxSlab";
        const readPermission = "Payrolls:SalaryTaxSlab";
        const updatePermission = "Payrolls:SalaryTaxSlab";
        const enum Fields {
            TaxSlabId = "TaxSlabId",
            SlabRange = "SlabRange",
            From = "From",
            To = "To",
            ExemptedAmount = "ExemptedAmount",
            Rate = "Rate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace SalaryTaxSlabService {
        const baseUrl = "Payrolls/SalaryTaxSlab";
        function Create(request: Serenity.SaveRequest<SalaryTaxSlabRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalaryTaxSlabRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalaryTaxSlabRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalaryTaxSlabRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/SalaryTaxSlab/Create",
            Update = "Payrolls/SalaryTaxSlab/Update",
            Delete = "Payrolls/SalaryTaxSlab/Delete",
            Retrieve = "Payrolls/SalaryTaxSlab/Retrieve",
            List = "Payrolls/SalaryTaxSlab/List"
        }
    }
}
declare namespace Indotalent.Payrolls {
    class ThresholdColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Payrolls {
    interface ThresholdForm {
        Name: Serenity.StringEditor;
        Value: Serenity.DecimalEditor;
        IsActive: Serenity.BooleanEditor;
    }
    class ThresholdForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Payrolls {
    interface ThresholdRow {
        Id?: number;
        Name?: string;
        Value?: number;
        IsActive?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ThresholdRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Payrolls.Threshold";
        const lookupKey = "Payrolls.Threshold";
        function getLookup(): Q.Lookup<ThresholdRow>;
        const deletePermission = "Payrolls:Threshold";
        const insertPermission = "Payrolls:Threshold";
        const readPermission = "Payrolls:Threshold";
        const updatePermission = "Payrolls:Threshold";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Value = "Value",
            IsActive = "IsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Payrolls {
    namespace ThresholdService {
        const baseUrl = "Payrolls/Threshold";
        function Create(request: Serenity.SaveRequest<ThresholdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ThresholdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ThresholdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ThresholdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Payrolls/Threshold/Create",
            Update = "Payrolls/Threshold/Update",
            Delete = "Payrolls/Threshold/Delete",
            Retrieve = "Payrolls/Threshold/Retrieve",
            List = "Payrolls/Threshold/List"
        }
    }
}
declare namespace Indotalent.Performance {
    class AppraisalColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    class AppraisalDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    interface AppraisalDetailForm {
        EvaluationId: Serenity.LookupEditor;
        EvaluationNumber: Serenity.StringEditor;
        EvaluationGroup: Serenity.StringEditor;
        EvaluationIndicator: Serenity.TextAreaEditor;
        EvaluationResult: Serenity.EnumEditor;
    }
    class AppraisalDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    interface AppraisalDetailRow {
        Id?: number;
        AppraisalId?: number;
        AppraisalNumber?: string;
        EvaluationResult?: EvaluationResult;
        EvaluationId?: number;
        EvaluationNumber?: string;
        EvaluationGroup?: string;
        EvaluationIndicator?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace AppraisalDetailRow {
        const idProperty = "Id";
        const nameProperty = "EvaluationNumber";
        const localTextPrefix = "Performance.AppraisalDetail";
        const lookupKey = "Performance.AppraisalDetail";
        function getLookup(): Q.Lookup<AppraisalDetailRow>;
        const deletePermission = "Performance:Appraisal";
        const insertPermission = "Performance:Appraisal";
        const readPermission = "Performance:Appraisal";
        const updatePermission = "Performance:Appraisal";
        const enum Fields {
            Id = "Id",
            AppraisalId = "AppraisalId",
            AppraisalNumber = "AppraisalNumber",
            EvaluationResult = "EvaluationResult",
            EvaluationId = "EvaluationId",
            EvaluationNumber = "EvaluationNumber",
            EvaluationGroup = "EvaluationGroup",
            EvaluationIndicator = "EvaluationIndicator",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace AppraisalDetailService {
        const baseUrl = "Performance/AppraisalDetail";
        function Create(request: Serenity.SaveRequest<AppraisalDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AppraisalDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AppraisalDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AppraisalDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/AppraisalDetail/Create",
            Update = "Performance/AppraisalDetail/Update",
            Delete = "Performance/AppraisalDetail/Delete",
            Retrieve = "Performance/AppraisalDetail/Retrieve",
            List = "Performance/AppraisalDetail/List"
        }
    }
}
declare namespace Indotalent.Performance {
    interface AppraisalForm {
        Number: Serenity.StringEditor;
        EmployeeId: Serenity.LookupEditor;
        EvaluatorId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        CurrentAppraisalDate: Serenity.DateEditor;
        LastAppraisalDate: Serenity.DateEditor;
        AppraisalDetailList: AppraisalDetailEditor;
        Comment: Serenity.TextAreaEditor;
        Recomendation: Serenity.TextAreaEditor;
    }
    class AppraisalForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    interface AppraisalRow {
        Id?: number;
        Number?: string;
        Comment?: string;
        Recomendation?: string;
        Description?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        LastAppraisalDate?: string;
        CurrentAppraisalDate?: string;
        EvaluatorId?: number;
        EvaluatorName?: string;
        TenantId?: number;
        TenantName?: string;
        AppraisalDetailList?: AppraisalDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace AppraisalRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Performance.Appraisal";
        const lookupKey = "Performance.Appraisal";
        function getLookup(): Q.Lookup<AppraisalRow>;
        const deletePermission = "Performance:Appraisal";
        const insertPermission = "Performance:Appraisal";
        const readPermission = "Performance:Appraisal";
        const updatePermission = "Performance:Appraisal";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Comment = "Comment",
            Recomendation = "Recomendation",
            Description = "Description",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            LastAppraisalDate = "LastAppraisalDate",
            CurrentAppraisalDate = "CurrentAppraisalDate",
            EvaluatorId = "EvaluatorId",
            EvaluatorName = "EvaluatorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            AppraisalDetailList = "AppraisalDetailList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace AppraisalService {
        const baseUrl = "Performance/Appraisal";
        function Create(request: Serenity.SaveRequest<AppraisalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AppraisalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AppraisalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AppraisalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/Appraisal/Create",
            Update = "Performance/Appraisal/Update",
            Delete = "Performance/Appraisal/Delete",
            Retrieve = "Performance/Appraisal/Retrieve",
            List = "Performance/Appraisal/List"
        }
    }
}
declare namespace Indotalent.Performance {
    class EvaluationColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    interface EvaluationForm {
        Number: Serenity.StringEditor;
        Group: Serenity.StringEditor;
        Indicator: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
    }
    class EvaluationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    enum EvaluationResult {
        Satisfactory = 1,
        Adequate = 2,
        NeedsImprovement = 3
    }
}
declare namespace Indotalent.Performance {
    interface EvaluationRow {
        Id?: number;
        Name?: string;
        Number?: string;
        Group?: string;
        Indicator?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EvaluationRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Performance.Evaluation";
        const lookupKey = "Performance.Evaluation";
        function getLookup(): Q.Lookup<EvaluationRow>;
        const deletePermission = "Performance:Evaluation";
        const insertPermission = "Performance:Evaluation";
        const readPermission = "Performance:Evaluation";
        const updatePermission = "Performance:Evaluation";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Number = "Number",
            Group = "Group",
            Indicator = "Indicator",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace EvaluationService {
        const baseUrl = "Performance/Evaluation";
        function Create(request: Serenity.SaveRequest<EvaluationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EvaluationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EvaluationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EvaluationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/Evaluation/Create",
            Update = "Performance/Evaluation/Update",
            Delete = "Performance/Evaluation/Delete",
            Retrieve = "Performance/Evaluation/Retrieve",
            List = "Performance/Evaluation/List"
        }
    }
}
declare namespace Indotalent.Performance {
    class PromotionColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    class PromotionCompetencyColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    interface PromotionCompetencyForm {
        ShortNote: Serenity.StringEditor;
    }
    class PromotionCompetencyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    interface PromotionCompetencyRow {
        Id?: number;
        PromotionId?: number;
        PromotionNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PromotionCompetencyRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Performance.PromotionCompetency";
        const lookupKey = "Performance.PromotionCompetency";
        function getLookup(): Q.Lookup<PromotionCompetencyRow>;
        const deletePermission = "Performance:Promotion";
        const insertPermission = "Performance:Promotion";
        const readPermission = "Performance:Promotion";
        const updatePermission = "Performance:Promotion";
        const enum Fields {
            Id = "Id",
            PromotionId = "PromotionId",
            PromotionNumber = "PromotionNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace PromotionCompetencyService {
        const baseUrl = "Performance/PromotionCompetency";
        function Create(request: Serenity.SaveRequest<PromotionCompetencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PromotionCompetencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PromotionCompetencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PromotionCompetencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/PromotionCompetency/Create",
            Update = "Performance/PromotionCompetency/Update",
            Delete = "Performance/PromotionCompetency/Delete",
            Retrieve = "Performance/PromotionCompetency/Retrieve",
            List = "Performance/PromotionCompetency/List"
        }
    }
}
declare namespace Indotalent.Performance {
    interface PromotionForm {
        Number: Serenity.StringEditor;
        EmployeeId: Serenity.LookupEditor;
        PromotorId: Serenity.LookupEditor;
        EffectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        CurrentBasicSalary: Serenity.DecimalEditor;
        CurrentBranchId: Serenity.LookupEditor;
        CurrentDepartmentId: Serenity.LookupEditor;
        CurrentDesignationId: Serenity.LookupEditor;
        CurrentSupervisorId: Serenity.LookupEditor;
        NewBasicSalary: Serenity.DecimalEditor;
        NewBranchId: Serenity.LookupEditor;
        NewDepartmentId: Serenity.LookupEditor;
        NewDesignationId: Serenity.LookupEditor;
        NewSupervisorId: Serenity.LookupEditor;
        PromotionReasonList: PromotionReasonEditor;
        PromotionCompetencyList: PromotionCompetencyEditor;
    }
    class PromotionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    class PromotionReasonColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    interface PromotionReasonForm {
        ShortNote: Serenity.StringEditor;
    }
    class PromotionReasonForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    interface PromotionReasonRow {
        Id?: number;
        PromotionId?: number;
        PromotionNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PromotionReasonRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Performance.PromotionReason";
        const lookupKey = "Performance.PromotionReason";
        function getLookup(): Q.Lookup<PromotionReasonRow>;
        const deletePermission = "Performance:Promotion";
        const insertPermission = "Performance:Promotion";
        const readPermission = "Performance:Promotion";
        const updatePermission = "Performance:Promotion";
        const enum Fields {
            Id = "Id",
            PromotionId = "PromotionId",
            PromotionNumber = "PromotionNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace PromotionReasonService {
        const baseUrl = "Performance/PromotionReason";
        function Create(request: Serenity.SaveRequest<PromotionReasonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PromotionReasonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PromotionReasonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PromotionReasonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/PromotionReason/Create",
            Update = "Performance/PromotionReason/Update",
            Delete = "Performance/PromotionReason/Delete",
            Retrieve = "Performance/PromotionReason/Retrieve",
            List = "Performance/PromotionReason/List"
        }
    }
}
declare namespace Indotalent.Performance {
    interface PromotionRow {
        Id?: number;
        Number?: string;
        Description?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        EffectiveDate?: string;
        PromotorId?: number;
        PromotorName?: string;
        CurrentBasicSalary?: number;
        NewBasicSalary?: number;
        CurrentBranchId?: number;
        CurrentBranchName?: string;
        NewBranchId?: number;
        NewBranchName?: string;
        CurrentDepartmentId?: number;
        CurrentDepartmentName?: string;
        NewDepartmentId?: number;
        NewDepartmentName?: string;
        CurrentDesignationId?: number;
        CurrentDesignationName?: string;
        NewDesignationId?: number;
        NewDesignationName?: string;
        CurrentSupervisorId?: number;
        CurrentSupervisorName?: string;
        NewSupervisorId?: number;
        NewSupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        PromotionReasonList?: PromotionReasonRow[];
        PromotionCompetencyList?: PromotionCompetencyRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PromotionRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Performance.Promotion";
        const lookupKey = "Performance.Promotion";
        function getLookup(): Q.Lookup<PromotionRow>;
        const deletePermission = "Performance:Promotion";
        const insertPermission = "Performance:Promotion";
        const readPermission = "Performance:Promotion";
        const updatePermission = "Performance:Promotion";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EffectiveDate = "EffectiveDate",
            PromotorId = "PromotorId",
            PromotorName = "PromotorName",
            CurrentBasicSalary = "CurrentBasicSalary",
            NewBasicSalary = "NewBasicSalary",
            CurrentBranchId = "CurrentBranchId",
            CurrentBranchName = "CurrentBranchName",
            NewBranchId = "NewBranchId",
            NewBranchName = "NewBranchName",
            CurrentDepartmentId = "CurrentDepartmentId",
            CurrentDepartmentName = "CurrentDepartmentName",
            NewDepartmentId = "NewDepartmentId",
            NewDepartmentName = "NewDepartmentName",
            CurrentDesignationId = "CurrentDesignationId",
            CurrentDesignationName = "CurrentDesignationName",
            NewDesignationId = "NewDesignationId",
            NewDesignationName = "NewDesignationName",
            CurrentSupervisorId = "CurrentSupervisorId",
            CurrentSupervisorName = "CurrentSupervisorName",
            NewSupervisorId = "NewSupervisorId",
            NewSupervisorName = "NewSupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            PromotionReasonList = "PromotionReasonList",
            PromotionCompetencyList = "PromotionCompetencyList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace PromotionService {
        const baseUrl = "Performance/Promotion";
        function Create(request: Serenity.SaveRequest<PromotionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PromotionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PromotionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PromotionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/Promotion/Create",
            Update = "Performance/Promotion/Update",
            Delete = "Performance/Promotion/Delete",
            Retrieve = "Performance/Promotion/Retrieve",
            List = "Performance/Promotion/List"
        }
    }
}
declare namespace Indotalent.Performance {
    class TransferColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    class TransferCompetencyColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    interface TransferCompetencyForm {
        ShortNote: Serenity.StringEditor;
    }
    class TransferCompetencyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    interface TransferCompetencyRow {
        Id?: number;
        TransferId?: number;
        TransferNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TransferCompetencyRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Performance.TransferCompetency";
        const lookupKey = "Performance.TransferCompetency";
        function getLookup(): Q.Lookup<TransferCompetencyRow>;
        const deletePermission = "Performance:Transfer";
        const insertPermission = "Performance:Transfer";
        const readPermission = "Performance:Transfer";
        const updatePermission = "Performance:Transfer";
        const enum Fields {
            Id = "Id",
            TransferId = "TransferId",
            TransferNumber = "TransferNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace TransferCompetencyService {
        const baseUrl = "Performance/TransferCompetency";
        function Create(request: Serenity.SaveRequest<TransferCompetencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransferCompetencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferCompetencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferCompetencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/TransferCompetency/Create",
            Update = "Performance/TransferCompetency/Update",
            Delete = "Performance/TransferCompetency/Delete",
            Retrieve = "Performance/TransferCompetency/Retrieve",
            List = "Performance/TransferCompetency/List"
        }
    }
}
declare namespace Indotalent.Performance {
    interface TransferForm {
        Number: Serenity.StringEditor;
        EmployeeId: Serenity.LookupEditor;
        PromotorId: Serenity.LookupEditor;
        EffectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        CurrentBasicSalary: Serenity.DecimalEditor;
        CurrentBranchId: Serenity.LookupEditor;
        CurrentDepartmentId: Serenity.LookupEditor;
        CurrentDesignationId: Serenity.LookupEditor;
        CurrentSupervisorId: Serenity.LookupEditor;
        NewBasicSalary: Serenity.DecimalEditor;
        NewBranchId: Serenity.LookupEditor;
        NewDepartmentId: Serenity.LookupEditor;
        NewDesignationId: Serenity.LookupEditor;
        NewSupervisorId: Serenity.LookupEditor;
        TransferReasonList: TransferReasonEditor;
        TransferCompetencyList: TransferCompetencyEditor;
    }
    class TransferForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    class TransferReasonColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Performance {
    interface TransferReasonForm {
        ShortNote: Serenity.StringEditor;
    }
    class TransferReasonForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Performance {
    interface TransferReasonRow {
        Id?: number;
        TransferId?: number;
        TransferNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TransferReasonRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Performance.TransferReason";
        const lookupKey = "Performance.TransferReason";
        function getLookup(): Q.Lookup<TransferReasonRow>;
        const deletePermission = "Performance:Transfer";
        const insertPermission = "Performance:Transfer";
        const readPermission = "Performance:Transfer";
        const updatePermission = "Performance:Transfer";
        const enum Fields {
            Id = "Id",
            TransferId = "TransferId",
            TransferNumber = "TransferNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace TransferReasonService {
        const baseUrl = "Performance/TransferReason";
        function Create(request: Serenity.SaveRequest<TransferReasonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransferReasonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferReasonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferReasonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/TransferReason/Create",
            Update = "Performance/TransferReason/Update",
            Delete = "Performance/TransferReason/Delete",
            Retrieve = "Performance/TransferReason/Retrieve",
            List = "Performance/TransferReason/List"
        }
    }
}
declare namespace Indotalent.Performance {
    interface TransferRow {
        Id?: number;
        Number?: string;
        Description?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        EffectiveDate?: string;
        PromotorId?: number;
        PromotorName?: string;
        CurrentBasicSalary?: number;
        NewBasicSalary?: number;
        CurrentBranchId?: number;
        CurrentBranchName?: string;
        NewBranchId?: number;
        NewBranchName?: string;
        CurrentDepartmentId?: number;
        CurrentDepartmentName?: string;
        NewDepartmentId?: number;
        NewDepartmentName?: string;
        CurrentDesignationId?: number;
        CurrentDesignationName?: string;
        NewDesignationId?: number;
        NewDesignationName?: string;
        CurrentSupervisorId?: number;
        CurrentSupervisorName?: string;
        NewSupervisorId?: number;
        NewSupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        TransferReasonList?: TransferReasonRow[];
        TransferCompetencyList?: TransferCompetencyRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TransferRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Performance.Transfer";
        const lookupKey = "Performance.Transfer";
        function getLookup(): Q.Lookup<TransferRow>;
        const deletePermission = "Performance:Transfer";
        const insertPermission = "Performance:Transfer";
        const readPermission = "Performance:Transfer";
        const updatePermission = "Performance:Transfer";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EffectiveDate = "EffectiveDate",
            PromotorId = "PromotorId",
            PromotorName = "PromotorName",
            CurrentBasicSalary = "CurrentBasicSalary",
            NewBasicSalary = "NewBasicSalary",
            CurrentBranchId = "CurrentBranchId",
            CurrentBranchName = "CurrentBranchName",
            NewBranchId = "NewBranchId",
            NewBranchName = "NewBranchName",
            CurrentDepartmentId = "CurrentDepartmentId",
            CurrentDepartmentName = "CurrentDepartmentName",
            NewDepartmentId = "NewDepartmentId",
            NewDepartmentName = "NewDepartmentName",
            CurrentDesignationId = "CurrentDesignationId",
            CurrentDesignationName = "CurrentDesignationName",
            NewDesignationId = "NewDesignationId",
            NewDesignationName = "NewDesignationName",
            CurrentSupervisorId = "CurrentSupervisorId",
            CurrentSupervisorName = "CurrentSupervisorName",
            NewSupervisorId = "NewSupervisorId",
            NewSupervisorName = "NewSupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TransferReasonList = "TransferReasonList",
            TransferCompetencyList = "TransferCompetencyList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Performance {
    namespace TransferService {
        const baseUrl = "Performance/Transfer";
        function Create(request: Serenity.SaveRequest<TransferRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransferRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Performance/Transfer/Create",
            Update = "Performance/Transfer/Update",
            Delete = "Performance/Transfer/Delete",
            Retrieve = "Performance/Transfer/Retrieve",
            List = "Performance/Transfer/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantEducationColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantEducationForm {
        SchoolName: Serenity.StringEditor;
        StudyMajor: Serenity.StringEditor;
        Grade: Serenity.StringEditor;
        ShortNote: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
    }
    class ApplicantEducationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantEducationRow {
        Id?: number;
        ApplicantId?: number;
        SchoolName?: string;
        StudyMajor?: string;
        Grade?: string;
        ShortNote?: string;
        StartDate?: string;
        EndDate?: string;
        ApplicantName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ApplicantEducationRow {
        const idProperty = "Id";
        const nameProperty = "SchoolName";
        const localTextPrefix = "Recruitment.ApplicantEducation";
        const lookupKey = "Recruitment.ApplicantEducation";
        function getLookup(): Q.Lookup<ApplicantEducationRow>;
        const deletePermission = "Recruitment:Applicant";
        const insertPermission = "Recruitment:Applicant";
        const readPermission = "Recruitment:Applicant";
        const updatePermission = "Recruitment:Applicant";
        const enum Fields {
            Id = "Id",
            ApplicantId = "ApplicantId",
            SchoolName = "SchoolName",
            StudyMajor = "StudyMajor",
            Grade = "Grade",
            ShortNote = "ShortNote",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ApplicantName = "ApplicantName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace ApplicantEducationService {
        const baseUrl = "Recruitment/ApplicantEducation";
        function Create(request: Serenity.SaveRequest<ApplicantEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ApplicantEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApplicantEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApplicantEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/ApplicantEducation/Create",
            Update = "Recruitment/ApplicantEducation/Update",
            Delete = "Recruitment/ApplicantEducation/Delete",
            Retrieve = "Recruitment/ApplicantEducation/Retrieve",
            List = "Recruitment/ApplicantEducation/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantExperienceColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantExperienceForm {
        CompanyName: Serenity.StringEditor;
        Position: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Salary: Serenity.DecimalEditor;
    }
    class ApplicantExperienceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantExperienceRow {
        Id?: number;
        ApplicantId?: number;
        CompanyName?: string;
        Position?: string;
        StartDate?: string;
        EndDate?: string;
        Salary?: number;
        ApplicantName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ApplicantExperienceRow {
        const idProperty = "Id";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Recruitment.ApplicantExperience";
        const lookupKey = "Recruitment.ApplicantExperience";
        function getLookup(): Q.Lookup<ApplicantExperienceRow>;
        const deletePermission = "Recruitment:Applicant";
        const insertPermission = "Recruitment:Applicant";
        const readPermission = "Recruitment:Applicant";
        const updatePermission = "Recruitment:Applicant";
        const enum Fields {
            Id = "Id",
            ApplicantId = "ApplicantId",
            CompanyName = "CompanyName",
            Position = "Position",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Salary = "Salary",
            ApplicantName = "ApplicantName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace ApplicantExperienceService {
        const baseUrl = "Recruitment/ApplicantExperience";
        function Create(request: Serenity.SaveRequest<ApplicantExperienceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ApplicantExperienceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApplicantExperienceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApplicantExperienceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/ApplicantExperience/Create",
            Update = "Recruitment/ApplicantExperience/Update",
            Delete = "Recruitment/ApplicantExperience/Delete",
            Retrieve = "Recruitment/ApplicantExperience/Retrieve",
            List = "Recruitment/ApplicantExperience/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantForm {
        Number: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        PlaceOfBirth: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Picture: Serenity.ImageUploadEditor;
        VacancyId: Serenity.LookupEditor;
        JobTitle: Serenity.StringEditor;
        HiringManagerId: Serenity.LookupEditor;
        ExperienceList: ApplicantExperienceEditor;
        EducationList: ApplicantEducationEditor;
        SkillList: ApplicantTopSkillEditor;
    }
    class ApplicantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantRow {
        Id?: number;
        Name?: string;
        Number?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Picture?: string;
        DateOfBirth?: string;
        PlaceOfBirth?: string;
        GenderId?: number;
        GenderName?: string;
        VacancyId?: number;
        VacancyNumber?: string;
        JobTitle?: string;
        HiringManagerId?: number;
        HiringManagerName?: string;
        TenantId?: number;
        TenantName?: string;
        ExperienceList?: ApplicantExperienceRow[];
        EducationList?: ApplicantEducationRow[];
        SkillList?: ApplicantTopSkillRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ApplicantRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Recruitment.Applicant";
        const lookupKey = "Recruitment.Applicant";
        function getLookup(): Q.Lookup<ApplicantRow>;
        const deletePermission = "Recruitment:Applicant";
        const insertPermission = "Recruitment:Applicant";
        const readPermission = "Recruitment:Applicant";
        const updatePermission = "Recruitment:Applicant";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Number = "Number",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Picture = "Picture",
            DateOfBirth = "DateOfBirth",
            PlaceOfBirth = "PlaceOfBirth",
            GenderId = "GenderId",
            GenderName = "GenderName",
            VacancyId = "VacancyId",
            VacancyNumber = "VacancyNumber",
            JobTitle = "JobTitle",
            HiringManagerId = "HiringManagerId",
            HiringManagerName = "HiringManagerName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ExperienceList = "ExperienceList",
            EducationList = "EducationList",
            SkillList = "SkillList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace ApplicantService {
        const baseUrl = "Recruitment/Applicant";
        function Create(request: Serenity.SaveRequest<ApplicantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ApplicantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApplicantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApplicantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/Applicant/Create",
            Update = "Recruitment/Applicant/Update",
            Delete = "Recruitment/Applicant/Delete",
            Retrieve = "Recruitment/Applicant/Retrieve",
            List = "Recruitment/Applicant/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantTopSkillColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantTopSkillForm {
        SkillName: Serenity.StringEditor;
        ProficiencyScore: Serenity.IntegerEditor;
    }
    class ApplicantTopSkillForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    interface ApplicantTopSkillRow {
        Id?: number;
        ApplicantId?: number;
        SkillName?: string;
        ProficiencyScore?: number;
        ApplicantName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ApplicantTopSkillRow {
        const idProperty = "Id";
        const nameProperty = "SkillName";
        const localTextPrefix = "Recruitment.ApplicantTopSkill";
        const lookupKey = "Recruitment.ApplicantTopSkill";
        function getLookup(): Q.Lookup<ApplicantTopSkillRow>;
        const deletePermission = "Recruitment:Applicant";
        const insertPermission = "Recruitment:Applicant";
        const readPermission = "Recruitment:Applicant";
        const updatePermission = "Recruitment:Applicant";
        const enum Fields {
            Id = "Id",
            ApplicantId = "ApplicantId",
            SkillName = "SkillName",
            ProficiencyScore = "ProficiencyScore",
            ApplicantName = "ApplicantName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace ApplicantTopSkillService {
        const baseUrl = "Recruitment/ApplicantTopSkill";
        function Create(request: Serenity.SaveRequest<ApplicantTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ApplicantTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApplicantTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApplicantTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/ApplicantTopSkill/Create",
            Update = "Recruitment/ApplicantTopSkill/Update",
            Delete = "Recruitment/ApplicantTopSkill/Delete",
            Retrieve = "Recruitment/ApplicantTopSkill/Retrieve",
            List = "Recruitment/ApplicantTopSkill/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    class InterviewColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface InterviewForm {
        Number: Serenity.StringEditor;
        Room: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ApplicantId: Serenity.LookupEditor;
        VacancyId: Serenity.LookupEditor;
        JobTitle: Serenity.StringEditor;
        HiringManagerId: Serenity.LookupEditor;
        ResultList: InterviewResultEditor;
    }
    class InterviewForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    class InterviewResultColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface InterviewResultForm {
        ResultName: Serenity.StringEditor;
        ResultScore: Serenity.IntegerEditor;
    }
    class InterviewResultForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    interface InterviewResultRow {
        Id?: number;
        InterviewId?: number;
        ResultName?: string;
        ResultScore?: number;
        InterviewNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace InterviewResultRow {
        const idProperty = "Id";
        const nameProperty = "ResultName";
        const localTextPrefix = "Recruitment.InterviewResult";
        const lookupKey = "Recruitment.InterviewResult";
        function getLookup(): Q.Lookup<InterviewResultRow>;
        const deletePermission = "Recruitment:Interview";
        const insertPermission = "Recruitment:Interview";
        const readPermission = "Recruitment:Interview";
        const updatePermission = "Recruitment:Interview";
        const enum Fields {
            Id = "Id",
            InterviewId = "InterviewId",
            ResultName = "ResultName",
            ResultScore = "ResultScore",
            InterviewNumber = "InterviewNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace InterviewResultService {
        const baseUrl = "Recruitment/InterviewResult";
        function Create(request: Serenity.SaveRequest<InterviewResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InterviewResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InterviewResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InterviewResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/InterviewResult/Create",
            Update = "Recruitment/InterviewResult/Update",
            Delete = "Recruitment/InterviewResult/Delete",
            Retrieve = "Recruitment/InterviewResult/Retrieve",
            List = "Recruitment/InterviewResult/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    interface InterviewRow {
        Id?: number;
        Room?: string;
        Number?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        StartDate?: string;
        EndDate?: string;
        ApplicantId?: number;
        ApplicantName?: string;
        VacancyId?: number;
        VacancyNumber?: string;
        JobTitle?: string;
        HiringManagerId?: number;
        HiringManagerName?: string;
        TenantId?: number;
        TenantName?: string;
        ResultList?: InterviewResultRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace InterviewRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Recruitment.Interview";
        const lookupKey = "Recruitment.Interview";
        function getLookup(): Q.Lookup<InterviewRow>;
        const deletePermission = "Recruitment:Interview";
        const insertPermission = "Recruitment:Interview";
        const readPermission = "Recruitment:Interview";
        const updatePermission = "Recruitment:Interview";
        const enum Fields {
            Id = "Id",
            Room = "Room",
            Number = "Number",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ApplicantId = "ApplicantId",
            ApplicantName = "ApplicantName",
            VacancyId = "VacancyId",
            VacancyNumber = "VacancyNumber",
            JobTitle = "JobTitle",
            HiringManagerId = "HiringManagerId",
            HiringManagerName = "HiringManagerName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ResultList = "ResultList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace InterviewService {
        const baseUrl = "Recruitment/Interview";
        function Create(request: Serenity.SaveRequest<InterviewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InterviewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InterviewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InterviewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/Interview/Create",
            Update = "Recruitment/Interview/Update",
            Delete = "Recruitment/Interview/Delete",
            Retrieve = "Recruitment/Interview/Retrieve",
            List = "Recruitment/Interview/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyBenefitColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface VacancyBenefitForm {
        ShortNote: Serenity.StringEditor;
    }
    class VacancyBenefitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    interface VacancyBenefitRow {
        Id?: number;
        VacancyId?: number;
        VacancyNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace VacancyBenefitRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Recruitment.VacancyBenefit";
        const lookupKey = "Recruitment.VacancyBenefit";
        function getLookup(): Q.Lookup<VacancyBenefitRow>;
        const deletePermission = "Recruitment:Vacancy";
        const insertPermission = "Recruitment:Vacancy";
        const readPermission = "Recruitment:Vacancy";
        const updatePermission = "Recruitment:Vacancy";
        const enum Fields {
            Id = "Id",
            VacancyId = "VacancyId",
            VacancyNumber = "VacancyNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace VacancyBenefitService {
        const baseUrl = "Recruitment/VacancyBenefit";
        function Create(request: Serenity.SaveRequest<VacancyBenefitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VacancyBenefitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyBenefitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyBenefitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/VacancyBenefit/Create",
            Update = "Recruitment/VacancyBenefit/Update",
            Delete = "Recruitment/VacancyBenefit/Delete",
            Retrieve = "Recruitment/VacancyBenefit/Retrieve",
            List = "Recruitment/VacancyBenefit/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface VacancyForm {
        Number: Serenity.StringEditor;
        JobTitle: Serenity.StringEditor;
        JobDescription: Serenity.TextAreaEditor;
        OpenDate: Serenity.DateEditor;
        CloseDate: Serenity.DateEditor;
        HiringManagerId: Serenity.LookupEditor;
        HiringManagerDepartmentId: Serenity.LookupEditor;
        HiringManagerBranchId: Serenity.LookupEditor;
        VacancyRequirementList: VacancyRequirementEditor;
        VacancyBenefitList: VacancyBenefitEditor;
    }
    class VacancyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyRequirementColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Recruitment {
    interface VacancyRequirementForm {
        ShortNote: Serenity.StringEditor;
    }
    class VacancyRequirementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Recruitment {
    interface VacancyRequirementRow {
        Id?: number;
        VacancyId?: number;
        VacancyNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace VacancyRequirementRow {
        const idProperty = "Id";
        const nameProperty = "ShortNote";
        const localTextPrefix = "Recruitment.VacancyRequirement";
        const lookupKey = "Recruitment.VacancyRequirement";
        function getLookup(): Q.Lookup<VacancyRequirementRow>;
        const deletePermission = "Recruitment:Vacancy";
        const insertPermission = "Recruitment:Vacancy";
        const readPermission = "Recruitment:Vacancy";
        const updatePermission = "Recruitment:Vacancy";
        const enum Fields {
            Id = "Id",
            VacancyId = "VacancyId",
            VacancyNumber = "VacancyNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace VacancyRequirementService {
        const baseUrl = "Recruitment/VacancyRequirement";
        function Create(request: Serenity.SaveRequest<VacancyRequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VacancyRequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyRequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyRequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/VacancyRequirement/Create",
            Update = "Recruitment/VacancyRequirement/Update",
            Delete = "Recruitment/VacancyRequirement/Delete",
            Retrieve = "Recruitment/VacancyRequirement/Retrieve",
            List = "Recruitment/VacancyRequirement/List"
        }
    }
}
declare namespace Indotalent.Recruitment {
    interface VacancyRow {
        Id?: number;
        Number?: string;
        JobTitle?: string;
        JobDescription?: string;
        HiringManagerId?: number;
        HiringManagerName?: string;
        HiringManagerDepartmentId?: number;
        HiringManagerDepartmentName?: string;
        HiringManagerBranchId?: number;
        HiringManagerBranchName?: string;
        OpenDate?: string;
        CloseDate?: string;
        TenantId?: number;
        TenantName?: string;
        VacancyRequirementList?: VacancyRequirementRow[];
        VacancyBenefitList?: VacancyBenefitRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace VacancyRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Recruitment.Vacancy";
        const lookupKey = "Recruitment.Vacancy";
        function getLookup(): Q.Lookup<VacancyRow>;
        const deletePermission = "Recruitment:Vacancy";
        const insertPermission = "Recruitment:Vacancy";
        const readPermission = "Recruitment:Vacancy";
        const updatePermission = "Recruitment:Vacancy";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            JobTitle = "JobTitle",
            JobDescription = "JobDescription",
            HiringManagerId = "HiringManagerId",
            HiringManagerName = "HiringManagerName",
            HiringManagerDepartmentId = "HiringManagerDepartmentId",
            HiringManagerDepartmentName = "HiringManagerDepartmentName",
            HiringManagerBranchId = "HiringManagerBranchId",
            HiringManagerBranchName = "HiringManagerBranchName",
            OpenDate = "OpenDate",
            CloseDate = "CloseDate",
            TenantId = "TenantId",
            TenantName = "TenantName",
            VacancyRequirementList = "VacancyRequirementList",
            VacancyBenefitList = "VacancyBenefitList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Recruitment {
    namespace VacancyService {
        const baseUrl = "Recruitment/Vacancy";
        function Create(request: Serenity.SaveRequest<VacancyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VacancyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Recruitment/Vacancy/Create",
            Update = "Recruitment/Vacancy/Update",
            Delete = "Recruitment/Vacancy/Delete",
            Retrieve = "Recruitment/Vacancy/Retrieve",
            List = "Recruitment/Vacancy/List"
        }
    }
}
declare namespace Indotalent {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Indotalent.Settings {
    class GenderColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Settings {
    interface GenderForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class GenderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Settings {
    interface GenderRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace GenderRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Settings.Gender";
        const lookupKey = "Settings.Gender";
        function getLookup(): Q.Lookup<GenderRow>;
        const deletePermission = "Settings:Gender";
        const insertPermission = "Settings:Gender";
        const readPermission = "Settings:Gender";
        const updatePermission = "Settings:Gender";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Settings {
    namespace GenderService {
        const baseUrl = "Settings/Gender";
        function Create(request: Serenity.SaveRequest<GenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Settings/Gender/Create",
            Update = "Settings/Gender/Update",
            Delete = "Settings/Gender/Delete",
            Retrieve = "Settings/Gender/Retrieve",
            List = "Settings/Gender/List"
        }
    }
}
declare namespace Indotalent.Settings {
    class MyCompanyColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Settings {
    interface MyCompanyForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EmployeeNumberPrefix: Serenity.StringEditor;
        EmployeeNumberUseDate: Serenity.BooleanEditor;
        EmployeeNumberLength: Serenity.IntegerEditor;
        LeaveRequestNumberPrefix: Serenity.StringEditor;
        LeaveRequestNumberUseDate: Serenity.BooleanEditor;
        LeaveRequestNumberLength: Serenity.IntegerEditor;
        EvaluationNumberPrefix: Serenity.StringEditor;
        EvaluationNumberUseDate: Serenity.BooleanEditor;
        EvaluationNumberLength: Serenity.IntegerEditor;
        AppraisalNumberPrefix: Serenity.StringEditor;
        AppraisalNumberUseDate: Serenity.BooleanEditor;
        AppraisalNumberLength: Serenity.IntegerEditor;
        PromotionNumberPrefix: Serenity.StringEditor;
        PromotionNumberUseDate: Serenity.BooleanEditor;
        PromotionNumberLength: Serenity.IntegerEditor;
        TransferNumberPrefix: Serenity.StringEditor;
        TransferNumberUseDate: Serenity.BooleanEditor;
        TransferNumberLength: Serenity.IntegerEditor;
        VacancyNumberPrefix: Serenity.StringEditor;
        VacancyNumberUseDate: Serenity.BooleanEditor;
        VacancyNumberLength: Serenity.IntegerEditor;
        ApplicantNumberPrefix: Serenity.StringEditor;
        ApplicantNumberUseDate: Serenity.BooleanEditor;
        ApplicantNumberLength: Serenity.IntegerEditor;
        InterviewNumberPrefix: Serenity.StringEditor;
        InterviewNumberUseDate: Serenity.BooleanEditor;
        InterviewNumberLength: Serenity.IntegerEditor;
        ReimbursementNumberPrefix: Serenity.StringEditor;
        ReimbursementNumberUseDate: Serenity.BooleanEditor;
        ReimbursementNumberLength: Serenity.IntegerEditor;
        TicketNumberPrefix: Serenity.StringEditor;
        TicketNumberUseDate: Serenity.BooleanEditor;
        TicketNumberLength: Serenity.IntegerEditor;
        AssetNumberPrefix: Serenity.StringEditor;
        AssetNumberUseDate: Serenity.BooleanEditor;
        AssetNumberLength: Serenity.IntegerEditor;
        AssetHandOverNumberPrefix: Serenity.StringEditor;
        AssetHandOverNumberUseDate: Serenity.BooleanEditor;
        AssetHandOverNumberLength: Serenity.IntegerEditor;
        ComplaintNumberPrefix: Serenity.StringEditor;
        ComplaintNumberUseDate: Serenity.BooleanEditor;
        ComplaintNumberLength: Serenity.IntegerEditor;
        ResignationNumberPrefix: Serenity.StringEditor;
        ResignationNumberUseDate: Serenity.BooleanEditor;
        ResignationNumberLength: Serenity.IntegerEditor;
        WarningNumberPrefix: Serenity.StringEditor;
        WarningNumberUseDate: Serenity.BooleanEditor;
        WarningNumberLength: Serenity.IntegerEditor;
        TerminationNumberPrefix: Serenity.StringEditor;
        TerminationNumberUseDate: Serenity.BooleanEditor;
        TerminationNumberLength: Serenity.IntegerEditor;
        SOPNumberPrefix: Serenity.StringEditor;
        SOPNumberUseDate: Serenity.BooleanEditor;
        SOPNumberLength: Serenity.IntegerEditor;
        PayrollNumberPrefix: Serenity.StringEditor;
        PayrollNumberUseDate: Serenity.BooleanEditor;
        PayrollNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
    }
    class MyCompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Settings {
    interface MyCompanyRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Currency?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        MaximumUser?: number;
        EmployeeNumberPrefix?: string;
        EmployeeNumberUseDate?: boolean;
        EmployeeNumberLength?: number;
        LeaveRequestNumberPrefix?: string;
        LeaveRequestNumberUseDate?: boolean;
        LeaveRequestNumberLength?: number;
        EvaluationNumberPrefix?: string;
        EvaluationNumberUseDate?: boolean;
        EvaluationNumberLength?: number;
        AppraisalNumberPrefix?: string;
        AppraisalNumberUseDate?: boolean;
        AppraisalNumberLength?: number;
        PromotionNumberPrefix?: string;
        PromotionNumberUseDate?: boolean;
        PromotionNumberLength?: number;
        TransferNumberPrefix?: string;
        TransferNumberUseDate?: boolean;
        TransferNumberLength?: number;
        VacancyNumberPrefix?: string;
        VacancyNumberUseDate?: boolean;
        VacancyNumberLength?: number;
        ApplicantNumberPrefix?: string;
        ApplicantNumberUseDate?: boolean;
        ApplicantNumberLength?: number;
        InterviewNumberPrefix?: string;
        InterviewNumberUseDate?: boolean;
        InterviewNumberLength?: number;
        ReimbursementNumberPrefix?: string;
        ReimbursementNumberUseDate?: boolean;
        ReimbursementNumberLength?: number;
        TicketNumberPrefix?: string;
        TicketNumberUseDate?: boolean;
        TicketNumberLength?: number;
        AssetNumberPrefix?: string;
        AssetNumberUseDate?: boolean;
        AssetNumberLength?: number;
        AssetHandOverNumberPrefix?: string;
        AssetHandOverNumberUseDate?: boolean;
        AssetHandOverNumberLength?: number;
        ComplaintNumberPrefix?: string;
        ComplaintNumberUseDate?: boolean;
        ComplaintNumberLength?: number;
        ResignationNumberPrefix?: string;
        ResignationNumberUseDate?: boolean;
        ResignationNumberLength?: number;
        WarningNumberPrefix?: string;
        WarningNumberUseDate?: boolean;
        WarningNumberLength?: number;
        TerminationNumberPrefix?: string;
        TerminationNumberUseDate?: boolean;
        TerminationNumberLength?: number;
        SOPNumberPrefix?: string;
        SOPNumberUseDate?: boolean;
        SOPNumberLength?: number;
        PayrollNumberPrefix?: string;
        PayrollNumberUseDate?: boolean;
        PayrollNumberLength?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace MyCompanyRow {
        const idProperty = "TenantId";
        const nameProperty = "TenantName";
        const localTextPrefix = "Settings.MyCompany";
        const deletePermission = "Settings:MyCompany";
        const insertPermission = "Settings:MyCompany";
        const readPermission = "Settings:MyCompany";
        const updatePermission = "Settings:MyCompany";
        const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            Description = "Description",
            Currency = "Currency",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            MaximumUser = "MaximumUser",
            EmployeeNumberPrefix = "EmployeeNumberPrefix",
            EmployeeNumberUseDate = "EmployeeNumberUseDate",
            EmployeeNumberLength = "EmployeeNumberLength",
            LeaveRequestNumberPrefix = "LeaveRequestNumberPrefix",
            LeaveRequestNumberUseDate = "LeaveRequestNumberUseDate",
            LeaveRequestNumberLength = "LeaveRequestNumberLength",
            EvaluationNumberPrefix = "EvaluationNumberPrefix",
            EvaluationNumberUseDate = "EvaluationNumberUseDate",
            EvaluationNumberLength = "EvaluationNumberLength",
            AppraisalNumberPrefix = "AppraisalNumberPrefix",
            AppraisalNumberUseDate = "AppraisalNumberUseDate",
            AppraisalNumberLength = "AppraisalNumberLength",
            PromotionNumberPrefix = "PromotionNumberPrefix",
            PromotionNumberUseDate = "PromotionNumberUseDate",
            PromotionNumberLength = "PromotionNumberLength",
            TransferNumberPrefix = "TransferNumberPrefix",
            TransferNumberUseDate = "TransferNumberUseDate",
            TransferNumberLength = "TransferNumberLength",
            VacancyNumberPrefix = "VacancyNumberPrefix",
            VacancyNumberUseDate = "VacancyNumberUseDate",
            VacancyNumberLength = "VacancyNumberLength",
            ApplicantNumberPrefix = "ApplicantNumberPrefix",
            ApplicantNumberUseDate = "ApplicantNumberUseDate",
            ApplicantNumberLength = "ApplicantNumberLength",
            InterviewNumberPrefix = "InterviewNumberPrefix",
            InterviewNumberUseDate = "InterviewNumberUseDate",
            InterviewNumberLength = "InterviewNumberLength",
            ReimbursementNumberPrefix = "ReimbursementNumberPrefix",
            ReimbursementNumberUseDate = "ReimbursementNumberUseDate",
            ReimbursementNumberLength = "ReimbursementNumberLength",
            TicketNumberPrefix = "TicketNumberPrefix",
            TicketNumberUseDate = "TicketNumberUseDate",
            TicketNumberLength = "TicketNumberLength",
            AssetNumberPrefix = "AssetNumberPrefix",
            AssetNumberUseDate = "AssetNumberUseDate",
            AssetNumberLength = "AssetNumberLength",
            AssetHandOverNumberPrefix = "AssetHandOverNumberPrefix",
            AssetHandOverNumberUseDate = "AssetHandOverNumberUseDate",
            AssetHandOverNumberLength = "AssetHandOverNumberLength",
            ComplaintNumberPrefix = "ComplaintNumberPrefix",
            ComplaintNumberUseDate = "ComplaintNumberUseDate",
            ComplaintNumberLength = "ComplaintNumberLength",
            ResignationNumberPrefix = "ResignationNumberPrefix",
            ResignationNumberUseDate = "ResignationNumberUseDate",
            ResignationNumberLength = "ResignationNumberLength",
            WarningNumberPrefix = "WarningNumberPrefix",
            WarningNumberUseDate = "WarningNumberUseDate",
            WarningNumberLength = "WarningNumberLength",
            TerminationNumberPrefix = "TerminationNumberPrefix",
            TerminationNumberUseDate = "TerminationNumberUseDate",
            TerminationNumberLength = "TerminationNumberLength",
            SOPNumberPrefix = "SOPNumberPrefix",
            SOPNumberUseDate = "SOPNumberUseDate",
            SOPNumberLength = "SOPNumberLength",
            PayrollNumberPrefix = "PayrollNumberPrefix",
            PayrollNumberUseDate = "PayrollNumberUseDate",
            PayrollNumberLength = "PayrollNumberLength",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Settings {
    namespace MyCompanyService {
        const baseUrl = "Settings/MyCompany";
        function Create(request: Serenity.SaveRequest<MyCompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MyCompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MyCompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MyCompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Settings/MyCompany/Create",
            Update = "Settings/MyCompany/Update",
            Delete = "Settings/MyCompany/Delete",
            Retrieve = "Settings/MyCompany/Retrieve",
            List = "Settings/MyCompany/List"
        }
    }
}
declare namespace Indotalent.Texts {
}
declare namespace Indotalent.Controls {
    class CustomHtmlNoteContentEditor extends Serenity.HtmlNoteContentEditor {
        constructor(textArea: JQuery, opt?: Serenity.HtmlContentEditorOptions);
        protected getConfig(): Serenity.CKEditorConfig;
        get_value(): string;
    }
}
declare namespace Indotalent.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Indotalent.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Indotalent.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Indotalent.Administration {
    class TenantDialog extends Serenity.EntityDialog<TenantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TenantForm;
    }
}
declare namespace Indotalent.Administration {
    class TenantGrid extends Serenity.EntityGrid<TenantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TenantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Indotalent.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        protected getPropertyItems(): Serenity.PropertyItem[];
    }
}
declare namespace Indotalent.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Indotalent.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Indotalent.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Indotalent.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Indotalent.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Indotalent.Attendance {
    class OvertimeDialog extends Serenity.EntityDialog<OvertimeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OvertimeForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Attendance {
    class OvertimeGrid extends Serenity.EntityGrid<OvertimeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OvertimeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Attendance {
    class PunchInDialog extends Serenity.EntityDialog<PunchInRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PunchInForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Attendance {
    class PunchInGrid extends Serenity.EntityGrid<PunchInRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PunchInDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Attendance {
    class PunchOutDialog extends Serenity.EntityDialog<PunchOutRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PunchOutForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Attendance {
    class PunchOutGrid extends Serenity.EntityGrid<PunchOutRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PunchOutDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected updateInterface(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Attendance {
    class TimesheetGrid extends Serenity.EntityGrid<TimesheetRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected updateInterface(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.LanguageList {
    function getValue(): string[][];
}
declare namespace Indotalent.ScriptInitialization {
}
declare namespace Indotalent.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Indotalent.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Indotalent.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class AnnouncementDialog extends Serenity.EntityDialog<AnnouncementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AnnouncementForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class AnnouncementGrid extends Serenity.EntityGrid<AnnouncementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AnnouncementDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class AwardDialog extends Serenity.EntityDialog<AwardRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AwardForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class AwardGrid extends Serenity.EntityGrid<AwardRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AwardDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class BusinessTripDialog extends Serenity.EntityDialog<BusinessTripRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BusinessTripForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class BusinessTripGrid extends Serenity.EntityGrid<BusinessTripRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessTripDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class BusinessTripParticipantDialog extends Serenity.Extensions.GridEditorDialog<BusinessTripParticipantRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: BusinessTripParticipantForm;
        constructor();
        private initEmployee;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class BusinessTripParticipantEditor extends Serenity.Extensions.GridEditorBase<BusinessTripParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessTripParticipantDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: BusinessTripParticipantRow, id: number): boolean;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class BusinessTripParticipantGrid extends Serenity.EntityGrid<BusinessTripParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessTripParticipantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ComplaintDialog extends Serenity.EntityDialog<ComplaintRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ComplaintForm;
        private loadedState;
        constructor();
        private initEmployee;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ComplaintGrid extends Serenity.EntityGrid<ComplaintRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComplaintDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveDelegatedTaskDialog extends Serenity.Extensions.GridEditorDialog<LeaveDelegatedTaskRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: LeaveDelegatedTaskForm;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveDelegatedTaskEditor extends Serenity.Extensions.GridEditorBase<LeaveDelegatedTaskRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveDelegatedTaskDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveDelegatedTaskGrid extends Serenity.EntityGrid<LeaveDelegatedTaskRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveDelegatedTaskDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveEmergencyContactDialog extends Serenity.Extensions.GridEditorDialog<LeaveEmergencyContactRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: LeaveEmergencyContactForm;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveEmergencyContactEditor extends Serenity.Extensions.GridEditorBase<LeaveEmergencyContactRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveEmergencyContactDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveEmergencyContactGrid extends Serenity.EntityGrid<LeaveEmergencyContactRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveEmergencyContactDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveRequestDialog extends Serenity.EntityDialog<LeaveRequestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LeaveRequestForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class LeaveRequestGrid extends Serenity.EntityGrid<LeaveRequestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveRequestDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class MeetingGrid extends Serenity.EntityGrid<MeetingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class MeetingParticipantDialog extends Serenity.Extensions.GridEditorDialog<MeetingParticipantRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: MeetingParticipantForm;
        constructor();
        private initEmployee;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class MeetingParticipantEditor extends Serenity.Extensions.GridEditorBase<MeetingParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingParticipantDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: MeetingParticipantRow, id: number): boolean;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class MeetingParticipantGrid extends Serenity.EntityGrid<MeetingParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingParticipantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class OvertimeDialog extends Serenity.EntityDialog<OvertimeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OvertimeForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class OvertimeGrid extends Serenity.EntityGrid<OvertimeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OvertimeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class PunchInDialog extends Serenity.EntityDialog<PunchInRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PunchInForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class PunchInGrid extends Serenity.EntityGrid<PunchInRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PunchInDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class PunchOutDialog extends Serenity.EntityDialog<PunchOutRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PunchOutForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class PunchOutGrid extends Serenity.EntityGrid<PunchOutRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PunchOutDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected updateInterface(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ReimbursementDialog extends Serenity.EntityDialog<ReimbursementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReimbursementForm;
        private loadedState;
        constructor();
        private initEmployee;
        private recalculate;
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ReimbursementGrid extends Serenity.EntityGrid<ReimbursementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReimbursementDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ReimbursementDetailDialog extends Serenity.Extensions.GridEditorDialog<ReimbursementDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReimbursementDetailForm;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ReimbursementDetailEditor extends Serenity.Extensions.GridEditorBase<ReimbursementDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReimbursementDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class ReimbursementDetailGrid extends Serenity.EntityGrid<ReimbursementDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReimbursementDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TicketForm;
        private loadedState;
        constructor();
        private initEmployee;
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TicketDetailDialog extends Serenity.Extensions.GridEditorDialog<TicketDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TicketDetailForm;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TicketDetailEditor extends Serenity.Extensions.GridEditorBase<TicketDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TicketDetailGrid extends Serenity.EntityGrid<TicketDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TimesheetGrid extends Serenity.EntityGrid<TimesheetRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected updateInterface(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TrainingDialog extends Serenity.EntityDialog<TrainingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TrainingForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TrainingGrid extends Serenity.EntityGrid<TrainingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TrainingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TrainingParticipantDialog extends Serenity.Extensions.GridEditorDialog<TrainingParticipantRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TrainingParticipantForm;
        constructor();
        private initEmployee;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TrainingParticipantEditor extends Serenity.Extensions.GridEditorBase<TrainingParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TrainingParticipantDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: TrainingParticipantRow, id: number): boolean;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class TrainingParticipantGrid extends Serenity.EntityGrid<TrainingParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TrainingParticipantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class WarningDialog extends Serenity.EntityDialog<WarningRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WarningForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.EmployeeSelfService {
    class WarningGrid extends Serenity.EntityGrid<WarningRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WarningDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Leave {
    class LeaveDelegatedTaskDialog extends Serenity.Extensions.GridEditorDialog<LeaveDelegatedTaskRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: LeaveDelegatedTaskForm;
    }
}
declare namespace Indotalent.Leave {
    class LeaveDelegatedTaskEditor extends Serenity.Extensions.GridEditorBase<LeaveDelegatedTaskRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveDelegatedTaskDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Leave {
    class LeaveDelegatedTaskGrid extends Serenity.EntityGrid<LeaveDelegatedTaskRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveDelegatedTaskDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Leave {
    class LeaveEmergencyContactDialog extends Serenity.Extensions.GridEditorDialog<LeaveEmergencyContactRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: LeaveEmergencyContactForm;
    }
}
declare namespace Indotalent.Leave {
    class LeaveEmergencyContactEditor extends Serenity.Extensions.GridEditorBase<LeaveEmergencyContactRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveEmergencyContactDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Leave {
    class LeaveEmergencyContactGrid extends Serenity.EntityGrid<LeaveEmergencyContactRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveEmergencyContactDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Leave {
    class LeaveRequestDialog extends Serenity.EntityDialog<LeaveRequestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LeaveRequestForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Leave {
    class LeaveRequestGrid extends Serenity.EntityGrid<LeaveRequestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveRequestDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Leave {
    class LeaveTypeDialog extends Serenity.EntityDialog<LeaveTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LeaveTypeForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Leave {
    class LeaveTypeGrid extends Serenity.EntityGrid<LeaveTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LeaveTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Membership {
    class JazzLoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Indotalent.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Indotalent.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Membership {
    class JazzForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Membership {
    class JazzSignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class AnnouncementDialog extends Serenity.EntityDialog<AnnouncementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AnnouncementForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class AnnouncementGrid extends Serenity.EntityGrid<AnnouncementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AnnouncementDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class AssetDialog extends Serenity.EntityDialog<AssetRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssetForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class AssetGrid extends Serenity.EntityGrid<AssetRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class AssetHandOverDialog extends Serenity.EntityDialog<AssetHandOverRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssetHandOverForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class AssetHandOverGrid extends Serenity.EntityGrid<AssetHandOverRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetHandOverDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class AwardDialog extends Serenity.EntityDialog<AwardRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AwardForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class AwardGrid extends Serenity.EntityGrid<AwardRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AwardDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class BusinessTripDialog extends Serenity.EntityDialog<BusinessTripRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BusinessTripForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class BusinessTripGrid extends Serenity.EntityGrid<BusinessTripRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessTripDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class BusinessTripParticipantDialog extends Serenity.Extensions.GridEditorDialog<BusinessTripParticipantRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: BusinessTripParticipantForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Operation {
    class BusinessTripParticipantEditor extends Serenity.Extensions.GridEditorBase<BusinessTripParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessTripParticipantDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: BusinessTripParticipantRow, id: number): boolean;
    }
}
declare namespace Indotalent.Operation {
    class BusinessTripParticipantGrid extends Serenity.EntityGrid<BusinessTripParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessTripParticipantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class ComplaintDialog extends Serenity.EntityDialog<ComplaintRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ComplaintForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class ComplaintGrid extends Serenity.EntityGrid<ComplaintRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComplaintDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class EventDialog extends Serenity.EntityDialog<EventRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EventForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class EventGrid extends Serenity.EntityGrid<EventRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EventDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class HolidayDialog extends Serenity.EntityDialog<HolidayRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: HolidayForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class HolidayGrid extends Serenity.EntityGrid<HolidayRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HolidayDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Operation {
    class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeetingForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class MeetingGrid extends Serenity.EntityGrid<MeetingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class MeetingParticipantDialog extends Serenity.Extensions.GridEditorDialog<MeetingParticipantRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: MeetingParticipantForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Operation {
    class MeetingParticipantEditor extends Serenity.Extensions.GridEditorBase<MeetingParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingParticipantDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: MeetingParticipantRow, id: number): boolean;
    }
}
declare namespace Indotalent.Operation {
    class MeetingParticipantGrid extends Serenity.EntityGrid<MeetingParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingParticipantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class ReimbursementDialog extends Serenity.EntityDialog<ReimbursementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReimbursementForm;
        private loadedState;
        constructor();
        private recalculate;
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Operation {
    class ReimbursementGrid extends Serenity.EntityGrid<ReimbursementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReimbursementDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class ReimbursementDetailDialog extends Serenity.Extensions.GridEditorDialog<ReimbursementDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReimbursementDetailForm;
    }
}
declare namespace Indotalent.Operation {
    class ReimbursementDetailEditor extends Serenity.Extensions.GridEditorBase<ReimbursementDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReimbursementDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class ReimbursementDetailGrid extends Serenity.EntityGrid<ReimbursementDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReimbursementDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class ResignationDialog extends Serenity.EntityDialog<ResignationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ResignationForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class ResignationGrid extends Serenity.EntityGrid<ResignationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ResignationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class SOPDialog extends Serenity.EntityDialog<SOPRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SOPForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class SOPGrid extends Serenity.EntityGrid<SOPRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SOPDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Operation {
    class TerminationDialog extends Serenity.EntityDialog<TerminationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TerminationForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class TerminationGrid extends Serenity.EntityGrid<TerminationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TerminationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TicketForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Operation {
    class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class TicketDetailDialog extends Serenity.Extensions.GridEditorDialog<TicketDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TicketDetailForm;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Operation {
    class TicketDetailEditor extends Serenity.Extensions.GridEditorBase<TicketDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class TicketDetailGrid extends Serenity.EntityGrid<TicketDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class TrainingDialog extends Serenity.EntityDialog<TrainingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TrainingForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class TrainingGrid extends Serenity.EntityGrid<TrainingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TrainingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Operation {
    class TrainingParticipantDialog extends Serenity.Extensions.GridEditorDialog<TrainingParticipantRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TrainingParticipantForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Operation {
    class TrainingParticipantEditor extends Serenity.Extensions.GridEditorBase<TrainingParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TrainingParticipantDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: TrainingParticipantRow, id: number): boolean;
    }
}
declare namespace Indotalent.Operation {
    class TrainingParticipantGrid extends Serenity.EntityGrid<TrainingParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TrainingParticipantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Operation {
    class WarningDialog extends Serenity.EntityDialog<WarningRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WarningForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Operation {
    class WarningGrid extends Serenity.EntityGrid<WarningRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WarningDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Organization {
    class BranchDialog extends Serenity.EntityDialog<BranchRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BranchForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Organization {
    class BranchGrid extends Serenity.EntityGrid<BranchRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BranchDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Organization {
    class DepartmentDialog extends Serenity.EntityDialog<DepartmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DepartmentForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Organization {
    class DepartmentGrid extends Serenity.EntityGrid<DepartmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartmentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Organization {
    class DesignationDialog extends Serenity.EntityDialog<DesignationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DesignationForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Organization {
    class DesignationGrid extends Serenity.EntityGrid<DesignationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DesignationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class DeductionDialog extends Serenity.EntityDialog<DeductionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DeductionForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Payrolls {
    class DeductionGrid extends Serenity.EntityGrid<DeductionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DeductionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeChildrenDialog extends Serenity.Extensions.GridEditorDialog<EmployeeChildrenRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeChildrenForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeChildrenEditor extends Serenity.Extensions.GridEditorBase<EmployeeChildrenRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeChildrenDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeChildrenGrid extends Serenity.EntityGrid<EmployeeChildrenRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeChildrenDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDeductionDialog extends Serenity.Extensions.GridEditorDialog<EmployeeDeductionRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeDeductionForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDeductionEditor extends Serenity.Extensions.GridEditorBase<EmployeeDeductionRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDeductionDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: EmployeeDeductionRow, id: number): boolean;
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDeductionGrid extends Serenity.EntityGrid<EmployeeDeductionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDeductionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDocumentDialog extends Serenity.Extensions.GridEditorDialog<EmployeeDocumentRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeDocumentForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDocumentEditor extends Serenity.Extensions.GridEditorBase<EmployeeDocumentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDocumentDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeDocumentGrid extends Serenity.EntityGrid<EmployeeDocumentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDocumentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeEducationDialog extends Serenity.Extensions.GridEditorDialog<EmployeeEducationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeEducationForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeEducationEditor extends Serenity.Extensions.GridEditorBase<EmployeeEducationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeEducationDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeEducationGrid extends Serenity.EntityGrid<EmployeeEducationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeEducationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeExperienceDialog extends Serenity.Extensions.GridEditorDialog<EmployeeExperienceRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeExperienceForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeExperienceEditor extends Serenity.Extensions.GridEditorBase<EmployeeExperienceRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeExperienceDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeExperienceGrid extends Serenity.EntityGrid<EmployeeExperienceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeExperienceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeIncomeDialog extends Serenity.Extensions.GridEditorDialog<EmployeeIncomeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeIncomeForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeIncomeEditor extends Serenity.Extensions.GridEditorBase<EmployeeIncomeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeIncomeDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: EmployeeIncomeRow, id: number): boolean;
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeIncomeGrid extends Serenity.EntityGrid<EmployeeIncomeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeIncomeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeJobDescriptionDialog extends Serenity.Extensions.GridEditorDialog<EmployeeJobDescriptionRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeJobDescriptionForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeJobDescriptionEditor extends Serenity.Extensions.GridEditorBase<EmployeeJobDescriptionRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeJobDescriptionDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeJobDescriptionGrid extends Serenity.EntityGrid<EmployeeJobDescriptionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeJobDescriptionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeKpiDialog extends Serenity.Extensions.GridEditorDialog<EmployeeKpiRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeKpiForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeKpiEditor extends Serenity.Extensions.GridEditorBase<EmployeeKpiRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeKpiDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeKpiGrid extends Serenity.EntityGrid<EmployeeKpiRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeKpiDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrObjectiveDialog extends Serenity.Extensions.GridEditorDialog<EmployeeOkrObjectiveRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeOkrObjectiveForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrObjectiveEditor extends Serenity.Extensions.GridEditorBase<EmployeeOkrObjectiveRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeOkrObjectiveDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrObjectiveGrid extends Serenity.EntityGrid<EmployeeOkrObjectiveRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeOkrObjectiveDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrResultDialog extends Serenity.Extensions.GridEditorDialog<EmployeeOkrResultRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeOkrResultForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrResultEditor extends Serenity.Extensions.GridEditorBase<EmployeeOkrResultRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeOkrResultDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeOkrResultGrid extends Serenity.EntityGrid<EmployeeOkrResultRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeOkrResultDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeParentDialog extends Serenity.Extensions.GridEditorDialog<EmployeeParentRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeParentForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeParentEditor extends Serenity.Extensions.GridEditorBase<EmployeeParentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeParentDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeParentGrid extends Serenity.EntityGrid<EmployeeParentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeParentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeTopSkillDialog extends Serenity.Extensions.GridEditorDialog<EmployeeTopSkillRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: EmployeeTopSkillForm;
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeTopSkillEditor extends Serenity.Extensions.GridEditorBase<EmployeeTopSkillRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeTopSkillDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class EmployeeTopSkillGrid extends Serenity.EntityGrid<EmployeeTopSkillRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeTopSkillDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Payrolls {
    class GradeDialog extends Serenity.EntityDialog<GradeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GradeForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Payrolls {
    class GradeGrid extends Serenity.EntityGrid<GradeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GradeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class IncomeDialog extends Serenity.EntityDialog<IncomeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: IncomeForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Payrolls {
    class IncomeGrid extends Serenity.EntityGrid<IncomeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof IncomeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDialog extends Serenity.EntityDialog<PayrollRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PayrollForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        private recalculate;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollGrid extends Serenity.EntityGrid<PayrollRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailDialog extends Serenity.Extensions.GridEditorDialog<PayrollDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PayrollDetailForm;
        private loadedState;
        static selectedEmployeeId: string;
        constructor();
        private recalculateIncome;
        private recalculateDeduction;
        private recalculateTakeHomePay;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
        private payrollDetailId;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailEditor extends Serenity.Extensions.GridEditorBase<PayrollDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: PayrollDetailRow, id: number): boolean;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailGrid extends Serenity.EntityGrid<PayrollDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailDeductionDialog extends Serenity.Extensions.GridEditorDialog<PayrollDetailDeductionRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PayrollDetailDeductionForm;
        private employee;
        private totalAllowances;
        private basicSalary;
        private taxSlabs;
        private allowanceThreshold;
        constructor();
        private fetchAllowanceThreshold;
        private fetchTaxSlabs;
        private findApplicableTaxSlab;
        protected afterLoadEntity(): void;
        private fetchEmployeeIncomes;
        private calculatePAYE;
        private calculateDeductionNewVersion;
        private calculateDeductionAmount;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailDeductionEditor extends Serenity.Extensions.GridEditorBase<PayrollDetailDeductionRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollDetailDeductionDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: PayrollDetailDeductionRow, id: number): boolean;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailDeductionGrid extends Serenity.EntityGrid<PayrollDetailDeductionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollDetailDeductionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailIncomeDialog extends Serenity.Extensions.GridEditorDialog<PayrollDetailIncomeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PayrollDetailIncomeForm;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailIncomeEditor extends Serenity.Extensions.GridEditorBase<PayrollDetailIncomeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollDetailIncomeDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: PayrollDetailIncomeRow, id: number): boolean;
    }
}
declare namespace Indotalent.Payrolls {
    class PayrollDetailIncomeGrid extends Serenity.EntityGrid<PayrollDetailIncomeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollDetailIncomeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Payrolls {
    class SalaryTaxSlabDialog extends Serenity.EntityDialog<SalaryTaxSlabRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalaryTaxSlabForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Payrolls {
    class SalaryTaxSlabGrid extends Serenity.EntityGrid<SalaryTaxSlabRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalaryTaxSlabDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Payrolls {
    class ThresholdDialog extends Serenity.EntityDialog<ThresholdRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ThresholdForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Payrolls {
    class ThresholdGrid extends Serenity.EntityGrid<ThresholdRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ThresholdDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Performance {
    class AppraisalDialog extends Serenity.EntityDialog<AppraisalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AppraisalForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Performance {
    class AppraisalGrid extends Serenity.EntityGrid<AppraisalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AppraisalDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Performance {
    class AppraisalDetailDialog extends Serenity.Extensions.GridEditorDialog<AppraisalDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: AppraisalDetailForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Performance {
    class AppraisalDetailEditor extends Serenity.Extensions.GridEditorBase<AppraisalDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AppraisalDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: AppraisalDetailRow, id: number): boolean;
    }
}
declare namespace Indotalent.Performance {
    class AppraisalDetailGrid extends Serenity.EntityGrid<AppraisalDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AppraisalDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class EvaluationDialog extends Serenity.EntityDialog<EvaluationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EvaluationForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Performance {
    class EvaluationGrid extends Serenity.EntityGrid<EvaluationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EvaluationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Performance {
    class PromotionDialog extends Serenity.EntityDialog<PromotionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PromotionForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Performance {
    class PromotionGrid extends Serenity.EntityGrid<PromotionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromotionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Performance {
    class PromotionCompetencyDialog extends Serenity.Extensions.GridEditorDialog<PromotionCompetencyRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PromotionCompetencyForm;
        constructor();
    }
}
declare namespace Indotalent.Performance {
    class PromotionCompetencyEditor extends Serenity.Extensions.GridEditorBase<PromotionCompetencyRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromotionCompetencyDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class PromotionCompetencyGrid extends Serenity.EntityGrid<PromotionCompetencyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromotionCompetencyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class PromotionReasonDialog extends Serenity.Extensions.GridEditorDialog<PromotionReasonRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PromotionReasonForm;
        constructor();
    }
}
declare namespace Indotalent.Performance {
    class PromotionReasonEditor extends Serenity.Extensions.GridEditorBase<PromotionReasonRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromotionReasonDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class PromotionReasonGrid extends Serenity.EntityGrid<PromotionReasonRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromotionReasonDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class TransferDialog extends Serenity.EntityDialog<TransferRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TransferForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Performance {
    class TransferGrid extends Serenity.EntityGrid<TransferRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransferDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Performance {
    class TransferCompetencyDialog extends Serenity.Extensions.GridEditorDialog<TransferCompetencyRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TransferCompetencyForm;
        constructor();
    }
}
declare namespace Indotalent.Performance {
    class TransferCompetencyEditor extends Serenity.Extensions.GridEditorBase<TransferCompetencyRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransferCompetencyDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class TransferCompetencyGrid extends Serenity.EntityGrid<TransferCompetencyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransferCompetencyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class TransferReasonDialog extends Serenity.Extensions.GridEditorDialog<TransferReasonRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TransferReasonForm;
        constructor();
    }
}
declare namespace Indotalent.Performance {
    class TransferReasonEditor extends Serenity.Extensions.GridEditorBase<TransferReasonRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransferReasonDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Performance {
    class TransferReasonGrid extends Serenity.EntityGrid<TransferReasonRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransferReasonDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantDialog extends Serenity.EntityDialog<ApplicantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ApplicantForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        getSaveState(): string;
        loadResponse(data: any): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantGrid extends Serenity.EntityGrid<ApplicantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApplicantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantEducationDialog extends Serenity.Extensions.GridEditorDialog<ApplicantEducationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ApplicantEducationForm;
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantEducationEditor extends Serenity.Extensions.GridEditorBase<ApplicantEducationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApplicantEducationDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantEducationGrid extends Serenity.EntityGrid<ApplicantEducationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApplicantEducationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantExperienceDialog extends Serenity.Extensions.GridEditorDialog<ApplicantExperienceRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ApplicantExperienceForm;
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantExperienceEditor extends Serenity.Extensions.GridEditorBase<ApplicantExperienceRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApplicantExperienceDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantExperienceGrid extends Serenity.EntityGrid<ApplicantExperienceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApplicantExperienceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantTopSkillDialog extends Serenity.Extensions.GridEditorDialog<ApplicantTopSkillRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ApplicantTopSkillForm;
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantTopSkillEditor extends Serenity.Extensions.GridEditorBase<ApplicantTopSkillRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApplicantTopSkillDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class ApplicantTopSkillGrid extends Serenity.EntityGrid<ApplicantTopSkillRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApplicantTopSkillDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class InterviewDialog extends Serenity.EntityDialog<InterviewRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InterviewForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Recruitment {
    class InterviewGrid extends Serenity.EntityGrid<InterviewRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InterviewDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Recruitment {
    class InterviewResultDialog extends Serenity.Extensions.GridEditorDialog<InterviewResultRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: InterviewResultForm;
    }
}
declare namespace Indotalent.Recruitment {
    class InterviewResultEditor extends Serenity.Extensions.GridEditorBase<InterviewResultRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InterviewResultDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class InterviewResultGrid extends Serenity.EntityGrid<InterviewResultRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InterviewResultDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyDialog extends Serenity.EntityDialog<VacancyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VacancyForm;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyGrid extends Serenity.EntityGrid<VacancyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyBenefitDialog extends Serenity.Extensions.GridEditorDialog<VacancyBenefitRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: VacancyBenefitForm;
        constructor();
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyBenefitEditor extends Serenity.Extensions.GridEditorBase<VacancyBenefitRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyBenefitDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyBenefitGrid extends Serenity.EntityGrid<VacancyBenefitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyBenefitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyRequirementDialog extends Serenity.Extensions.GridEditorDialog<VacancyRequirementRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: VacancyRequirementForm;
        constructor();
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyRequirementEditor extends Serenity.Extensions.GridEditorBase<VacancyRequirementRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyRequirementDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Recruitment {
    class VacancyRequirementGrid extends Serenity.EntityGrid<VacancyRequirementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyRequirementDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Settings {
    class GenderDialog extends Serenity.EntityDialog<GenderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GenderForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Settings {
    class GenderGrid extends Serenity.EntityGrid<GenderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GenderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Settings {
    class MyCompanyDialog extends Serenity.EntityDialog<MyCompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MyCompanyForm;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Settings {
    class MyCompanyGrid extends Serenity.EntityGrid<MyCompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MyCompanyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected updateInterface(): void;
    }
}
