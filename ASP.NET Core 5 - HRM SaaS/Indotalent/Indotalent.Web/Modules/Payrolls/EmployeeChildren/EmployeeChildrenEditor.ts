
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeChildrenEditor extends Serenity.Extensions.GridEditorBase<EmployeeChildrenRow> {
        protected getColumnsKey() { return EmployeeChildrenColumns.columnsKey; }
        protected getDialogType() { return EmployeeChildrenDialog; }
        protected getLocalTextPrefix() { return EmployeeChildrenRow.localTextPrefix; }


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