
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class AppraisalDetailGrid extends Serenity.EntityGrid<AppraisalDetailRow, any> {
        protected getColumnsKey() { return AppraisalDetailColumns.columnsKey; }
        protected getDialogType() { return AppraisalDetailDialog; }
        protected getIdProperty() { return AppraisalDetailRow.idProperty; }
        protected getInsertPermission() { return AppraisalDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return AppraisalDetailRow.localTextPrefix; }
        protected getService() { return AppraisalDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}