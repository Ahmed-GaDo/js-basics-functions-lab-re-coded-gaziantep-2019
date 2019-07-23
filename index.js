// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(HQdist){
    return Math.abs(HQdist-42);
}
//function distanceFromHqInFeet(HQdistFeet){
//function distanceFromHqInFeet(HQdisFeet){
//function distanceFromHqInFeet(HQdisfeet){
 function distanceFromHqInFeet(HQdist){
     distanceFromHqInBlocks(HQdist);
     return distanceFromHqInBlocks(HQdist)*264 ;

 }           

 //function distaceTravilledInFeet(dis1, dis2){
 function distanceTravelledInFeet(dis1, dis2){
   if (dis1 > dis2) {
       return (dis1-dis2)*264;
   }
   else {
       return (dis2-dis1)*264;
   }
 }
 function calculatesFarePrice(start, destination){
     let distance = distanceTravelledInFeet(start, destination);
     if (distance <= 400 ) {
         return 0 ;
     }
     else if (distance > 400 && distance <= 2000 ) {
         return (distance-400)*0.02;
     }
     else if (distance >2000 && distance <= 2500) {
         return 25;
     }
     else {
         return 'cannot travel that far'
     }

 }