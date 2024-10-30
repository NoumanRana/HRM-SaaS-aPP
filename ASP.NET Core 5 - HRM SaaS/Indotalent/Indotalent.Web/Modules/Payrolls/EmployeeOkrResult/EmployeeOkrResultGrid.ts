
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeOkrResultGrid extends Serenity.EntityGrid<EmployeeOkrResultRow, any> {
        protected getColumnsKey() { return EmployeeOkrResultColumns.columnsKey; }
        protected getDialogType() { return EmployeeOkrResultDialog; }
        protected getIdProperty() { return EmployeeOkrResultRow.idProperty; }
        protected getInsertPermission() { return EmployeeOkrResultRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeOkrResultRow.localTextPrefix; }
        protected getService() { return EmployeeOkrResultService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeOkrResultRow.Fields.TenantName && x.field != EmployeeOkrResultRow.Fields.Id);
            }

            return columns;
        }
    }
}