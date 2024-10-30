
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeEducationEditor extends Serenity.Extensions.GridEditorBase<EmployeeEducationRow> {
        protected getColumnsKey() { return EmployeeEducationColumns.columnsKey; }
        protected getDialogType() { return EmployeeEducationDialog; }
        protected getLocalTextPrefix() { return EmployeeEducationRow.localTextPrefix; }


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