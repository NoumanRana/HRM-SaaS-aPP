
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class LeaveEmergencyContactDialog extends Serenity.Extensions.GridEditorDialog<LeaveEmergencyContactRow> {
        protected getFormKey() { return LeaveEmergencyContactForm.formKey; }
        protected getLocalTextPrefix() { return LeaveEmergencyContactRow.localTextPrefix; }

        protected form = new LeaveEmergencyContactForm(this.idPrefix);

    }
}