
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeChildrenGrid extends Serenity.EntityGrid<EmployeeChildrenRow, any> {
        protected getColumnsKey() { return EmployeeChildrenColumns.columnsKey; }
        protected getDialogType() { return EmployeeChildrenDialog; }
        protected getIdProperty() { return EmployeeChildrenRow.idProperty; }
        protected getInsertPermission() { return EmployeeChildrenRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeChildrenRow.localTextPrefix; }
        protected getService() { return EmployeeChildrenService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeChildrenRow.Fields.TenantName && x.field != EmployeeChildrenRow.Fields.Id);
            }

            return columns;
        }
    }
}