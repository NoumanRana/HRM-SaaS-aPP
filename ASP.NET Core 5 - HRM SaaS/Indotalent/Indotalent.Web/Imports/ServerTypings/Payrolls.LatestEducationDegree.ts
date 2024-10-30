namespace Indotalent.Payrolls {
    export enum LatestEducationDegree {
        HighSchool = 1,
        Diploma = 2,
        Bachelor = 3,
        Master = 4,
        Doctor = 5
    }
    Serenity.Decorators.registerEnumType(LatestEducationDegree, 'Indotalent.Payrolls.LatestEducationDegree', 'Payrolls.LatestEducationDegree');
}
