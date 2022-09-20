
function prime(num){
    let factor=0;
     for(let i=1; i<=num;i++){
           if (num%i==0){
            factor++
           }
           if(factor==2){
            return true;
           }
     }return false;
}

let a=prime(13);
if(a==true){
    console.log(a)
}