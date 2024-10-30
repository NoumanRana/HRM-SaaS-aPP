
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeDocumentGrid extends Serenity.EntityGrid<EmployeeDocumentRow, any> {
        protected getColumnsKey() { return EmployeeDocumentColumns.columnsKey; }
        protected getDialogType() { return EmployeeDocumentDialog; }
        protected getIdProperty() { return EmployeeDocumentRow.idProperty; }
        protected getInsertPermission() { return EmployeeDocumentRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeDocumentRow.localTextPrefix; }
        protected getService() { return EmployeeDocumentService.baseUrl; }

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