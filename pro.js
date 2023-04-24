//square of a number
let a=prompt("enter a number");
let b=a*a;
document.write(b);

//square root of a number
let a=prompt("enter a number");
let c=Math.sqrt(a);
document.write(c);

//copy of an array into another array
let a=["arham","ramay","umer"];
let b=a;
new array
document.write(b);

//find maximum number
function maxnumber(){
let a=prompt("enter first number");
let b=prompt("enter second number");
if(a>b)
{
  document.write(a+"is maximum");
}
else if(a==b)
{
  document.write("both are equal");
}
else{
  document.write(b+"is maximum");
}
}
maxnumber()

 function negative(){
  let a=[10,20,-30,40,-50,-40,-60];
   let b= a.length;
  let c=0;
  for(let i=0;i<b;i++){
    if(a[i]<0){
      c++;
    }
  }
  document.write(c);
}
negative()

//sum of even numbers 
var n=prompt("enter a number")
var sum=0;
for(var i=0;i<n;i++)
{
  if(i%2==0)
  {
  sum=sum+i;
  }
}
document.write(sum);
