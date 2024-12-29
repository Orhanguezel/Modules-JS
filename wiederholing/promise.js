let check = false;

function createPromise(){
    return new Promise((resolve, reject) =>{
        if (check){
            resolve("Promise te herhangi bir hata olusmadi.");
        } else {
            reject("Promise te hata olustu.");
        }
    })
}
createPromise()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.error(error);
}
)
.finally(()=>{  // finally() methodu, promise islemi bittikten sonra calisir.
    console.log("Promise islemi bitti.");
}
)

