const normalPerson = {
    firstName: 'aktar',
    lastName: 'ahmed',
    salary: 20000,
    getFullName: function(){
        console.log(this.firstName + " " + this.lastName)
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary
    }
}

normalPerson.chargeBill(2000)
console.log(normalPerson.salary)
