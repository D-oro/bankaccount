import Account from './Account';
import Customer from './Customer';
import DOB from './DOB';

function AccountSummary(){

const firstCustomer = new Customer('Lisa Simpson', new Account(1234567890123456, 1000000), new DOB(9, 5, 1981))

const date = new Date();
const GMT: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'GMT+0',
    year: "numeric",
    month: "long",
    day: "numeric",
    hour:'2-digit', 
    minute:'2-digit'
})

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>date of birth</th>
                        <th>account number</th>
                        <th>current balance</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstCustomer.name}</td>
                        <td>{firstCustomer.dateOfBirth.getDOBAsString()}</td>
                        <td>{firstCustomer.customerAccount.accountNumber}</td>
                        <td>{firstCustomer.customerAccount.balance}</td>
                        <td>{GMT}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AccountSummary;