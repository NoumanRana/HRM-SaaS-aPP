
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeOkrObjectiveGrid extends Serenity.EntityGrid<EmployeeOkrObjectiveRow, any> {
        protected getColumnsKey() { return EmployeeOkrObjectiveColumns.columnsKey; }
        protected getDialogType() { return EmployeeOkrObjectiveDialog; }
        protected getIdProperty() { return EmployeeOkrObjectiveRow.idProperty; }
        protected getInsertPermission() { return EmployeeOkrObjectiveRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeOkrObjectiveRow.localTextPrefix; }
        protected getService() { return EmployeeOkrObjectiveService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeOkrObjectiveRow.Fields.TenantName && x.field != EmployeeOkrObjectiveRow.Fields.Id);
            }

            return columns;
        }
    }
}