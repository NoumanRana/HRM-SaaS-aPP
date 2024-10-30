
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class TimesheetGrid extends Serenity.EntityGrid<TimesheetRow, any> {
        protected getColumnsKey() { return TimesheetColumns.columnsKey; }
        protected getIdProperty() { return TimesheetRow.idProperty; }
        protected getNameProperty() { return TimesheetRow.nameProperty; }
        protected getLocalTextPrefix() { return TimesheetRow.localTextPrefix; }
        protected getService() { return TimesheetService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected updateInterface(): void {
            super.updateInterface();
            var addButton = this.toolbar.findButton('add-button');
            addButton.hide();
        }


        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: TimesheetService.baseUrl + '/ListExcel',
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