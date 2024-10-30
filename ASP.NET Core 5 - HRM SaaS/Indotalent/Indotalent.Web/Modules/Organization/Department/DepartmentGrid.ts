
namespace Indotalent.Organization {

    @Serenity.Decorators.registerClass()
    export class DepartmentGrid extends Serenity.EntityGrid<DepartmentRow, any> {
        protected getColumnsKey() { return DepartmentColumns.columnsKey; }
        protected getDialogType() { return DepartmentDialog; }
        protected getIdProperty() { return DepartmentRow.idProperty; }
        protected getInsertPermission() { return DepartmentRow.insertPermission; }
        protected getLocalTextPrefix() { return DepartmentRow.localTextPrefix; }
        protected getService() { return DepartmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != DepartmentRow.Fields.TenantName && x.field != DepartmentRow.Fields.Id);
            }

            return columns;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: this.getService() + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}