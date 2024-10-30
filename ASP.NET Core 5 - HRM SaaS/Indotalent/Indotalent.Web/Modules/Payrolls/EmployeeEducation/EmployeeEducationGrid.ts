
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeEducationGrid extends Serenity.EntityGrid<EmployeeEducationRow, any> {
        protected getColumnsKey() { return EmployeeEducationColumns.columnsKey; }
        protected getDialogType() { return EmployeeEducationDialog; }
        protected getIdProperty() { return EmployeeEducationRow.idProperty; }
        protected getInsertPermission() { return EmployeeEducationRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeEducationRow.localTextPrefix; }
        protected getService() { return EmployeeEducationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeEducationRow.Fields.TenantName && x.field != EmployeeEducationRow.Fields.Id);
            }

            return columns;
        }
    }
}