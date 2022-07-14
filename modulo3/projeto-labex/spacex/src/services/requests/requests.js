import axios from "axios";
import { BASE_URL } from "../../constants/BaseUrl";
import { HEADERS } from "../../constants/BaseUrl";

//POST REQUESTS//
export const LoginAdm = (email, password, goTo, navigate, setPass, setEmail)=>{
const body ={
    email: email,
    password: password
};
axios
.post(
    `${BASE_URL}${HEADERS}/login`,
    body
)
.then((res)=>{
    localStorage.setItem("token", res.data.token);
    goTo(navigate)
    setEmail("")
    setPass("")
})
.catch((err) => {
 alert("Você não tem autorização para entrar nessa página")
});
};


export const CreateTrip =(form,token)=>{
axios
.post(
`${BASE_URL}${HEADERS}/trips`,
form, {
    headers:{
        auth: token
    }
}
)
.then((res)=>{
    alert("Viagem Criada com sucesso")
    GetTrips()
})
.catch((err)=>{
    alert(err.response)
})
}

export const ApplyToTrip =(form)=>{
    axios
    .post(
        `${BASE_URL}${HEADERS}/trips/${form.trip}/apply`,
        form
    )
    .then((res)=>{
        alert("Aplicação feita com sucesso!")
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
////



//GET REQUESTS//
export const GetTrips = (saveData)=>{
    axios
    .get(
        `${BASE_URL}${HEADERS}/trips`
    )
    .then((res)=>{
        console.log("rolou")
        saveData(res.data.trips)
    })
    .catch((err)=>{
        console.log(err.response)
    })
};


export const GetTripDetail =(id, saveData,token)=>{
    axios
    .get(
        `${BASE_URL}${HEADERS}/trip/${id}`,
        {
            headers:{
                auth: token
            }
        }
    )
    .then((res)=>{
        console.log(res.data.trip)
        saveData(res.data.trip)
    })
    .catch((err)=>{
        console.log(err.response)
    })
};
//

//PUT REQUESTS//
export const DecideCandidate = (tripId, candidateId, boolean,setData)=>{
    const token =localStorage.getItem("token");
    const body = {
        approve: boolean
    }
    axios
    .put(
        `${BASE_URL}${HEADERS}/trips/${tripId}/candidates/${candidateId}/decide`,
        body, {
            headers:{
                auth:token
            }
        }
    )
    .then(()=>{
        if(boolean){
            alert("Candidato aprovado com sucesso")
            GetTripDetail(tripId,setData, token)
        }else{
            alert("Candidato não aprovado")
        }
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
////

//DEL REQUESTS//

export const Delete = (id, setData)=>{
    const token =localStorage.getItem("token");
    if(window.confirm("Você quer mesmo apagar esta viagem?")){
    axios
    .delete(
        `${BASE_URL}${HEADERS}/trips/${id}`,
        {
            headers:{
                auth:token
            }
        }
    )
    .then((res)=>{
        alert("Viagem apagada com sucesso")
        GetTrips(setData)
    })
    .catch((err)=>{
      console.log(err.response)
    })
}
}
////