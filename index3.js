/// Find Sum





const findSum = (n) => {
    let sum=0;
  for(let i=1;i<=n;i++)
  {
    if(i%2===0)
    {
      sum=sum+i;
    }
  }
  return(sum);
};