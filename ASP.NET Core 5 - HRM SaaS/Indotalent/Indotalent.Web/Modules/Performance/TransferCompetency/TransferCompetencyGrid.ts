
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class TransferCompetencyGrid extends Serenity.EntityGrid<TransferCompetencyRow, any> {
        protected getColumnsKey() { return TransferCompetencyColumns.columnsKey; }
        protected getDialogType() { return TransferCompetencyDialog; }
        protected getIdProperty() { return TransferCompetencyRow.idProperty; }
        protected getInsertPermission() { return TransferCompetencyRow.insertPermission; }
        protected getLocalTextPrefix() { return TransferCompetencyRow.localTextPrefix; }
        protected getService() { return TransferCompetencyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}