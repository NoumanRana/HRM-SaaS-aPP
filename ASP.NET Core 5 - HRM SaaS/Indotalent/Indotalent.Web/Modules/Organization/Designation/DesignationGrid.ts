
namespace Indotalent.Organization {

    @Serenity.Decorators.registerClass()
    export class DesignationGrid extends Serenity.EntityGrid<DesignationRow, any> {
        protected getColumnsKey() { return DesignationColumns.columnsKey; }
        protected getDialogType() { return DesignationDialog; }
        protected getIdProperty() { return DesignationRow.idProperty; }
        protected getInsertPermission() { return DesignationRow.insertPermission; }
        protected getLocalTextPrefix() { return DesignationRow.localTextPrefix; }
        protected getService() { return DesignationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != DesignationRow.Fields.TenantName && x.field != DesignationRow.Fields.Id);
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