
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class ReimbursementDetailEditor extends Serenity.Extensions.GridEditorBase<ReimbursementDetailRow> {
        protected getColumnsKey() { return ReimbursementDetailColumns.columnsKey; }
        protected getDialogType() { return ReimbursementDetailDialog; }
        protected getLocalTextPrefix() { return ReimbursementDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}