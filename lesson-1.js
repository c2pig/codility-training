
function solution(N) {
   const binary = N.toString(2);
   let gapArr = binary.split("1");
   let gap = 0;
   console.log(gapArr);
    if(gapArr[gapArr.length-1] !== "") {
       gapArr = gapArr.slice(0,-1);
    }
   if(gapArr.length === 1) {
       return 0;
   } 
   for (i in gapArr) {
       if(gapArr[i].length > gap) {
         gap = gapArr[i].length
       }
   }
   return gap;
}
