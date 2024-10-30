
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class LeaveEmergencyContactEditor extends Serenity.Extensions.GridEditorBase<LeaveEmergencyContactRow> {
        protected getColumnsKey() { return LeaveEmergencyContactColumns.columnsKey; }
        protected getDialogType() { return LeaveEmergencyContactDialog; }
        protected getLocalTextPrefix() { return LeaveEmergencyContactRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }


    }
}