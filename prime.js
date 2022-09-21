

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