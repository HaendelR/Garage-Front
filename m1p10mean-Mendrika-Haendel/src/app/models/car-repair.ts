import { CarProblem } from "./car-problem";

export interface CarRepair {
  clientName: string;
  clientSurname: string;
  clientContact: string;
  clientEmail: string;
  carMark: string;
  carModel: string;
  numberPlate: string;
  color: string;
  carProblem: CarProblem[];
  globalProgress: number;
  amount: number;
  status: string;
  garageName: string;
  garageLocation: string;
  userName: string;
  userSurname: string;
  userContact: string;
  dateTimeStart: Date | null;
  dateTimeStop: Date | null;
  duration: number | null;
  invoiceStatus: string | null;
  carDepotStatus: string | null;
}
