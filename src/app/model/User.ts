export interface User {
  name: string;
  cpf: string;
  salary: number;
  bornDate: string;
  banks: Bank[];
}
export interface Institution {
  agency: string;
  number: string;
  bankId: string;
  bankName: string;
}

export interface Transaction {
  type: string;
  description: string;
  value: number;
  date: string;
}

export interface CreditCard {
  limit: number;
  transactions: Transaction[];
  revolvingCredit: number;
  revolvingCreditTax: number;
  installmentsUsage: boolean;
  bills: any[];
}

export interface Transaction2 {
  type: string;
  description: string;
  value: number;
  date: string;
}

export interface Checking {
  balance: number;
  limit: number;
  transactions: Transaction2[];
}

export interface Saving {
  balance: number;
}

export interface From {
  bankName: string;
  agency: number;
  accountNumber: number;
  cpf: string;
}

export interface To {
  bankName: string;
  agency: number;
  accountNumber: number;
  cpf: string;
}

export interface PixHistory {
  from: From;
  to: To;
  description: string;
  value: number;
  date: string;
}

export interface ConsumedCreditLine {
  userId: string;
  bankId: string;
  type: string;
  value: number;
  tax: number;
  installments: number;
  startDate: string;
  endDate: string;
}

export interface Stock {
  identity: string;
  bankId: string;
  ticker: string;
  volumn: number;
  value: number;
  acquisitionDate: string;
  risk: number;
}

export interface Cdb {
  identity: string;
  bankId: string;
  description: string;
  type: string;
  value: number;
  dueDate: string;
  profitability: number;
  risk: number;
  acquisitionDate: string;
  volumn: number;
}

export interface InvestmentFund {
  identity: string;
  bankId: string;
  name: string;
  type: string;
  value: number;
  acquisitionDate: string;
  risk: number;
  volumn: number;
}

export interface Lci {
  identity: string;
  bankId: string;
  description: string;
  type: string;
  value: number;
  dueDate: string;
  profitability: number;
  risk: number;
  acquisitionDate: string;
  volumn: number;
}

export interface Lca {
  identity: string;
  bankId: string;
  description: string;
  type: string;
  value: number;
  dueDate: string;
  profitability: number;
  risk: number;
  acquisitionDate: string;
  volumn: number;
}

export interface Cri {
  identity: string;
  bankId: string;
  description: string;
  type: string;
  value: number;
  dueDate: string;
  profitability: number;
  risk: number;
  acquisitionDate: string;
  volumn: number;
}

export interface Cra {
  identity: string;
  bankId: string;
  description: string;
  type: string;
  value: number;
  dueDate: string;
  profitability: number;
  risk: number;
  acquisitionDate: string;
  volumn: number;
}

export interface Investments {
  stocks: Stock[];
  cdb: Cdb[];
  investmentFunds: InvestmentFund[];
  savingsAccount: any[];
  privatePension: any[];
  lci: Lci[];
  lca: Lca[];
  cri: Cri[];
  cra: Cra[];
}

export interface Bill {
  identity: string;
  value: number;
  startDate: string;
  paidDate: string;
}

export interface Bank {
  suitability: number;
  startDate: string;
  institution: Institution;
  creditCard: CreditCard;
  checking: Checking;
  saving: Saving;
  pixHistory: PixHistory[];
  consumedCreditLines: ConsumedCreditLine[];
  investments: Investments;
  bills: Bill[];
}

