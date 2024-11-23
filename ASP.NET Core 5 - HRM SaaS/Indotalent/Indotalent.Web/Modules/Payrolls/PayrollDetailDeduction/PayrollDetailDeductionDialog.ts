namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailDeductionDialog extends Serenity.Extensions.GridEditorDialog<PayrollDetailDeductionRow> {
        protected getFormKey() { return PayrollDetailDeductionForm.formKey; }
        protected getLocalTextPrefix() { return PayrollDetailDeductionRow.localTextPrefix; }

        protected form = new PayrollDetailDeductionForm(this.idPrefix);

        private employee: EmployeeRow;
        private totalAllowances: number = 0;
        private basicSalary: number = 0;
        private taxSlabs: SalaryTaxSlabRow[] = [];
        private allowanceThreshold: number = 0; 
        constructor() {
            super();

            this.form.DeductionId.changeSelect2(() => {
                this.calculateDeductionAmount();
            });

            this.fetchTaxSlabs();
            this.fetchAllowanceThreshold();
        }
        private fetchAllowanceThreshold(): void {
            ThresholdService.List({
                Criteria: [['Name'], '=', 'AllowanceThreshold']
            }, response => {
                if (response.Entities && response.Entities.length > 0) {
                    this.allowanceThreshold = response.Entities[0].Value || 500; // Default to 500 if not found
                    console.log("Allowance threshold loaded:", this.allowanceThreshold);
                }
            });
        }


        private fetchTaxSlabs(): void {
            SalaryTaxSlabService.List({}, response => {
                if (response.Entities) {
                    // Explicitly type the Entities as SalaryTaxSlabRow[]
                    this.taxSlabs = (response.Entities as SalaryTaxSlabRow[]).sort((a, b) => {
                        const fromA = a.From || 0;
                        const fromB = b.From || 0;
                        return fromA - fromB;
                    });
                    console.log("Tax slabs loaded:", this.taxSlabs);
                }
            });
        }
        // Helper method to find applicable tax slab
        private findApplicableTaxSlab(taxableAmount: number): SalaryTaxSlabRow | null {
            for (let i = 0; i < this.taxSlabs.length; i++) {
                const slab = this.taxSlabs[i];
                const fromAmount = slab.From || 0;
                const toAmount = slab.To || 0;

                if (taxableAmount >= fromAmount && taxableAmount <= toAmount) {
                    return slab;
                }
            }
            return null;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            var employeeId = PayrollDetailDialog.selectedEmployeeId;

            if (!Q.isEmptyOrNull(employeeId)) {
                EmployeeService.Retrieve({
                    EntityId: employeeId
                }, response => {
                    this.employee = response.Entity;
                    this.basicSalary = this.employee.BasicSalary || 0;
                    console.log("Employee details retrieved:", this.employee);

                    this.fetchEmployeeIncomes(Number(employeeId));
                });
            }
        }

        private fetchEmployeeIncomes(employeeId: number): void {
            EmployeeIncomeService.List({
                Criteria: [['EmployeeId'], '=', employeeId]
            }, response => {
                this.totalAllowances = 0;
                if (response.Entities && response.Entities.length > 0) {
                    this.totalAllowances = response.Entities.reduce((sum, income) =>
                        sum + (income.Amount || 0), 0);
                }

                console.log("Total Allowances calculated:", this.totalAllowances);
                this.calculateDeductionAmount();
            });
        }

        private calculatePAYE(taxableAmount: number): number {
            if (!this.taxSlabs || this.taxSlabs.length === 0) {
                console.error("Tax slabs not loaded");
                return 0;
            }

            let paye = 0;
            const applicableSlab = this.findApplicableTaxSlab(taxableAmount);

            if (applicableSlab) {
                // Calculate PAYE based on the applicable slab
                const exemptedAmount = applicableSlab.ExemptedAmount || 0;
                const rate = applicableSlab.Rate || 0;

                // Calculate taxable portion (amount above exempted amount)
                const taxablePortion = Math.max(0, taxableAmount - exemptedAmount);

                // Calculate PAYE for current slab
                paye = taxablePortion * rate;

                // Add accumulated tax from previous slabs
                //for (let i = 0; i < this.taxSlabs.length; i++) {
                //    const currentSlab = this.taxSlabs[i];
                //    if (currentSlab.TaxSlabId < applicableSlab.TaxSlabId) {
                //        const slabFrom = currentSlab.From || 0;
                //        const slabTo = Math.min(currentSlab.To || 0, exemptedAmount);
                //        const slabRate = currentSlab.Rate || 0;

                //        if (slabRate > 0) {  // Skip zero-rate slabs
                //            const slabTaxableAmount = slabTo - slabFrom;
                //            paye += slabTaxableAmount * slabRate;
                //        }
                //    }
                //}
            }

            console.log("PAYE Calculation:", {
                taxableAmount,
                applicableSlab,
                calculatedPAYE: paye
            });

            return paye;
        }

        private calculateDeductionNewVersion(): void {
            var deductionId = this.form.DeductionId.value;

            if (!this.employee) {
                Q.notifyError("Employee details are not yet loaded!");
                return;
            }

            if (Q.isEmptyOrNull(deductionId)) {
                this.form.Amount.value = null;
                return;
            }

            DeductionService.Retrieve({
                EntityId: deductionId
            }, response => {
                const deduction = response.Entity;

                if (deduction.Name === 'NASSIT') {
                    const basicSalary = this.basicSalary ;
                    if (basicSalary && deduction.DeductionRate) {
                        const deductionAmount = basicSalary * deduction.DeductionRate;
                        this.form.Amount.value = deductionAmount;
                        console.log("NASSIT deduction amount calculated:", deductionAmount);
                    }
                } else if (deduction.Name === 'PAYE') {
                    if (this.basicSalary !== undefined ) {
                        const grossSalary = this.basicSalary + this.totalAllowances;
                        const nassitDeduction = this.basicSalary * deduction.DeductionRate;
                        const taxableAllowance = Math.max(this.totalAllowances - this.allowanceThreshold, 0);
                        const taxableAmount = (taxableAllowance > 0) ? (this.basicSalary - nassitDeduction) + taxableAllowance : (this.basicSalary - nassitDeduction);

                        // Calculate PAYE using dynamic tax slabs
                        const paye = this.calculatePAYE(taxableAmount);
                        this.form.Amount.value = paye;

                        console.log({
                            grossSalary,
                            nassitDeduction,
                            totalAllowances: this.totalAllowances,
                            taxableAllowance,
                            taxableAmount,
                            paye
                        });
                    }
                } else {
                    this.form.Amount.value = null;
                    console.log("Non-NASSIT/PAYE deduction selected, clearing amount.");
                }
            });
        }

        private calculateDeductionAmount(): void {
            const isNewVersion = true;
            if (isNewVersion) {
                this.calculateDeductionNewVersion();
            }
        }
    }
}