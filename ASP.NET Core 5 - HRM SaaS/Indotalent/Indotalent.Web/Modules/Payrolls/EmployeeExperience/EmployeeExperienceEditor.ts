
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeExperienceEditor extends Serenity.Extensions.GridEditorBase<EmployeeExperienceRow> {
        protected getColumnsKey() { return EmployeeExperienceColumns.columnsKey; }
        protected getDialogType() { return EmployeeExperienceDialog; }
        protected getLocalTextPrefix() { return EmployeeExperienceRow.localTextPrefix; }


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