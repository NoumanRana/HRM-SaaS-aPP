
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class ReimbursementDetailDialog extends Serenity.Extensions.GridEditorDialog<ReimbursementDetailRow> {
        protected getFormKey() { return ReimbursementDetailForm.formKey; }
        protected getLocalTextPrefix() { return ReimbursementDetailRow.localTextPrefix; }

        protected form = new ReimbursementDetailForm(this.idPrefix);

    }
}