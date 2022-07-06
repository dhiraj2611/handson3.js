//// Check whether a Number is a prime or not.



const Prime_Check = (N) => 
{
let temp=n;
	 let i=1;
	 let count=0;
	 while(i<temp)
	 {
	   if(temp%i===0)
	   {
	     count++;
	   }
	   i++;
	 }
	if(count===1)
	{
	  return('YES');
	}
	else
	{
	  return('NO');
	}	 
	
};
