export interface ChargeDetail {
    intitule: string,
    dateTimeCharge: Date,
    garageName: string | null,
    garageLocation: string | null,
    garageRent: number | null,
    userName: string | null,
    userSurname: string | null,
    userEmail: string | null,
    userSalary: number | null,
    amount: number | null
}
