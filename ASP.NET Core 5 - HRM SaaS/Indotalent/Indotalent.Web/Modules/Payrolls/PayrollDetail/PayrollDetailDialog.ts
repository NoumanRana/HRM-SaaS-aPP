
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailDialog extends Serenity.Extensions.GridEditorDialog<PayrollDetailRow> {
        protected getFormKey() { return PayrollDetailForm.formKey; }
        protected getLocalTextPrefix() { return PayrollDetailRow.localTextPrefix; }

        protected form = new PayrollDetailForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.form.EmployeeId.changeSelect2(args => {
                var employeeId = this.form.EmployeeId.value;
                if (Q.isEmptyOrNull(employeeId)) {
                    return;
                }
                EmployeeService.Retrieve({
                    EntityId: employeeId
                }, response => {
                    this.form.BankAccount.value = response.Entity.BankAccountForPayroll;
                    this.form.BankName.value = response.Entity.BankNameForPayroll;
                    this.form.BasicSalary.value = response.Entity.BasicSalary;

                    var requestIncome = [] as Serenity.ListRequest;
                    EmployeeIncomeService.List({
                        Criteria: Serenity.Criteria.and(requestIncome.Criteria, [['EmployeeId'], '=', employeeId])
                    }, response => {
                        var items = [];
                        for (var item of response.Entities) {
                            items.push({
                                IncomeId: item.IncomeId,
                                IncomeName: item.IncomeName,
                                Amount: item.Amount
                            });
                        }
                        this.form.IncomeList.value = items;
                    });

                    var requestDeduction = [] as Serenity.ListRequest;
                    EmployeeDeductionService.List({
                        Criteria: Serenity.Criteria.and(requestDeduction.Criteria, [['EmployeeId'], '=', employeeId])
                    }, response => {
                        var items = [];
                        for (var item of response.Entities) {
                            items.push({
                                DeductionId: item.DeductionId,
                                DeductionName: item.DeductionName,
                                Amount: item.Amount
                            });
                        }
                        this.form.DeductionList.value = items;
                    });

                    this.recalculateTakeHomePay();
                });

            });

            this.form.BasicSalary.change(() => {
                this.recalculateTakeHomePay();
            });

            //income
            (this.form.IncomeList.view as any).onRowCountChanged.subscribe(() => {
                this.recalculateTakeHomePay();
            });

            (this.form.IncomeList.view as any).onDataChanged.subscribe(() => {
                this.recalculateTakeHomePay();
            });

            //deduction
            (this.form.DeductionList.view as any).onRowCountChanged.subscribe(() => {
                this.recalculateTakeHomePay();
            });

            (this.form.DeductionList.view as any).onDataChanged.subscribe(() => {
                this.recalculateTakeHomePay();
            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        private recalculateIncome() {
            this.form.TotalIncome.value = 0;
            for (var item of this.form.IncomeList.getItems()) {
                this.form.TotalIncome.value += item.Amount;
            }
        }

        private recalculateDeduction() {
            this.form.TotalDeduction.value = 0;
            for (var item of this.form.DeductionList.getItems()) {
                this.form.TotalDeduction.value += item.Amount;
            }
        }

        private recalculateTakeHomePay() {
            this.recalculateIncome();
            this.recalculateDeduction();

            this.form.TakeHomePay.value = this.form.BasicSalary.value + this.form.TotalIncome.value - this.form.TotalDeduction.value;
        }

        protected updateInterface(): void {
            super.updateInterface();
            if (this.isNew()) {
                this.deleteButton.show();
                this.deleteButton.toggleClass('disabled', true);
            }

            this.toolbar.findButton('print-salary-slip').toggle(this.isEditMode());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.form.Id.element.prop('disabled', true);
            this.form.BankAccount.element.prop('disabled', true);
            this.form.BankName.element.prop('disabled', true);
            this.form.BasicSalary.element.prop('disabled', true);
            this.form.TotalIncome.element.prop('disabled', true);
            this.form.TotalDeduction.element.prop('disabled', true);
            this.form.TakeHomePay.element.prop('disabled', true);

            this.payrollDetailId = this.form.Id.value;
            this.form.Id.getGridField().toggle(false);
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

        private payrollDetailId;
        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print Salary Slip',
                cssClass: 'export-pdf-button print-salary-slip',
                reportKey: 'PayrollDetailPrint',
                getParams: () => ({
                    Id: this.payrollDetailId
                })
            }));

            return buttons;
        }

    }
}