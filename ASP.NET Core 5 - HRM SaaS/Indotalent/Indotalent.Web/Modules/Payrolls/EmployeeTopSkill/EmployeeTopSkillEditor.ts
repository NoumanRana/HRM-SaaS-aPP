
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeTopSkillEditor extends Serenity.Extensions.GridEditorBase<EmployeeTopSkillRow> {
        protected getColumnsKey() { return EmployeeTopSkillColumns.columnsKey; }
        protected getDialogType() { return EmployeeTopSkillDialog; }
        protected getLocalTextPrefix() { return EmployeeTopSkillRow.localTextPrefix; }


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