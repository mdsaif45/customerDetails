class Customer{
    constructor(name, address, contact){
       
        this.name = name;
        this.address = address;
        this.contact = contact;
    }
    toStringFormat(){
        return `<tr><td>${this.name}</td><td>${this.address}</td><td>${this.contact}</td></tr>`
    }
}
 
class CustomerDB{
    constructor(){
        this.customers = [];
    }
    //add new
    register(Customer) {
        this.customers.push(Customer);
    }

    //update existing
    update(Customer){
        for (const c of this.customers) {
            if(Customer.id == c.id){
                c.name = Customer.name;
                c.address = Customer.address;
                c.contact = Customer.contact;
                return;
            }
        }
        throw "Customer not found to update"
    }

    delete(name){
        for(let index =0; index<this.customers.length;index++){
            if(this.customers[index].name == name){
                this.customers.splice(index,1);
                return;
            }
        }
        throw "Customer not found to delete"; 
    }

 
    getAll(){
        return this.customers;
    }

    find(name){
        for (const c of this.customers) {
            if(c.name == name) return c;
        }
        throw "Customer not found";
    }
}
