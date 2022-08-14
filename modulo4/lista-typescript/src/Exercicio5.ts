
type Pessoa = {
    name:string,
    email:string,
    role:string
}

const Pessoas:Pessoa[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const filtraEmail =(array:Pessoa[]):string[]=>{
const email = array.filter((item)=>{
    if(item.role === "admin"){
        return item
    }
}).map((item)=>{
    return item.email
})
return email
}

console.log(filtraEmail(Pessoas))