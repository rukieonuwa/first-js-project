let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let input6 = document.getElementById('input6');
let input7 = document.getElementById('input7');
let input8 = document.getElementById('input8');
let input9 = document.getElementById('input9');
let input10 = document.getElementById('input10');
let input12 = document.getElementById('input12');
let input14 = document.getElementById('input14');
let input16 = document.getElementById('input16');
let input18 = document.getElementById('input18');
let input20 = document.getElementById('input20');
let input22 = document.getElementById('input22');
let input24 = document.getElementById('input24');
let allforms = document.getElementsByClassName('container');
let message = document.getElementsByClassName('congrats');
let agepoint = 0, totalpoints = 0,avgpoints,
countrypoints = 0,ageValue;

function validateform() {

    let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (input1.value == '' || input1.value == null) {
        input1.style.border = '2px solid red';
        return false;
    }
    if (input2.value == '' || input2.value == null) {
        input2.style.border = '2px solid red';
        return false;
    }
    if (input3.value == '' || input3.value == null) {
        input3.style.border = '2px solid red';
        return false;
    } else if (!input3.value.match(email)) {
        alert("invalid Email");
        input3.style.border = '2px solid red';
        return false;
    }
    if (input4.value == '' || input4.value == null) {
        input4.style.border = '2px solid red';
        return false;
    }
else if(input4.value < 18) {
    input4.style.border = '2px solid red';
    alert("Sorry You're not within our acceptable Age Range");
    return false;
}
if (input5.value == '' || input5.value == null) {
    input5.style.border = '2px solid red';
    return false;
} else if (input5.value.length < 11) {
    alert('Invalid Phone Number');
    input5.style.border = '2px solid red';
    return false;
}
if (input6.value == '' || input6.value == null) {
    input6.style.border = '2px solid red';
    return false;
}
if (input7.value == '' || input7.value == null) {
    input7.style.border = '2px solid red';
    return false;
}
if (input8.value == '' || input8.value == null) {
    input8.style.border = '2px solid red';
    return false;
}
if (input9.value == '' || input9.value == null) {
    input9.style.border = '2px solid red';
    return false;
}
if (input10.value == '' || input10.value == null) {
    input10.style.border = '2px solid red';
    return false;
} else if (input10.value < 0 || input10.value > 100) {
    input10.style.border = '2px solid red';
    return false;
}
if (input12.value == '' || input12.value == null) {
    input12.style.border = '2px solid red';
    return false;
} else if (input12.value < 0 || input12.value > 100) {
    input12.style.border = '2px solid red';
    return false;
}

if (input14.value == '' || input14.value == null) {
    input14.style.border = '2px solid red';
    return false;
} else if (input14.value < 0 || input14.value > 100) {
    input14.style.border = '2px solid red';
    return false;
}

if (input16.value == '' || input16.value == null) {
    input16.style.border = '2px solid red';
    return false;
} else if (input16.value < 0 || input16.value > 100) {
    input16.style.border = '2px solid red';
    return false;
}

if (input18.value == '' || input18.value == null) {
    input18.style.border = '2px solid red';
    return false;
} else if (input18.value < 0 || input18.value > 100) {
    input18.style.border = '2px solid red';
    return false;
}

if (input20.value == '' || input20.value == null) {
    input20.style.border = '2px solid red';
    return false;
} else if (input20.value < 0 || input20.value > 100) {
    input20.style.border = '2px solid red';
    return false;
}

if (input22.value == '' || input22.value == null) {
    input22.style.border = '2px solid red';
    return false;
} else if (input22.value < 0 || input22.value > 100) {
    input22.style.border = '2px solid red';
    return false;
}

if (input24.value == '' || input24.value == null) {
    input24.style.border = '2px solid red';
    return false;
} else if (input24.value < 0 || input24.value > 100) {
    input24.style.border = '2px solid red';
    return false;
}
getCountryPoint();
getAgeGrade();
validategrade();
getTotalPoints();



var myChart = document.getElementById('myChart').getContext('2d');

let pieChart = new Chart(myChart, {
   type:'pie',
   data:{
    labels:["Age Point", "Country Point", "Grade Point"],
    datasets:[{
        label:"Average Score",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [agepoint,countrypoints,avgpoints]
    }]
   },
   options:{}
});
//return true;

}

function validategrade() {
    let totalgrade = (parseInt(input10.value) + parseInt(input12.value) + parseInt(input14.value) + parseInt(input16.value) + parseInt(input18.value) + parseInt(input20.value) + parseInt(input22.value) + parseInt(input24.value));
     let avggrade = (totalgrade / 8);
     
     
     if (avggrade >= 90 && avggrade <= 100){
         avgpoints = 150;
     } else if(avggrade >=85 && avggrade <= 89){
        avgpoints = 140;
     }
     else if(avggrade >= 75 && avggrade <= 84){
        avgpoints = 120;
     }
     else if(avggrade >= 65 && avggrade <= 74){
        avgpoints = 100;
     }
     else if(avggrade >= 60 && avggrade <= 64){
        avgpoints = 80;
     }
     else if(avggrade >= 50 && avggrade <= 59){
        avgpoints = 50;
     }else if(avggrade >=40 && avggrade <= 49){
        avgpoints = 20;
     } else{
        avgpoints = 0;
         console.log('No avg grade');
     }
}


function getAgeGrade() {

    ageValue=parseInt(input4.value);
    if (ageValue >= 18 && ageValue <= 24) {
        agepoint = 100;
    } else if (ageValue >= 25 && ageValue <= 30) {
        agepoint = 80;
    } else if (ageValue>= 31 && ageValue <= 35) {
        agepoint = 50;
    } else if (ageValue >= 36 && ageValue <= 40) {
        agepoint = 30;
    } else {
   agepoint = 0;
        console.log('No age');
    }
}

function getCountryPoint(){
    if ( input7.value == 'africa'){
        countrypoints = 50;
    } else if(input7.value == 'asia'){
        countrypoints = 40;
    } else if(input7.value == 'southamerica'){
        countrypoints = 30;
    } else if(input7.value == 'northamerica'){
        countrypoints = 20;
    } else{
        countrypoints = 0;
        console.log('no continent');
    }

}

// var disableSelect = document.getElementById('input9').getElementsByTagName('option');

// for (var i = 0; i < disableSelect.length; i++) {
//     if (disableSelect[i].value == 'maths') {
//         disableSelect[i].disabled = true;
//     } else {
//         disableSelect[i].disabled = false;
//     }
// }




function getTotalPoints(){
    totalpoints= avgpoints + countrypoints + agepoint;
    console.log(`AVG:${avgpoints} COU:${countrypoints} AGE:${agepoint} `);
    console.log(totalpoints);

    if (totalpoints >= 180){
   message[0].innerHTML = '<h3>  Congratulations, ' + input1.value + '! ' + 'You got ' + totalpoints + ' and you have been awarded a Scholarship!</h3>';
    } else{
        message[0].innerHTML = "<h3> We're Sorry, you do not meet our criteria.</h3>";
    }
    


}





// var arr=['young','sam','james'];
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
//     console.log(i)
// }











