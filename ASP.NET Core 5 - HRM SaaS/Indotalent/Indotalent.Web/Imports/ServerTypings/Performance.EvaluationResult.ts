namespace Indotalent.Performance {
    export enum EvaluationResult {
        Satisfactory = 1,
        Adequate = 2,
        NeedsImprovement = 3
    }
    Serenity.Decorators.registerEnumType(EvaluationResult, 'Indotalent.Performance.EvaluationResult', 'Performance.EvaluationResult');
}
