var promise = new Promise((fulfill, reject)=>{
    setTimeout(()=>{       
        
       reject((onReject('REJECTED!')));
    },300);
});

function onReject(error){

    return error;
}

promise
.then(resp=> console.log(resp))
.catch(err => console.log(err));


