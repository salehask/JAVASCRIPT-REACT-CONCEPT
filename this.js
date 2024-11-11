const user = {
    name: 'sakib',
    age: 22,
    address: {
        city: 'dhaka',
        country: 'Bangladesh',
    },
    getDetails: () =>{
            console.log(this);
    }
}
user.getDetails();
