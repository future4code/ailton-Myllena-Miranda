import { reverse } from "dns";

function reverso(frase: string): string {
  return frase.split("").reverse().join("");
}

console.log(reverso("myllena"))