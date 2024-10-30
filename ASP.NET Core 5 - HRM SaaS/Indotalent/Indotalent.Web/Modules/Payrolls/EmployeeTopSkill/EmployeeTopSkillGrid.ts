
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeTopSkillGrid extends Serenity.EntityGrid<EmployeeTopSkillRow, any> {
        protected getColumnsKey() { return EmployeeTopSkillColumns.columnsKey; }
        protected getDialogType() { return EmployeeTopSkillDialog; }
        protected getIdProperty() { return EmployeeTopSkillRow.idProperty; }
        protected getInsertPermission() { return EmployeeTopSkillRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeTopSkillRow.localTextPrefix; }
        protected getService() { return EmployeeTopSkillService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeTopSkillRow.Fields.TenantName && x.field != EmployeeTopSkillRow.Fields.Id);
            }

            return columns;
        }
    }
}