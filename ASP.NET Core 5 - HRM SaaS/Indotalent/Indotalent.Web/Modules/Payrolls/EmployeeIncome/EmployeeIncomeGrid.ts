
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeIncomeGrid extends Serenity.EntityGrid<EmployeeIncomeRow, any> {
        protected getColumnsKey() { return EmployeeIncomeColumns.columnsKey; }
        protected getDialogType() { return EmployeeIncomeDialog; }
        protected getIdProperty() { return EmployeeIncomeRow.idProperty; }
        protected getInsertPermission() { return EmployeeIncomeRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeIncomeRow.localTextPrefix; }
        protected getService() { return EmployeeIncomeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeIncomeRow.Fields.TenantName && x.field != EmployeeIncomeRow.Fields.Id);
            }

            return columns;
        }
    }
}