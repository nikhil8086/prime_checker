let num = document.getElementById("numberInput").value;

function isPrime(n) {
    if(n===1){
        return false;
    }
    for(let i =2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

// let val = document.getElementsByTagName("h3");
const btn = document.getElementById("submit-button")
btn.addEventListener("click",()=>{
    let num = document.getElementById("numberInput").value;
    console.log(num)
    let isPrimeNumber = isPrime(num);
    console.log(isPrimeNumber)
    if(isPrimeNumber){
        document.getElementById("Answer-holder").innerHTML = "Yes";
    }else{
        document.getElementById("Answer-holder").innerHTML = "No"
    }
})