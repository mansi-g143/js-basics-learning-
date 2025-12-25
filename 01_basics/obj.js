const allusers=[
               {
                firstname:"Mansi",
                age:"24",
                gender:"Female"},
                {
                firstname:"Manu",
                age:"24",
                gender:"Male"
                },
                {
                firstname:"Mansi",
                age:"24",
                gender:"Female"
                }

]

for(let i=0; i<allusers.length; i++){
    if(allusers[i]["gender"]=="Male"){
        console.log(allusers[i]["firstname"])
    }
}