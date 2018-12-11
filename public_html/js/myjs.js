/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import Messagge from "./message.js";

let btn = document.querySelector("#btn");

btn.addEventListener("click", onclick);

function onclick(e) {
    console.log("onclick");
    let m = new Messagge("luca", "ciao");
    console.log(m.sender);
}


/*
 export default function myf(){
 
 x=document.querySelector("#mydiv");
 x.innerHTML="qweqwe";
 
 }
 */

