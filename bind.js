const normalPerson = {
    firstName: 'aktar',
    lastName: 'ahmed',
    salary: 20000,
    getFullName: function(){
        console.log(this.firstName + " " + this.lastName)
    },
    chargeBill: function(amount){
        console.log(this)
        this.salary = this.salary - amount;
        return this.salary
    }
}

normalPerson.chargeBill(2000)
console.log(normalPerson.salary)

const heroPerson = {
    firstName: 'Kalam',
    lastName: 'ahmed',
    salary: 25000,
}

const vilenPerson = {
    firstName: 'jalam',
    lastName: 'ahmed',
    salary: 30000,
}

normalPerson.chargeBill()
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000)
heroChargeBill(3000)
console.log(heroPerson.salary)

const villainChargeBill = normalPerson.chargeBill.bind(vilenPerson);
villainChargeBill(2000);
console.log(vilenPerson.salary)