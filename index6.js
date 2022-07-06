/// Print the Pattern.


const Print_pattern = (N) => 
{
 for(let i=0; i<=N ; i++){
   let star ='';
   for(let j=0; j<i; j++){
   star = star+"*";
   }
   console.log(star);
   
 }
};