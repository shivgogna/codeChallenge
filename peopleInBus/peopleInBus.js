/*
Number of People in the Bus
  [People get into the bus, People get out the bus]
  Create variable to hold amount of people
  Create a loop to go through main array
    Target array index by busStop[i][0]
    Substract busStops[i][0] from busStops[i][1]
  Return outside loop because we want it to iterate throughout all arrays
  
  Question: Why do I get -3 when I try to return without people + busStops[i][0] - busStops[i][1]
  I think I have the answer, I'd like to tell you what I think it's doing when we speak later today
*/

function busPassengers(busStops){
    let totalNum = 0;
    for(let i = 0; i < busStops.length; i++){
       totalNum = totalNum + busStops[i][0] - busStops[i][1];
    }
    return totalNum;
  }