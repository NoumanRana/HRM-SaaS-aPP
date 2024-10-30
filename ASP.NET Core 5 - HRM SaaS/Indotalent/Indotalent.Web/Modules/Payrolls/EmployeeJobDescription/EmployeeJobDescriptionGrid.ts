
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeJobDescriptionGrid extends Serenity.EntityGrid<EmployeeJobDescriptionRow, any> {
        protected getColumnsKey() { return EmployeeJobDescriptionColumns.columnsKey; }
        protected getDialogType() { return EmployeeJobDescriptionDialog; }
        protected getIdProperty() { return EmployeeJobDescriptionRow.idProperty; }
        protected getInsertPermission() { return EmployeeJobDescriptionRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeJobDescriptionRow.localTextPrefix; }
        protected getService() { return EmployeeJobDescriptionService.baseUrl; }

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