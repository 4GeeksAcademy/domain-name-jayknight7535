import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

 let pronoun = ['the', 'our'];
 let adj = ['great', 'big'];
 let noun = ['jogger', 'racoon'];
 for(i=0; i<pronoun.length; i++){
  for(j=0; j<pronoun.length; j++){
    for(k=0; k<noun.length; k++){
     console.log(pronoun[i] + adj[j] + noun[k] + ".com")
     }
 }   
} 