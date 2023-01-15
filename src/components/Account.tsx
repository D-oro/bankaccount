class Account{
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number,){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    withdraw(withdrawAmount: number): number{
        return this.balance - withdrawAmount
    }

    deposit(depositAmount: number): number{
        return this.balance + depositAmount
    }
}

export default Account;