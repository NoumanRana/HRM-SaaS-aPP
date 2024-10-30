
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class GenderGrid extends Serenity.EntityGrid<GenderRow, any> {
        protected getColumnsKey() { return GenderColumns.columnsKey; }
        protected getDialogType() { return GenderDialog; }
        protected getIdProperty() { return GenderRow.idProperty; }
        protected getInsertPermission() { return GenderRow.insertPermission; }
        protected getLocalTextPrefix() { return GenderRow.localTextPrefix; }
        protected getService() { return GenderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != GenderRow.Fields.TenantName && x.field != GenderRow.Fields.Id);
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