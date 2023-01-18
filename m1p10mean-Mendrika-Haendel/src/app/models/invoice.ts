import { CarProblem } from "./car-problem";

export interface Invoice {
    clientName: string,
    clientSurname: string,
    clientContact: string,
    clientEmail: string,
    carMark: string,
    carModel: string,
    numberPlate: string,
    color: string,
    carProblem: CarProblem[],
    amount: number,
    status: string,
    garageName: string,
    garageLocation: string,
    userName: string,
    userSurname: string,
    userContact: string
}
