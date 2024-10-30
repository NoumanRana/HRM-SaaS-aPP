
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class InterviewResultGrid extends Serenity.EntityGrid<InterviewResultRow, any> {
        protected getColumnsKey() { return InterviewResultColumns.columnsKey; }
        protected getDialogType() { return InterviewResultDialog; }
        protected getIdProperty() { return InterviewResultRow.idProperty; }
        protected getInsertPermission() { return InterviewResultRow.insertPermission; }
        protected getLocalTextPrefix() { return InterviewResultRow.localTextPrefix; }
        protected getService() { return InterviewResultService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}