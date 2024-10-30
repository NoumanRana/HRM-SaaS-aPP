
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeExperienceGrid extends Serenity.EntityGrid<EmployeeExperienceRow, any> {
        protected getColumnsKey() { return EmployeeExperienceColumns.columnsKey; }
        protected getDialogType() { return EmployeeExperienceDialog; }
        protected getIdProperty() { return EmployeeExperienceRow.idProperty; }
        protected getInsertPermission() { return EmployeeExperienceRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeExperienceRow.localTextPrefix; }
        protected getService() { return EmployeeExperienceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeExperienceRow.Fields.TenantName && x.field != EmployeeExperienceRow.Fields.Id);
            }

            return columns;
        }
    }
}