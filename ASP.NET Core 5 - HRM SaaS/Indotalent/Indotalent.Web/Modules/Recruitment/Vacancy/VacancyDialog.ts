
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class VacancyDialog extends Serenity.EntityDialog<VacancyRow, any> {
        protected getFormKey() { return VacancyForm.formKey; }
        protected getIdProperty() { return VacancyRow.idProperty; }
        protected getLocalTextPrefix() { return VacancyRow.localTextPrefix; }
        protected getNameProperty() { return VacancyRow.nameProperty; }
        protected getService() { return VacancyService.baseUrl; }
        protected getDeletePermission() { return VacancyRow.deletePermission; }
        protected getInsertPermission() { return VacancyRow.insertPermission; }
        protected getUpdatePermission() { return VacancyRow.updatePermission; }

        protected form = new VacancyForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.form.VacancyRequirementList.element.css('height', '300px');
            this.form.VacancyBenefitList.element.css('height', '300px');

            this.form.HiringManagerId.changeSelect2(args => {
                var hiringManagerId = this.form.HiringManagerId.value;
                if (Q.isEmptyOrNull(hiringManagerId)) {
                    return;
                }
                Payrolls.EmployeeService.Retrieve({
                    EntityId: hiringManagerId
                }, response => {
                    this.form.HiringManagerBranchId.value = response.Entity.BranchId != null ? response.Entity.BranchId.toString() : null;
                    this.form.HiringManagerDepartmentId.value = response.Entity.DepartmentId != null ? response.Entity.DepartmentId.toString() : null;

                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }


        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.HiringManagerBranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.HiringManagerDepartmentId, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('VacancyPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button VacancyPrint',
                reportKey: 'VacancyPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }


        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

    }
}