const tt = 42; //the minimum tall neded
const aa = 11; // the minimum age neded


function check(age,tall){
    //if age and tall is match
    if(age >= aa && tall >= tt){
        console.log("rider can ride the rollercoaster.");
    //if age match and tall not match
    }else if(age < aa && tall >= tt){
        console.log(" rider can't ride the rollercoaster. age less than" + aa);
    //if age not match and tall match
    }else if(age >= aa && tall < tt){
        console.log(" rider can't ride the rollercoaster. tall less than" + tt);
        //if age and tall isn't match
    }else{
        console.log("rider can't ride the rollercoaster.age less than "+aa+" and tall less than "+tt);
    }
};

//call function and check rider age and tall

check(11,41);


