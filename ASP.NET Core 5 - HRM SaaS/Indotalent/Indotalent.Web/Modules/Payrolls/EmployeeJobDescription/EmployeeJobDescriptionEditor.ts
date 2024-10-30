
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeJobDescriptionEditor extends Serenity.Extensions.GridEditorBase<EmployeeJobDescriptionRow> {
        protected getColumnsKey() { return EmployeeJobDescriptionColumns.columnsKey; }
        protected getDialogType() { return EmployeeJobDescriptionDialog; }
        protected getLocalTextPrefix() { return EmployeeJobDescriptionRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeJobDescriptionRow.Fields.TenantName && x.field != EmployeeJobDescriptionRow.Fields.Id);
            }

            return columns;
        }


    }
}