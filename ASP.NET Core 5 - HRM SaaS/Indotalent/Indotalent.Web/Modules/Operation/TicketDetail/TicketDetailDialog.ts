
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class TicketDetailDialog extends Serenity.Extensions.GridEditorDialog<TicketDetailRow> {
        protected getFormKey() { return TicketDetailForm.formKey; }
        protected getLocalTextPrefix() { return TicketDetailRow.localTextPrefix; }

        protected form = new TicketDetailForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.form.ResponseBy.value = Authorization.userDefinition.Username;

            Serenity.EditorUtils.setReadOnly(this.form.ResponseBy, true);
            Serenity.EditorUtils.setReadOnly(this.form.ResponseAt, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            if (this.form.ResponseBy.value != '') {
                if (this.form.ResponseBy.value != Authorization.userDefinition.Username) {
                    this.toolbar.findButton('save-and-close-button').toggleClass('disabled', true);
                    this.toolbar.findButton('delete-button').toggleClass('disabled', true);
                }
            }

        }

    }
}