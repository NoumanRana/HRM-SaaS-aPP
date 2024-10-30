
namespace Indotalent.Leave {

    @Serenity.Decorators.registerClass()
    export class LeaveDelegatedTaskDialog extends Serenity.Extensions.GridEditorDialog<LeaveDelegatedTaskRow> {
        protected getFormKey() { return LeaveDelegatedTaskForm.formKey; }
        protected getLocalTextPrefix() { return LeaveDelegatedTaskRow.localTextPrefix; }

        protected form = new LeaveDelegatedTaskForm(this.idPrefix);

    }
}