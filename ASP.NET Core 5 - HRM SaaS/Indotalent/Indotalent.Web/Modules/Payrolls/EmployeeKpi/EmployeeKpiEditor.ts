
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeKpiEditor extends Serenity.Extensions.GridEditorBase<EmployeeKpiRow> {
        protected getColumnsKey() { return EmployeeKpiColumns.columnsKey; }
        protected getDialogType() { return EmployeeKpiDialog; }
        protected getLocalTextPrefix() { return EmployeeKpiRow.localTextPrefix; }


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