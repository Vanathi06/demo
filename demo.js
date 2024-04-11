const obj={ id:6,
Rate_name:"Seattle to portlant",
Invoice_Descr:"Seattle to portlant",
Rate: "$1001",
Unit:"$100",
Amount:"$1000",
child:{
    id:6,
    Rate_name:"",
    Invoice_Descr:"",
    Rate: "",
    Unit:"",
    Amount:[{ id:1,
        Rate_name:"Seattle to portlant",
        Invoice_Descr:"Seattle to portlant",
        Rate: "$1001",
        Unit:"$100",
        Amount:"$1000"},{ id:2,
            Rate_name:"Seattle to portlant",
            Invoice_Descr:"Seattle to portlant",
            Rate: "$1001",
            Unit:"$100",
            Amount:"$1000"},{ id:3,
                Rate_name:"Seattle to portlant",
                Invoice_Descr:"Seattle to portlant",
                Rate: "$1001",
                Unit:"$100",
                Amount:"$1000",
            ttt:[{u:456}]

}]
}
}

console.log("child",obj.child.Amount[2].ttt[0].u);


const obj1=[1,2,5]
obj1.map(d=>console.log(d))
