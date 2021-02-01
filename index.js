const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3({

accessKeyId: "AKIA5EMIBWAMF64NIYXM",
secretAccessKey: "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"

});

s3.listBuckets({}, (err, data) =>{
if (err) throw err;
console.log(data);


} );

var parametros = {
    
    Bucket: 'eajtbucket'

}

s3.listObjectsV2(parametros, (err, data) => {
if(err) throw err;
console.log(data);


});

var parametrosGetObject = {
     Bucket: 'eajtbucket',
     Key: 'eric_files/67ed1781-4f8e-4612-b118-592384ae61cb.jpg'


}

s3.getObject(parametrosGetObject, (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.writeFile("imagen_jpg.jpg", data.Body, 'binary', (err) =>{

        if (err) throw   err;

        console.log("Imagen grabada al disco"); 

    } 
    )

})


fs.readFile("info.txt", (err, data) =>{
if (err) throw err;
 var parametrosPutObject = {
    Bucket: 'eajtbucket',
    Key: 'info.txt',
    Body: data
 }

 s3.putObject(parametrosPutObject, (err, data)=> {
     if (err) throw err;
    console.log(data);
 })

})

