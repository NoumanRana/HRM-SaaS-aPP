
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeParentGrid extends Serenity.EntityGrid<EmployeeParentRow, any> {
        protected getColumnsKey() { return EmployeeParentColumns.columnsKey; }
        protected getDialogType() { return EmployeeParentDialog; }
        protected getIdProperty() { return EmployeeParentRow.idProperty; }
        protected getInsertPermission() { return EmployeeParentRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeParentRow.localTextPrefix; }
        protected getService() { return EmployeeParentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeParentRow.Fields.TenantName && x.field != EmployeeParentRow.Fields.Id);
            }

            return columns;
        }
    }
}