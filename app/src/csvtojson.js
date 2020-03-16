import firebase from "../firebase";

var storage = firebase.storage();
var csvRef = storage.child('csvs/MANBIL03-logbook-2020-03-15.csv');

// Get the download URL
var URL = csvRef.getDownloadURL();

const csvFilePath=URL;
const csv=require('csvtojson');

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
});