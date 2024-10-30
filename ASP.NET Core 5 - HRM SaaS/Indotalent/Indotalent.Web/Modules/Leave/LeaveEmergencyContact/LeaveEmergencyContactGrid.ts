
namespace Indotalent.Leave {

    @Serenity.Decorators.registerClass()
    export class LeaveEmergencyContactGrid extends Serenity.EntityGrid<LeaveEmergencyContactRow, any> {
        protected getColumnsKey() { return LeaveEmergencyContactColumns.columnsKey; }
        protected getDialogType() { return LeaveEmergencyContactDialog; }
        protected getIdProperty() { return LeaveEmergencyContactRow.idProperty; }
        protected getInsertPermission() { return LeaveEmergencyContactRow.insertPermission; }
        protected getLocalTextPrefix() { return LeaveEmergencyContactRow.localTextPrefix; }
        protected getService() { return LeaveEmergencyContactService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}