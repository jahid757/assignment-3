// https://github.com/jahid757/assignment-3


//-------------- Kilometer To Meter --------------




function kilometerToMeter(kilometer) {
    var meter = 1000 * kilometer
    return meter
}



//---------------- Budget Calculator ---------------




function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50 * watch;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;

    var total = watchPrice + mobilePrice + laptopPrice;

    return total;
}




//------------ Hotel Cost ----------------



// firstShift = first 10 day in hotel
// secondShift = 11 to 20 day in hotel
// thirdShift = 21 to infinite day in hotel



function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var remaining = day - 10;
        var firstShift = 10 * 100;
        var secondShift = remaining * 80;
        cost = firstShift + secondShift;
    } else {
        var remaining = day - 20;
        var firstShift = 10 * 100;
        var secondShift = 10 * 80;
        var thirdShift = remaining * 50;
        cost = firstShift + secondShift + thirdShift;
    }
    return cost;
}



//------------ Largest Name in Array or Mega Friend ------------




// name collect from google

function megaFriend(names) {
    var largeName;
    var indicator = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > indicator) {
            indicator = names[i].length
            largeName = names[i]
        }
    }
    return largeName;
}

var nameArray = ["jahid", "william", "liam", "Benjamin", "jackson"]


