
// function prime(num){
//     let factor=0;
//      for(let i=1; i<=num;i++){
//            if (num%i==0){
//             factor++
//            }
//            if(factor==2){
//             return true;
//            }
//      }return false;
// }

// let a=prime(13);
// if(a==true){
//     console.log(a)
// }

function checkprime(num){
    if (num<=1){
        return false;
    }
        for(let i=2;i<=num**0.5;i++){
            if(num%i==0){
                return false;
            }
        }return true;
    }
    
    for(let j=0;j<=15;j++){
        if(checkprime(j))
        { console.log(j, "is a prime number")}
    }