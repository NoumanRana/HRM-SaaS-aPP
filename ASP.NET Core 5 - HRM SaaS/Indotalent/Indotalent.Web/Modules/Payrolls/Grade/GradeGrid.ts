
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class GradeGrid extends Serenity.EntityGrid<GradeRow, any> {
        protected getColumnsKey() { return GradeColumns.columnsKey; }
        protected getDialogType() { return GradeDialog; }
        protected getIdProperty() { return GradeRow.idProperty; }
        protected getInsertPermission() { return GradeRow.insertPermission; }
        protected getLocalTextPrefix() { return GradeRow.localTextPrefix; }
        protected getService() { return GradeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != GradeRow.Fields.TenantName && x.field != GradeRow.Fields.Id);
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