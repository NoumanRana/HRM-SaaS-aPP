namespace Indotalent.Performance {
    export interface PromotionForm {
        Number: Serenity.StringEditor;
        EmployeeId: Serenity.LookupEditor;
        PromotorId: Serenity.LookupEditor;
        EffectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        CurrentBasicSalary: Serenity.DecimalEditor;
        CurrentBranchId: Serenity.LookupEditor;
        CurrentDepartmentId: Serenity.LookupEditor;
        CurrentDesignationId: Serenity.LookupEditor;
        CurrentSupervisorId: Serenity.LookupEditor;
        NewBasicSalary: Serenity.DecimalEditor;
        NewBranchId: Serenity.LookupEditor;
        NewDepartmentId: Serenity.LookupEditor;
        NewDesignationId: Serenity.LookupEditor;
        NewSupervisorId: Serenity.LookupEditor;
        PromotionReasonList: PromotionReasonEditor;
        PromotionCompetencyList: PromotionCompetencyEditor;
    }

    export class PromotionForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.Promotion';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PromotionForm.init)  {
                PromotionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.DecimalEditor;
                var w5 = PromotionReasonEditor;
                var w6 = PromotionCompetencyEditor;

                Q.initFormType(PromotionForm, [
                    'Number', w0,
                    'EmployeeId', w1,
                    'PromotorId', w1,
                    'EffectiveDate', w2,
                    'Description', w3,
                    'CurrentBasicSalary', w4,
                    'CurrentBranchId', w1,
                    'CurrentDepartmentId', w1,
                    'CurrentDesignationId', w1,
                    'CurrentSupervisorId', w1,
                    'NewBasicSalary', w4,
                    'NewBranchId', w1,
                    'NewDepartmentId', w1,
                    'NewDesignationId', w1,
                    'NewSupervisorId', w1,
                    'PromotionReasonList', w5,
                    'PromotionCompetencyList', w6
                ]);
            }
        }
    }
}
