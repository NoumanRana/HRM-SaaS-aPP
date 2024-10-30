
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeDeductionGrid extends Serenity.EntityGrid<EmployeeDeductionRow, any> {
        protected getColumnsKey() { return EmployeeDeductionColumns.columnsKey; }
        protected getDialogType() { return EmployeeDeductionDialog; }
        protected getIdProperty() { return EmployeeDeductionRow.idProperty; }
        protected getInsertPermission() { return EmployeeDeductionRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeDeductionRow.localTextPrefix; }
        protected getService() { return EmployeeDeductionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeDeductionRow.Fields.TenantName && x.field != EmployeeDeductionRow.Fields.Id);
            }

            return columns;
        }
    }
}