function dna(dna:string):string {
    let RNA=""
for(const letra of dna){
if(letra === "A"){
 RNA += "U"
}else if (letra === "T"){
RNA += "A"
}else if (letra === "C"){
    RNA += "G"
   }else if (letra === "G"){
    RNA += "C"
}
}
return RNA
}

console.log(dna("ATTGCTGCGCATTAACGACGCGTA"));
