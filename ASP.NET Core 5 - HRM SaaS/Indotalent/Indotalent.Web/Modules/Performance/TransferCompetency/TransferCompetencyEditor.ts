
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class TransferCompetencyEditor extends Serenity.Extensions.GridEditorBase<TransferCompetencyRow> {
        protected getColumnsKey() { return TransferCompetencyColumns.columnsKey; }
        protected getDialogType() { return TransferCompetencyDialog; }
        protected getLocalTextPrefix() { return TransferCompetencyRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}