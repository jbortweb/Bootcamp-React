var promise = new Promise(function(fulfill, reject){
    setTimeout(()=>{       
        
       reject(new Error(onReject('REJECTED!')));
    },300);
});

function onReject(error){

    return error;
}

promise
.then(resp=> console.log(resp))
.catch(err => console.log(err));


