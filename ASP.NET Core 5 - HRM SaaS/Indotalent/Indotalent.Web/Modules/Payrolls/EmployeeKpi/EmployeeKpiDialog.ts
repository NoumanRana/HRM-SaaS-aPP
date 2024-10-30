
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeKpiDialog extends Serenity.Extensions.GridEditorDialog<EmployeeKpiRow> {
        protected getFormKey() { return EmployeeKpiForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeKpiRow.localTextPrefix; }

        protected form = new EmployeeKpiForm(this.idPrefix);

    }
}