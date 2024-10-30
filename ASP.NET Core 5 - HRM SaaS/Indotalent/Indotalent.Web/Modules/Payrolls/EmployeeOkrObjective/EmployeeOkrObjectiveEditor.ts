
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeOkrObjectiveEditor extends Serenity.Extensions.GridEditorBase<EmployeeOkrObjectiveRow> {
        protected getColumnsKey() { return EmployeeOkrObjectiveColumns.columnsKey; }
        protected getDialogType() { return EmployeeOkrObjectiveDialog; }
        protected getLocalTextPrefix() { return EmployeeOkrObjectiveRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeOkrObjectiveRow.Fields.TenantName && x.field != EmployeeOkrObjectiveRow.Fields.Id);
            }

            return columns;
        }


    }
}