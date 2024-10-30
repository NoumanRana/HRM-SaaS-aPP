
namespace Indotalent.Leave {

    @Serenity.Decorators.registerClass()
    export class LeaveDelegatedTaskEditor extends Serenity.Extensions.GridEditorBase<LeaveDelegatedTaskRow> {
        protected getColumnsKey() { return LeaveDelegatedTaskColumns.columnsKey; }
        protected getDialogType() { return LeaveDelegatedTaskDialog; }
        protected getLocalTextPrefix() { return LeaveDelegatedTaskRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }


    }
}