import Account from "./Account";
import DOB from "./DOB";

class Customer{
    name: string;
    customerAccount: Account;
    dateOfBirth: DOB;

    constructor(name: string, customerAccount: Account, dateOfBirth: DOB){
        this.name = name;
        this.customerAccount = customerAccount;
        this.dateOfBirth = dateOfBirth;
    }
}

export default Customer;