
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class InterviewResultEditor extends Serenity.Extensions.GridEditorBase<InterviewResultRow> {
        protected getColumnsKey() { return InterviewResultColumns.columnsKey; }
        protected getDialogType() { return InterviewResultDialog; }
        protected getLocalTextPrefix() { return InterviewResultRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }


    }
}