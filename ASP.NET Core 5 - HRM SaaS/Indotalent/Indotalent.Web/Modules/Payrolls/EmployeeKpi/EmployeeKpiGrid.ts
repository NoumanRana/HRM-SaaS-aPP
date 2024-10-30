
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeKpiGrid extends Serenity.EntityGrid<EmployeeKpiRow, any> {
        protected getColumnsKey() { return EmployeeKpiColumns.columnsKey; }
        protected getDialogType() { return EmployeeKpiDialog; }
        protected getIdProperty() { return EmployeeKpiRow.idProperty; }
        protected getInsertPermission() { return EmployeeKpiRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeKpiRow.localTextPrefix; }
        protected getService() { return EmployeeKpiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeKpiRow.Fields.TenantName && x.field != EmployeeKpiRow.Fields.Id);
            }

            return columns;
        }
    }
}