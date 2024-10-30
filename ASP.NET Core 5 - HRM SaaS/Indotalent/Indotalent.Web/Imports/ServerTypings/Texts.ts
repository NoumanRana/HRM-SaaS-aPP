namespace Indotalent.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LanguageId: string;
                export const LanguageName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Role {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const RoleId: string;
                export const RoleName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Tenant {
                export const ApplicantNumberLength: string;
                export const ApplicantNumberPrefix: string;
                export const ApplicantNumberUseDate: string;
                export const AppraisalNumberLength: string;
                export const AppraisalNumberPrefix: string;
                export const AppraisalNumberUseDate: string;
                export const AssetHandOverNumberLength: string;
                export const AssetHandOverNumberPrefix: string;
                export const AssetHandOverNumberUseDate: string;
                export const AssetNumberLength: string;
                export const AssetNumberPrefix: string;
                export const AssetNumberUseDate: string;
                export const City: string;
                export const ComplaintNumberLength: string;
                export const ComplaintNumberPrefix: string;
                export const ComplaintNumberUseDate: string;
                export const Currency: string;
                export const Description: string;
                export const Email: string;
                export const EmployeeNumberLength: string;
                export const EmployeeNumberPrefix: string;
                export const EmployeeNumberUseDate: string;
                export const EvaluationNumberLength: string;
                export const EvaluationNumberPrefix: string;
                export const EvaluationNumberUseDate: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InterviewNumberLength: string;
                export const InterviewNumberPrefix: string;
                export const InterviewNumberUseDate: string;
                export const LeaveRequestNumberLength: string;
                export const LeaveRequestNumberPrefix: string;
                export const LeaveRequestNumberUseDate: string;
                export const MaximumUser: string;
                export const PayrollNumberLength: string;
                export const PayrollNumberPrefix: string;
                export const PayrollNumberUseDate: string;
                export const Phone: string;
                export const PromotionNumberLength: string;
                export const PromotionNumberPrefix: string;
                export const PromotionNumberUseDate: string;
                export const ReimbursementNumberLength: string;
                export const ReimbursementNumberPrefix: string;
                export const ReimbursementNumberUseDate: string;
                export const ResignationNumberLength: string;
                export const ResignationNumberPrefix: string;
                export const ResignationNumberUseDate: string;
                export const SOPNumberLength: string;
                export const SOPNumberPrefix: string;
                export const SOPNumberUseDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TerminationNumberLength: string;
                export const TerminationNumberPrefix: string;
                export const TerminationNumberUseDate: string;
                export const TicketNumberLength: string;
                export const TicketNumberPrefix: string;
                export const TicketNumberUseDate: string;
                export const TransferNumberLength: string;
                export const TransferNumberPrefix: string;
                export const TransferNumberUseDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VacancyNumberLength: string;
                export const VacancyNumberPrefix: string;
                export const VacancyNumberUseDate: string;
                export const WarningNumberLength: string;
                export const WarningNumberPrefix: string;
                export const WarningNumberUseDate: string;
                export const ZipCode: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsTenantAdmin: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Attendance {

            namespace Overtime {
                export const Description: string;
                export const Duration: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const OvertimeDate: string;
                export const OvertimeStatus: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PunchIn {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const InHour: string;
                export const InMinute: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const PunchDate: string;
                export const PunchIn: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PunchOut {
                export const Duration: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const OutHour: string;
                export const OutMinute: string;
                export const PunchDate: string;
                export const PunchIn: string;
                export const PunchOut: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Timesheet {
                export const CalendarDate: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const OvertimeDuration: string;
                export const PunchIn: string;
                export const PunchOut: string;
                export const WorkingDuration: string;
            }
        }

        namespace EmployeeSelfService {

            namespace Announcement {
                export const Date: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Message: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Award {
                export const Achievement: string;
                export const AwardeeId: string;
                export const AwardeeName: string;
                export const BranchId: string;
                export const BranchName: string;
                export const Date: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Reward: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BusinessTrip {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Location: string;
                export const Name: string;
                export const Phone: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace BusinessTripParticipant {
                export const BranchId: string;
                export const BranchName: string;
                export const BusinessTripId: string;
                export const BusinessTripName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Complaint {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Id: string;
                export const IncidentDate: string;
                export const IncidentDescription: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Location: string;
                export const Number: string;
                export const ReporterId: string;
                export const ReporterName: string;
                export const ResolveSuggestion: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const Witness: string;
            }

            namespace LeaveDelegatedTask {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LeaveRequestId: string;
                export const LeaveRequestNumber: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace LeaveEmergencyContact {
                export const ContactName: string;
                export const ContactPhoneNumber: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LeaveRequestId: string;
                export const LeaveRequestNumber: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace LeaveRequest {
                export const DelegatedEmployeeId: string;
                export const DelegatedEmployeeName: string;
                export const Description: string;
                export const Duration: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const FromDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LeaveDelegatedTaskList: string;
                export const LeaveEmergencyContactList: string;
                export const LeaveRequestStatus: string;
                export const LeaveTypeId: string;
                export const LeaveTypeName: string;
                export const Number: string;
                export const TenantId: string;
                export const TenantName: string;
                export const ToDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Meeting {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Location: string;
                export const Name: string;
                export const Phone: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace MeetingParticipant {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const MeetingId: string;
                export const MeetingName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Overtime {
                export const Description: string;
                export const Duration: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const OvertimeDate: string;
                export const OvertimeStatus: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PunchIn {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const InHour: string;
                export const InMinute: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const PunchDate: string;
                export const PunchIn: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PunchOut {
                export const Duration: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const OutHour: string;
                export const OutMinute: string;
                export const PunchDate: string;
                export const PunchIn: string;
                export const PunchOut: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Reimbursement {
                export const BranchId: string;
                export const BranchName: string;
                export const CurrencyName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Number: string;
                export const ReimbursementStatus: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TotalAmount: string;
                export const TransactionDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ReimbursementDetail {
                export const Amount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ReimbursementId: string;
                export const ReimbursementNumber: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Ticket {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Number: string;
                export const Request: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TicketDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace TicketDetail {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Response: string;
                export const ResponseAt: string;
                export const ResponseBy: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TicketId: string;
                export const TicketNumber: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Timesheet {
                export const CalendarDate: string;
                export const EmployeeName: string;
                export const EmployeeNumber: string;
                export const Id: string;
                export const OvertimeDuration: string;
                export const PunchIn: string;
                export const PunchOut: string;
                export const WorkingDuration: string;
            }

            namespace Training {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Location: string;
                export const Name: string;
                export const Phone: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace TrainingParticipant {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TrainingId: string;
                export const TrainingName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Warning {
                export const BranchId: string;
                export const BranchName: string;
                export const CorrectiveAction: string;
                export const CorrectiveDate: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Number: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WarningDate: string;
                export const WarningReason: string;
            }
        }

        namespace Leave {

            namespace LeaveDelegatedTask {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LeaveRequestId: string;
                export const LeaveRequestNumber: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace LeaveEmergencyContact {
                export const ContactName: string;
                export const ContactPhoneNumber: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LeaveRequestId: string;
                export const LeaveRequestNumber: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace LeaveRequest {
                export const DelegatedEmployeeId: string;
                export const DelegatedEmployeeName: string;
                export const Description: string;
                export const Duration: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const FromDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LeaveDelegatedTaskList: string;
                export const LeaveEmergencyContactList: string;
                export const LeaveRequestStatus: string;
                export const LeaveTypeId: string;
                export const LeaveTypeName: string;
                export const Number: string;
                export const TenantId: string;
                export const TenantName: string;
                export const ToDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace LeaveType {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Operation {

            namespace Announcement {
                export const Date: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Message: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Asset {
                export const AssetTagNumber: string;
                export const Description: string;
                export const Id: string;
                export const Images: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Manufacturer: string;
                export const Model: string;
                export const Number: string;
                export const ProductionYear: string;
                export const PurchaseDate: string;
                export const PurchaseOrderBill: string;
                export const PurchaseOrderNumber: string;
                export const PurchasePrice: string;
                export const SerialNumber: string;
                export const SupportCenter: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace AssetHandOver {
                export const AssetDescription: string;
                export const AssetId: string;
                export const AssetNumber: string;
                export const AssetTagNumber: string;
                export const Description: string;
                export const HandOverById: string;
                export const HandOverByName: string;
                export const HandOverDate: string;
                export const HandOverToId: string;
                export const HandOverToName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Manufacturer: string;
                export const Model: string;
                export const Number: string;
                export const ProductionYear: string;
                export const SerialNumber: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Award {
                export const Achievement: string;
                export const AwardeeId: string;
                export const AwardeeName: string;
                export const BranchId: string;
                export const BranchName: string;
                export const Date: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Reward: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BusinessTrip {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Location: string;
                export const Name: string;
                export const Phone: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace BusinessTripParticipant {
                export const BranchId: string;
                export const BranchName: string;
                export const BusinessTripId: string;
                export const BusinessTripName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Complaint {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Id: string;
                export const IncidentDate: string;
                export const IncidentDescription: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Location: string;
                export const Number: string;
                export const ReporterId: string;
                export const ReporterName: string;
                export const ResolveSuggestion: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const Witness: string;
            }

            namespace Event {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Location: string;
                export const Name: string;
                export const Phone: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace Holiday {
                export const Date: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Meeting {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Location: string;
                export const Name: string;
                export const Phone: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace MeetingParticipant {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const MeetingId: string;
                export const MeetingName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Reimbursement {
                export const BranchId: string;
                export const BranchName: string;
                export const CurrencyName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Number: string;
                export const ReimbursementStatus: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TotalAmount: string;
                export const TransactionDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ReimbursementDetail {
                export const Amount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ReimbursementId: string;
                export const ReimbursementNumber: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Resignation {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const EffectiveDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Number: string;
                export const ResignationDate: string;
                export const ResigneeId: string;
                export const ResigneeName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace SOP {
                export const Description: string;
                export const Id: string;
                export const Name: string;
                export const Number: string;
                export const Reference: string;
                export const TenantId: string;
                export const TenantName: string;
            }

            namespace Termination {
                export const BranchId: string;
                export const BranchName: string;
                export const CompletedForm: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const EffectiveDate: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Number: string;
                export const ReturnedItem: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TerminationDate: string;
                export const TerminationReason: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Ticket {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Number: string;
                export const Request: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TicketDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace TicketDetail {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Response: string;
                export const ResponseAt: string;
                export const ResponseBy: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TicketId: string;
                export const TicketNumber: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Training {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Location: string;
                export const Name: string;
                export const Phone: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace TrainingParticipant {
                export const BranchId: string;
                export const BranchName: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TrainingId: string;
                export const TrainingName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Warning {
                export const BranchId: string;
                export const BranchName: string;
                export const CorrectiveAction: string;
                export const CorrectiveDate: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Number: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WarningDate: string;
                export const WarningReason: string;
            }
        }

        namespace Organization {

            namespace Branch {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Department {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Designation {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Payrolls {

            namespace Deduction {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Employee {
                export const BankAccountForPayroll: string;
                export const BankNameForPayroll: string;
                export const BasicSalary: string;
                export const BiometricNumber: string;
                export const BranchId: string;
                export const BranchName: string;
                export const ChildrenList: string;
                export const City: string;
                export const DateOfBirth: string;
                export const DateOfJoining: string;
                export const DeductionList: string;
                export const DepartmentId: string;
                export const DepartmentName: string;
                export const Description: string;
                export const DesignationId: string;
                export const DesignationName: string;
                export const DocumentList: string;
                export const EducationList: string;
                export const Email: string;
                export const EmployeeNumber: string;
                export const ExperienceList: string;
                export const GenderId: string;
                export const GenderName: string;
                export const GradeId: string;
                export const GradeName: string;
                export const Id: string;
                export const IncomeList: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const JobDescriptionList: string;
                export const KpiList: string;
                export const LatestEducationDegree: string;
                export const LeaveQuota: string;
                export const LeaveTaken: string;
                export const Name: string;
                export const OkrObjectiveList: string;
                export const OkrResultList: string;
                export const ParentList: string;
                export const Phone: string;
                export const Picture: string;
                export const PlaceOfBirth: string;
                export const SpouseCity: string;
                export const SpouseDateOfBirth: string;
                export const SpouseEmail: string;
                export const SpouseName: string;
                export const SpousePhone: string;
                export const SpouseProfession: string;
                export const SpouseState: string;
                export const SpouseStreet: string;
                export const SpouseZipCode: string;
                export const State: string;
                export const Street: string;
                export const SupervisorId: string;
                export const SupervisorName: string;
                export const SystemUserId: string;
                export const SystemUsername: string;
                export const TaxNumber: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TopSkillList: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace EmployeeChildren {
                export const City: string;
                export const DateOfBirth: string;
                export const Email: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Phone: string;
                export const Profession: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace EmployeeDeduction {
                export const Amount: string;
                export const DeductionId: string;
                export const DeductionName: string;
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeDocument {
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const ExpiredDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Picture: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeEducation {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EndDate: string;
                export const Grade: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const SchoolName: string;
                export const ShortNote: string;
                export const StartDate: string;
                export const StudyMajor: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeExperience {
                export const CompanyName: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Position: string;
                export const Salary: string;
                export const StartDate: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeIncome {
                export const Amount: string;
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const IncomeId: string;
                export const IncomeName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeJobDescription {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const JobDescription: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeKpi {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const KpiDescription: string;
                export const KpiIndicator: string;
                export const KpiUnit: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeOkrObjective {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Objective: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeOkrResult {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Result: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmployeeParent {
                export const City: string;
                export const DateOfBirth: string;
                export const Email: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Phone: string;
                export const Profession: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace EmployeeTopSkill {
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ProficiencyScore: string;
                export const SkillName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Grade {
                export const BasicSalary: string;
                export const CurrencyName: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Income {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Payroll {
                export const AutoGeneratePayrollDetail: string;
                export const CurrencyName: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Number: string;
                export const PaymentDate: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TotalBasicSalary: string;
                export const TotalDeduction: string;
                export const TotalIncome: string;
                export const TotalPaymentAmount: string;
                export const TotalTakeHomePay: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PayrollDetail {
                export const BankAccount: string;
                export const BankName: string;
                export const BasicSalary: string;
                export const DeductionList: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const IncomeList: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const PayrollId: string;
                export const TakeHomePay: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TotalDeduction: string;
                export const TotalIncome: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PayrollDetailDeduction {
                export const Amount: string;
                export const DeductionId: string;
                export const DeductionName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const PayrollDetailId: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PayrollDetailIncome {
                export const Amount: string;
                export const Id: string;
                export const IncomeId: string;
                export const IncomeName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const PayrollDetailId: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Performance {

            namespace Appraisal {
                export const AppraisalDetailList: string;
                export const Comment: string;
                export const CurrentAppraisalDate: string;
                export const Description: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const EvaluatorId: string;
                export const EvaluatorName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LastAppraisalDate: string;
                export const Number: string;
                export const Recomendation: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace AppraisalDetail {
                export const AppraisalId: string;
                export const AppraisalNumber: string;
                export const EvaluationGroup: string;
                export const EvaluationId: string;
                export const EvaluationIndicator: string;
                export const EvaluationNumber: string;
                export const EvaluationResult: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Evaluation {
                export const Description: string;
                export const Group: string;
                export const Id: string;
                export const Indicator: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Number: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Promotion {
                export const CurrentBasicSalary: string;
                export const CurrentBranchId: string;
                export const CurrentBranchName: string;
                export const CurrentDepartmentId: string;
                export const CurrentDepartmentName: string;
                export const CurrentDesignationId: string;
                export const CurrentDesignationName: string;
                export const CurrentSupervisorId: string;
                export const CurrentSupervisorName: string;
                export const Description: string;
                export const EffectiveDate: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const NewBasicSalary: string;
                export const NewBranchId: string;
                export const NewBranchName: string;
                export const NewDepartmentId: string;
                export const NewDepartmentName: string;
                export const NewDesignationId: string;
                export const NewDesignationName: string;
                export const NewSupervisorId: string;
                export const NewSupervisorName: string;
                export const Number: string;
                export const PromotionCompetencyList: string;
                export const PromotionReasonList: string;
                export const PromotorId: string;
                export const PromotorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PromotionCompetency {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const PromotionId: string;
                export const PromotionNumber: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PromotionReason {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const PromotionId: string;
                export const PromotionNumber: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Transfer {
                export const CurrentBasicSalary: string;
                export const CurrentBranchId: string;
                export const CurrentBranchName: string;
                export const CurrentDepartmentId: string;
                export const CurrentDepartmentName: string;
                export const CurrentDesignationId: string;
                export const CurrentDesignationName: string;
                export const CurrentSupervisorId: string;
                export const CurrentSupervisorName: string;
                export const Description: string;
                export const EffectiveDate: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const NewBasicSalary: string;
                export const NewBranchId: string;
                export const NewBranchName: string;
                export const NewDepartmentId: string;
                export const NewDepartmentName: string;
                export const NewDesignationId: string;
                export const NewDesignationName: string;
                export const NewSupervisorId: string;
                export const NewSupervisorName: string;
                export const Number: string;
                export const PromotorId: string;
                export const PromotorName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TransferCompetencyList: string;
                export const TransferReasonList: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace TransferCompetency {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TransferId: string;
                export const TransferNumber: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace TransferReason {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TransferId: string;
                export const TransferNumber: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Recruitment {

            namespace Applicant {
                export const City: string;
                export const DateOfBirth: string;
                export const Description: string;
                export const EducationList: string;
                export const Email: string;
                export const ExperienceList: string;
                export const GenderId: string;
                export const GenderName: string;
                export const HiringManagerId: string;
                export const HiringManagerName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const JobTitle: string;
                export const Name: string;
                export const Number: string;
                export const Phone: string;
                export const Picture: string;
                export const PlaceOfBirth: string;
                export const SkillList: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VacancyId: string;
                export const VacancyNumber: string;
                export const ZipCode: string;
            }

            namespace ApplicantEducation {
                export const ApplicantId: string;
                export const ApplicantName: string;
                export const EndDate: string;
                export const Grade: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const SchoolName: string;
                export const ShortNote: string;
                export const StartDate: string;
                export const StudyMajor: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ApplicantExperience {
                export const ApplicantId: string;
                export const ApplicantName: string;
                export const CompanyName: string;
                export const EndDate: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Position: string;
                export const Salary: string;
                export const StartDate: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ApplicantTopSkill {
                export const ApplicantId: string;
                export const ApplicantName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ProficiencyScore: string;
                export const SkillName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Interview {
                export const ApplicantId: string;
                export const ApplicantName: string;
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const EndDate: string;
                export const HiringManagerId: string;
                export const HiringManagerName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const JobTitle: string;
                export const Number: string;
                export const Phone: string;
                export const ResultList: string;
                export const Room: string;
                export const StartDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VacancyId: string;
                export const VacancyNumber: string;
                export const ZipCode: string;
            }

            namespace InterviewResult {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InterviewId: string;
                export const InterviewNumber: string;
                export const ResultName: string;
                export const ResultScore: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Vacancy {
                export const CloseDate: string;
                export const HiringManagerBranchId: string;
                export const HiringManagerBranchName: string;
                export const HiringManagerDepartmentId: string;
                export const HiringManagerDepartmentName: string;
                export const HiringManagerId: string;
                export const HiringManagerName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const JobDescription: string;
                export const JobTitle: string;
                export const Number: string;
                export const OpenDate: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VacancyBenefitList: string;
                export const VacancyRequirementList: string;
            }

            namespace VacancyBenefit {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VacancyId: string;
                export const VacancyNumber: string;
            }

            namespace VacancyRequirement {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ShortNote: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VacancyId: string;
                export const VacancyNumber: string;
            }
        }

        namespace Settings {

            namespace Gender {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace MyCompany {
                export const ApplicantNumberLength: string;
                export const ApplicantNumberPrefix: string;
                export const ApplicantNumberUseDate: string;
                export const AppraisalNumberLength: string;
                export const AppraisalNumberPrefix: string;
                export const AppraisalNumberUseDate: string;
                export const AssetHandOverNumberLength: string;
                export const AssetHandOverNumberPrefix: string;
                export const AssetHandOverNumberUseDate: string;
                export const AssetNumberLength: string;
                export const AssetNumberPrefix: string;
                export const AssetNumberUseDate: string;
                export const City: string;
                export const ComplaintNumberLength: string;
                export const ComplaintNumberPrefix: string;
                export const ComplaintNumberUseDate: string;
                export const Currency: string;
                export const Description: string;
                export const Email: string;
                export const EmployeeNumberLength: string;
                export const EmployeeNumberPrefix: string;
                export const EmployeeNumberUseDate: string;
                export const EvaluationNumberLength: string;
                export const EvaluationNumberPrefix: string;
                export const EvaluationNumberUseDate: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InterviewNumberLength: string;
                export const InterviewNumberPrefix: string;
                export const InterviewNumberUseDate: string;
                export const LeaveRequestNumberLength: string;
                export const LeaveRequestNumberPrefix: string;
                export const LeaveRequestNumberUseDate: string;
                export const MaximumUser: string;
                export const PayrollNumberLength: string;
                export const PayrollNumberPrefix: string;
                export const PayrollNumberUseDate: string;
                export const Phone: string;
                export const PromotionNumberLength: string;
                export const PromotionNumberPrefix: string;
                export const PromotionNumberUseDate: string;
                export const ReimbursementNumberLength: string;
                export const ReimbursementNumberPrefix: string;
                export const ReimbursementNumberUseDate: string;
                export const ResignationNumberLength: string;
                export const ResignationNumberPrefix: string;
                export const ResignationNumberUseDate: string;
                export const SOPNumberLength: string;
                export const SOPNumberPrefix: string;
                export const SOPNumberUseDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const TerminationNumberLength: string;
                export const TerminationNumberPrefix: string;
                export const TerminationNumberUseDate: string;
                export const TicketNumberLength: string;
                export const TicketNumberPrefix: string;
                export const TicketNumberUseDate: string;
                export const TransferNumberLength: string;
                export const TransferNumberPrefix: string;
                export const TransferNumberUseDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VacancyNumberLength: string;
                export const VacancyNumberPrefix: string;
                export const VacancyNumberUseDate: string;
                export const WarningNumberLength: string;
                export const WarningNumberPrefix: string;
                export const WarningNumberUseDate: string;
                export const ZipCode: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Indotalent['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,InsertDate:1,InsertUserId:1,LanguageId:1,LanguageName:1,UpdateDate:1,UpdateUserId:1},Role:{InsertDate:1,InsertUserId:1,RoleId:1,RoleName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Tenant:{ApplicantNumberLength:1,ApplicantNumberPrefix:1,ApplicantNumberUseDate:1,AppraisalNumberLength:1,AppraisalNumberPrefix:1,AppraisalNumberUseDate:1,AssetHandOverNumberLength:1,AssetHandOverNumberPrefix:1,AssetHandOverNumberUseDate:1,AssetNumberLength:1,AssetNumberPrefix:1,AssetNumberUseDate:1,City:1,ComplaintNumberLength:1,ComplaintNumberPrefix:1,ComplaintNumberUseDate:1,Currency:1,Description:1,Email:1,EmployeeNumberLength:1,EmployeeNumberPrefix:1,EmployeeNumberUseDate:1,EvaluationNumberLength:1,EvaluationNumberPrefix:1,EvaluationNumberUseDate:1,InsertDate:1,InsertUserId:1,InterviewNumberLength:1,InterviewNumberPrefix:1,InterviewNumberUseDate:1,LeaveRequestNumberLength:1,LeaveRequestNumberPrefix:1,LeaveRequestNumberUseDate:1,MaximumUser:1,PayrollNumberLength:1,PayrollNumberPrefix:1,PayrollNumberUseDate:1,Phone:1,PromotionNumberLength:1,PromotionNumberPrefix:1,PromotionNumberUseDate:1,ReimbursementNumberLength:1,ReimbursementNumberPrefix:1,ReimbursementNumberUseDate:1,ResignationNumberLength:1,ResignationNumberPrefix:1,ResignationNumberUseDate:1,SOPNumberLength:1,SOPNumberPrefix:1,SOPNumberUseDate:1,State:1,Street:1,TenantId:1,TenantName:1,TerminationNumberLength:1,TerminationNumberPrefix:1,TerminationNumberUseDate:1,TicketNumberLength:1,TicketNumberPrefix:1,TicketNumberUseDate:1,TransferNumberLength:1,TransferNumberPrefix:1,TransferNumberUseDate:1,UpdateDate:1,UpdateUserId:1,VacancyNumberLength:1,VacancyNumberPrefix:1,VacancyNumberUseDate:1,WarningNumberLength:1,WarningNumberPrefix:1,WarningNumberUseDate:1,ZipCode:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,IsTenantAdmin:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Attendance:{Overtime:{Description:1,Duration:1,EmployeeId:1,EmployeeName:1,EmployeeNumber:1,Id:1,InsertDate:1,InsertUserId:1,OvertimeDate:1,OvertimeStatus:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},PunchIn:{EmployeeId:1,EmployeeName:1,EmployeeNumber:1,Id:1,InHour:1,InMinute:1,InsertDate:1,InsertUserId:1,PunchDate:1,PunchIn:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},PunchOut:{Duration:1,EmployeeId:1,EmployeeName:1,EmployeeNumber:1,Id:1,InsertDate:1,InsertUserId:1,OutHour:1,OutMinute:1,PunchDate:1,PunchIn:1,PunchOut:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Timesheet:{CalendarDate:1,EmployeeName:1,EmployeeNumber:1,Id:1,OvertimeDuration:1,PunchIn:1,PunchOut:1,WorkingDuration:1}},EmployeeSelfService:{Announcement:{Date:1,Id:1,InsertDate:1,InsertUserId:1,Message:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Award:{Achievement:1,AwardeeId:1,AwardeeName:1,BranchId:1,BranchName:1,Date:1,DepartmentId:1,DepartmentName:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Reward:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},BusinessTrip:{City:1,Description:1,Email:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Location:1,Name:1,Phone:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},BusinessTripParticipant:{BranchId:1,BranchName:1,BusinessTripId:1,BusinessTripName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Complaint:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,Id:1,IncidentDate:1,IncidentDescription:1,InsertDate:1,InsertUserId:1,Location:1,Number:1,ReporterId:1,ReporterName:1,ResolveSuggestion:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,Witness:1},LeaveDelegatedTask:{Id:1,InsertDate:1,InsertUserId:1,LeaveRequestId:1,LeaveRequestNumber:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},LeaveEmergencyContact:{ContactName:1,ContactPhoneNumber:1,Id:1,InsertDate:1,InsertUserId:1,LeaveRequestId:1,LeaveRequestNumber:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},LeaveRequest:{DelegatedEmployeeId:1,DelegatedEmployeeName:1,Description:1,Duration:1,EmployeeId:1,EmployeeName:1,FromDate:1,Id:1,InsertDate:1,InsertUserId:1,LeaveDelegatedTaskList:1,LeaveEmergencyContactList:1,LeaveRequestStatus:1,LeaveTypeId:1,LeaveTypeName:1,Number:1,TenantId:1,TenantName:1,ToDate:1,UpdateDate:1,UpdateUserId:1},Meeting:{City:1,Description:1,Email:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Location:1,Name:1,Phone:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},MeetingParticipant:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,MeetingId:1,MeetingName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Overtime:{Description:1,Duration:1,EmployeeId:1,EmployeeName:1,EmployeeNumber:1,Id:1,InsertDate:1,InsertUserId:1,OvertimeDate:1,OvertimeStatus:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},PunchIn:{EmployeeId:1,EmployeeName:1,EmployeeNumber:1,Id:1,InHour:1,InMinute:1,InsertDate:1,InsertUserId:1,PunchDate:1,PunchIn:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},PunchOut:{Duration:1,EmployeeId:1,EmployeeName:1,EmployeeNumber:1,Id:1,InsertDate:1,InsertUserId:1,OutHour:1,OutMinute:1,PunchDate:1,PunchIn:1,PunchOut:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Reimbursement:{BranchId:1,BranchName:1,CurrencyName:1,DepartmentId:1,DepartmentName:1,Description:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Number:1,ReimbursementStatus:1,SupervisorId:1,SupervisorName:1,TenantId:1,TenantName:1,TotalAmount:1,TransactionDate:1,UpdateDate:1,UpdateUserId:1},ReimbursementDetail:{Amount:1,Id:1,InsertDate:1,InsertUserId:1,ReimbursementId:1,ReimbursementNumber:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Ticket:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Number:1,Request:1,SupervisorId:1,SupervisorName:1,TenantId:1,TenantName:1,TicketDate:1,UpdateDate:1,UpdateUserId:1},TicketDetail:{Id:1,InsertDate:1,InsertUserId:1,Response:1,ResponseAt:1,ResponseBy:1,TenantId:1,TenantName:1,TicketId:1,TicketNumber:1,UpdateDate:1,UpdateUserId:1},Timesheet:{CalendarDate:1,EmployeeName:1,EmployeeNumber:1,Id:1,OvertimeDuration:1,PunchIn:1,PunchOut:1,WorkingDuration:1},Training:{City:1,Description:1,Email:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Location:1,Name:1,Phone:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},TrainingParticipant:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,TenantId:1,TenantName:1,TrainingId:1,TrainingName:1,UpdateDate:1,UpdateUserId:1},Warning:{BranchId:1,BranchName:1,CorrectiveAction:1,CorrectiveDate:1,DepartmentId:1,DepartmentName:1,Description:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,Number:1,SupervisorId:1,SupervisorName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,WarningDate:1,WarningReason:1}},Leave:{LeaveDelegatedTask:{Id:1,InsertDate:1,InsertUserId:1,LeaveRequestId:1,LeaveRequestNumber:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},LeaveEmergencyContact:{ContactName:1,ContactPhoneNumber:1,Id:1,InsertDate:1,InsertUserId:1,LeaveRequestId:1,LeaveRequestNumber:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},LeaveRequest:{DelegatedEmployeeId:1,DelegatedEmployeeName:1,Description:1,Duration:1,EmployeeId:1,EmployeeName:1,FromDate:1,Id:1,InsertDate:1,InsertUserId:1,LeaveDelegatedTaskList:1,LeaveEmergencyContactList:1,LeaveRequestStatus:1,LeaveTypeId:1,LeaveTypeName:1,Number:1,TenantId:1,TenantName:1,ToDate:1,UpdateDate:1,UpdateUserId:1},LeaveType:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1}},Operation:{Announcement:{Date:1,Id:1,InsertDate:1,InsertUserId:1,Message:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Asset:{AssetTagNumber:1,Description:1,Id:1,Images:1,InsertDate:1,InsertUserId:1,Manufacturer:1,Model:1,Number:1,ProductionYear:1,PurchaseDate:1,PurchaseOrderBill:1,PurchaseOrderNumber:1,PurchasePrice:1,SerialNumber:1,SupportCenter:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},AssetHandOver:{AssetDescription:1,AssetId:1,AssetNumber:1,AssetTagNumber:1,Description:1,HandOverById:1,HandOverByName:1,HandOverDate:1,HandOverToId:1,HandOverToName:1,Id:1,InsertDate:1,InsertUserId:1,Manufacturer:1,Model:1,Number:1,ProductionYear:1,SerialNumber:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Award:{Achievement:1,AwardeeId:1,AwardeeName:1,BranchId:1,BranchName:1,Date:1,DepartmentId:1,DepartmentName:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Reward:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},BusinessTrip:{City:1,Description:1,Email:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Location:1,Name:1,Phone:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},BusinessTripParticipant:{BranchId:1,BranchName:1,BusinessTripId:1,BusinessTripName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Complaint:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,Id:1,IncidentDate:1,IncidentDescription:1,InsertDate:1,InsertUserId:1,Location:1,Number:1,ReporterId:1,ReporterName:1,ResolveSuggestion:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,Witness:1},Event:{City:1,Description:1,Email:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,Location:1,Name:1,Phone:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},Holiday:{Date:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Meeting:{City:1,Description:1,Email:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Location:1,Name:1,Phone:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},MeetingParticipant:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,MeetingId:1,MeetingName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Reimbursement:{BranchId:1,BranchName:1,CurrencyName:1,DepartmentId:1,DepartmentName:1,Description:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Number:1,ReimbursementStatus:1,SupervisorId:1,SupervisorName:1,TenantId:1,TenantName:1,TotalAmount:1,TransactionDate:1,UpdateDate:1,UpdateUserId:1},ReimbursementDetail:{Amount:1,Id:1,InsertDate:1,InsertUserId:1,ReimbursementId:1,ReimbursementNumber:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Resignation:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,Description:1,EffectiveDate:1,Id:1,InsertDate:1,InsertUserId:1,Number:1,ResignationDate:1,ResigneeId:1,ResigneeName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},SOP:{Description:1,Id:1,Name:1,Number:1,Reference:1,TenantId:1,TenantName:1},Termination:{BranchId:1,BranchName:1,CompletedForm:1,DepartmentId:1,DepartmentName:1,Description:1,EffectiveDate:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,Number:1,ReturnedItem:1,SupervisorId:1,SupervisorName:1,TenantId:1,TenantName:1,TerminationDate:1,TerminationReason:1,UpdateDate:1,UpdateUserId:1},Ticket:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Number:1,Request:1,SupervisorId:1,SupervisorName:1,TenantId:1,TenantName:1,TicketDate:1,UpdateDate:1,UpdateUserId:1},TicketDetail:{Id:1,InsertDate:1,InsertUserId:1,Response:1,ResponseAt:1,ResponseBy:1,TenantId:1,TenantName:1,TicketId:1,TicketNumber:1,UpdateDate:1,UpdateUserId:1},Training:{City:1,Description:1,Email:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Location:1,Name:1,Phone:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},TrainingParticipant:{BranchId:1,BranchName:1,DepartmentId:1,DepartmentName:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,TenantId:1,TenantName:1,TrainingId:1,TrainingName:1,UpdateDate:1,UpdateUserId:1},Warning:{BranchId:1,BranchName:1,CorrectiveAction:1,CorrectiveDate:1,DepartmentId:1,DepartmentName:1,Description:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,Number:1,SupervisorId:1,SupervisorName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,WarningDate:1,WarningReason:1}},Organization:{Branch:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Department:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Designation:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1}},Payrolls:{Deduction:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Employee:{BankAccountForPayroll:1,BankNameForPayroll:1,BasicSalary:1,BiometricNumber:1,BranchId:1,BranchName:1,ChildrenList:1,City:1,DateOfBirth:1,DateOfJoining:1,DeductionList:1,DepartmentId:1,DepartmentName:1,Description:1,DesignationId:1,DesignationName:1,DocumentList:1,EducationList:1,Email:1,EmployeeNumber:1,ExperienceList:1,GenderId:1,GenderName:1,GradeId:1,GradeName:1,Id:1,IncomeList:1,InsertDate:1,InsertUserId:1,JobDescriptionList:1,KpiList:1,LatestEducationDegree:1,LeaveQuota:1,LeaveTaken:1,Name:1,OkrObjectiveList:1,OkrResultList:1,ParentList:1,Phone:1,Picture:1,PlaceOfBirth:1,SpouseCity:1,SpouseDateOfBirth:1,SpouseEmail:1,SpouseName:1,SpousePhone:1,SpouseProfession:1,SpouseState:1,SpouseStreet:1,SpouseZipCode:1,State:1,Street:1,SupervisorId:1,SupervisorName:1,SystemUserId:1,SystemUsername:1,TaxNumber:1,TenantId:1,TenantName:1,TopSkillList:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},EmployeeChildren:{City:1,DateOfBirth:1,Email:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Phone:1,Profession:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},EmployeeDeduction:{Amount:1,DeductionId:1,DeductionName:1,Description:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeDocument:{Description:1,EmployeeId:1,EmployeeName:1,ExpiredDate:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Picture:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeEducation:{EmployeeId:1,EmployeeName:1,EndDate:1,Grade:1,Id:1,InsertDate:1,InsertUserId:1,SchoolName:1,ShortNote:1,StartDate:1,StudyMajor:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeExperience:{CompanyName:1,EmployeeId:1,EmployeeName:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,Position:1,Salary:1,StartDate:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeIncome:{Amount:1,Description:1,EmployeeId:1,EmployeeName:1,Id:1,IncomeId:1,IncomeName:1,InsertDate:1,InsertUserId:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeJobDescription:{EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,JobDescription:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeKpi:{EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,KpiDescription:1,KpiIndicator:1,KpiUnit:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeOkrObjective:{EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,Objective:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeOkrResult:{EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,Result:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},EmployeeParent:{City:1,DateOfBirth:1,Email:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Phone:1,Profession:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},EmployeeTopSkill:{EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,ProficiencyScore:1,SkillName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Grade:{BasicSalary:1,CurrencyName:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Income:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Payroll:{AutoGeneratePayrollDetail:1,CurrencyName:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Number:1,PaymentDate:1,TenantId:1,TenantName:1,TotalBasicSalary:1,TotalDeduction:1,TotalIncome:1,TotalPaymentAmount:1,TotalTakeHomePay:1,UpdateDate:1,UpdateUserId:1},PayrollDetail:{BankAccount:1,BankName:1,BasicSalary:1,DeductionList:1,EmployeeId:1,EmployeeName:1,Id:1,IncomeList:1,InsertDate:1,InsertUserId:1,PayrollId:1,TakeHomePay:1,TenantId:1,TenantName:1,TotalDeduction:1,TotalIncome:1,UpdateDate:1,UpdateUserId:1},PayrollDetailDeduction:{Amount:1,DeductionId:1,DeductionName:1,Id:1,InsertDate:1,InsertUserId:1,PayrollDetailId:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},PayrollDetailIncome:{Amount:1,Id:1,IncomeId:1,IncomeName:1,InsertDate:1,InsertUserId:1,PayrollDetailId:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1}},Performance:{Appraisal:{AppraisalDetailList:1,Comment:1,CurrentAppraisalDate:1,Description:1,EmployeeId:1,EmployeeName:1,EvaluatorId:1,EvaluatorName:1,Id:1,InsertDate:1,InsertUserId:1,LastAppraisalDate:1,Number:1,Recomendation:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},AppraisalDetail:{AppraisalId:1,AppraisalNumber:1,EvaluationGroup:1,EvaluationId:1,EvaluationIndicator:1,EvaluationNumber:1,EvaluationResult:1,Id:1,InsertDate:1,InsertUserId:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Evaluation:{Description:1,Group:1,Id:1,Indicator:1,InsertDate:1,InsertUserId:1,Name:1,Number:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Promotion:{CurrentBasicSalary:1,CurrentBranchId:1,CurrentBranchName:1,CurrentDepartmentId:1,CurrentDepartmentName:1,CurrentDesignationId:1,CurrentDesignationName:1,CurrentSupervisorId:1,CurrentSupervisorName:1,Description:1,EffectiveDate:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,NewBasicSalary:1,NewBranchId:1,NewBranchName:1,NewDepartmentId:1,NewDepartmentName:1,NewDesignationId:1,NewDesignationName:1,NewSupervisorId:1,NewSupervisorName:1,Number:1,PromotionCompetencyList:1,PromotionReasonList:1,PromotorId:1,PromotorName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},PromotionCompetency:{Id:1,InsertDate:1,InsertUserId:1,PromotionId:1,PromotionNumber:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},PromotionReason:{Id:1,InsertDate:1,InsertUserId:1,PromotionId:1,PromotionNumber:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Transfer:{CurrentBasicSalary:1,CurrentBranchId:1,CurrentBranchName:1,CurrentDepartmentId:1,CurrentDepartmentName:1,CurrentDesignationId:1,CurrentDesignationName:1,CurrentSupervisorId:1,CurrentSupervisorName:1,Description:1,EffectiveDate:1,EmployeeId:1,EmployeeName:1,Id:1,InsertDate:1,InsertUserId:1,NewBasicSalary:1,NewBranchId:1,NewBranchName:1,NewDepartmentId:1,NewDepartmentName:1,NewDesignationId:1,NewDesignationName:1,NewSupervisorId:1,NewSupervisorName:1,Number:1,PromotorId:1,PromotorName:1,TenantId:1,TenantName:1,TransferCompetencyList:1,TransferReasonList:1,UpdateDate:1,UpdateUserId:1},TransferCompetency:{Id:1,InsertDate:1,InsertUserId:1,ShortNote:1,TenantId:1,TenantName:1,TransferId:1,TransferNumber:1,UpdateDate:1,UpdateUserId:1},TransferReason:{Id:1,InsertDate:1,InsertUserId:1,ShortNote:1,TenantId:1,TenantName:1,TransferId:1,TransferNumber:1,UpdateDate:1,UpdateUserId:1}},Recruitment:{Applicant:{City:1,DateOfBirth:1,Description:1,EducationList:1,Email:1,ExperienceList:1,GenderId:1,GenderName:1,HiringManagerId:1,HiringManagerName:1,Id:1,InsertDate:1,InsertUserId:1,JobTitle:1,Name:1,Number:1,Phone:1,Picture:1,PlaceOfBirth:1,SkillList:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VacancyId:1,VacancyNumber:1,ZipCode:1},ApplicantEducation:{ApplicantId:1,ApplicantName:1,EndDate:1,Grade:1,Id:1,InsertDate:1,InsertUserId:1,SchoolName:1,ShortNote:1,StartDate:1,StudyMajor:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},ApplicantExperience:{ApplicantId:1,ApplicantName:1,CompanyName:1,EndDate:1,Id:1,InsertDate:1,InsertUserId:1,Position:1,Salary:1,StartDate:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},ApplicantTopSkill:{ApplicantId:1,ApplicantName:1,Id:1,InsertDate:1,InsertUserId:1,ProficiencyScore:1,SkillName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Interview:{ApplicantId:1,ApplicantName:1,City:1,Description:1,Email:1,EndDate:1,HiringManagerId:1,HiringManagerName:1,Id:1,InsertDate:1,InsertUserId:1,JobTitle:1,Number:1,Phone:1,ResultList:1,Room:1,StartDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VacancyId:1,VacancyNumber:1,ZipCode:1},InterviewResult:{Id:1,InsertDate:1,InsertUserId:1,InterviewId:1,InterviewNumber:1,ResultName:1,ResultScore:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Vacancy:{CloseDate:1,HiringManagerBranchId:1,HiringManagerBranchName:1,HiringManagerDepartmentId:1,HiringManagerDepartmentName:1,HiringManagerId:1,HiringManagerName:1,Id:1,InsertDate:1,InsertUserId:1,JobDescription:1,JobTitle:1,Number:1,OpenDate:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VacancyBenefitList:1,VacancyRequirementList:1},VacancyBenefit:{Id:1,InsertDate:1,InsertUserId:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VacancyId:1,VacancyNumber:1},VacancyRequirement:{Id:1,InsertDate:1,InsertUserId:1,ShortNote:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VacancyId:1,VacancyNumber:1}},Settings:{Gender:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},MyCompany:{ApplicantNumberLength:1,ApplicantNumberPrefix:1,ApplicantNumberUseDate:1,AppraisalNumberLength:1,AppraisalNumberPrefix:1,AppraisalNumberUseDate:1,AssetHandOverNumberLength:1,AssetHandOverNumberPrefix:1,AssetHandOverNumberUseDate:1,AssetNumberLength:1,AssetNumberPrefix:1,AssetNumberUseDate:1,City:1,ComplaintNumberLength:1,ComplaintNumberPrefix:1,ComplaintNumberUseDate:1,Currency:1,Description:1,Email:1,EmployeeNumberLength:1,EmployeeNumberPrefix:1,EmployeeNumberUseDate:1,EvaluationNumberLength:1,EvaluationNumberPrefix:1,EvaluationNumberUseDate:1,InsertDate:1,InsertUserId:1,InterviewNumberLength:1,InterviewNumberPrefix:1,InterviewNumberUseDate:1,LeaveRequestNumberLength:1,LeaveRequestNumberPrefix:1,LeaveRequestNumberUseDate:1,MaximumUser:1,PayrollNumberLength:1,PayrollNumberPrefix:1,PayrollNumberUseDate:1,Phone:1,PromotionNumberLength:1,PromotionNumberPrefix:1,PromotionNumberUseDate:1,ReimbursementNumberLength:1,ReimbursementNumberPrefix:1,ReimbursementNumberUseDate:1,ResignationNumberLength:1,ResignationNumberPrefix:1,ResignationNumberUseDate:1,SOPNumberLength:1,SOPNumberPrefix:1,SOPNumberUseDate:1,State:1,Street:1,TenantId:1,TenantName:1,TerminationNumberLength:1,TerminationNumberPrefix:1,TerminationNumberUseDate:1,TicketNumberLength:1,TicketNumberPrefix:1,TicketNumberUseDate:1,TransferNumberLength:1,TransferNumberPrefix:1,TransferNumberUseDate:1,UpdateDate:1,UpdateUserId:1,VacancyNumberLength:1,VacancyNumberPrefix:1,VacancyNumberUseDate:1,WarningNumberLength:1,WarningNumberPrefix:1,WarningNumberUseDate:1,ZipCode:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
