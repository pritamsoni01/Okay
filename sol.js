function solution(D){
    var days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    var result = {};
    for(var key in D){
        var day = new Date(key).getDay();
        if(result[days[day]]){
            result[days[day]] += D[key];
        }else{
            result[days[day]] = D[key];
        }
    }
    return result;
}

result = solution({'2016-01-01': 1, '2016-01-02': 2, '2016-01-03': 3, '2016-01-04': 4, '2016-01-05': 5, '2016-01-06': 6, '2016-01-07': 7});
console.log(result);


//ALGORITHM:

//start the algorithm
//if input dictionary not have mon and sun
//return error
//else
//create a new dictionary
//for each key in input dictionary
//get the day of the week
//if the day of the week is not in the new dictionary
//add the day of the week as key and the value of the input dictionary as value
//else