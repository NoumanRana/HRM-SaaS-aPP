
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeParentEditor extends Serenity.Extensions.GridEditorBase<EmployeeParentRow> {
        protected getColumnsKey() { return EmployeeParentColumns.columnsKey; }
        protected getDialogType() { return EmployeeParentDialog; }
        protected getLocalTextPrefix() { return EmployeeParentRow.localTextPrefix; }


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