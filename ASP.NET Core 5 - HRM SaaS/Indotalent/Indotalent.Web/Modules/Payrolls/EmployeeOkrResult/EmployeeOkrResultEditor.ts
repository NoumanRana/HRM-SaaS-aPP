
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeOkrResultEditor extends Serenity.Extensions.GridEditorBase<EmployeeOkrResultRow> {
        protected getColumnsKey() { return EmployeeOkrResultColumns.columnsKey; }
        protected getDialogType() { return EmployeeOkrResultDialog; }
        protected getLocalTextPrefix() { return EmployeeOkrResultRow.localTextPrefix; }


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