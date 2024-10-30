
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeDocumentEditor extends Serenity.Extensions.GridEditorBase<EmployeeDocumentRow> {
        protected getColumnsKey() { return EmployeeDocumentColumns.columnsKey; }
        protected getDialogType() { return EmployeeDocumentDialog; }
        protected getLocalTextPrefix() { return EmployeeDocumentRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeDocumentRow.Fields.TenantName && x.field != EmployeeDocumentRow.Fields.Id);
            }

            return columns;
        }


    }
}