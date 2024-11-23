namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class SalaryTaxSlabGrid extends Serenity.EntityGrid<SalaryTaxSlabRow, any> {
        protected getColumnsKey() { return SalaryTaxSlabColumns.columnsKey; }
        protected getDialogType() { return SalaryTaxSlabDialog; }
        protected getIdProperty() { return SalaryTaxSlabRow.idProperty; }
        protected getInsertPermission() { return SalaryTaxSlabRow.insertPermission; }
        protected getLocalTextPrefix() { return SalaryTaxSlabRow.localTextPrefix; }
        protected getService() { return SalaryTaxSlabService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            // Only filter out fields that actually exist in SalaryTaxSlabRow
            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                // Example of filtering out any custom field you do have, if needed
                columns = columns.filter(x => x.field != SalaryTaxSlabRow.Fields.ExemptedAmount);
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

            buttons.push({
                title: 'Manage Thresholds',
                cssClass: 'manage-thresholds-button',
                icon: 'fa-cog',
                onClick: () => {
                    // Replace dialog opening with window.location.href
                    window.location.href = Q.resolveUrl('~/Payrolls/Threshold');
                }
            });

            return buttons;
        }
    }
}
