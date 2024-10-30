
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class EvaluationGrid extends Serenity.EntityGrid<EvaluationRow, any> {
        protected getColumnsKey() { return EvaluationColumns.columnsKey; }
        protected getDialogType() { return EvaluationDialog; }
        protected getIdProperty() { return EvaluationRow.idProperty; }
        protected getInsertPermission() { return EvaluationRow.insertPermission; }
        protected getLocalTextPrefix() { return EvaluationRow.localTextPrefix; }
        protected getService() { return EvaluationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
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


        protected getColumns() {
            var columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EvaluationRow.Fields.TenantName && x.field != EvaluationRow.Fields.Id);
            }

            return columns;
        }
    }
}