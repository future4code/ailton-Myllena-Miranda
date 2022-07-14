import axios from "axios";
import { BASE_URL } from "../../constants/BaseUrl";
import { HEADERS } from "../../constants/BaseUrl";

//POST REQUESTS//
export const LoginAdm = (email, password, goTo, navigate)=>{
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

export const ApplyToTrip =(form,id)=>{
    axios
    .post(
        `${BASE_URL}${HEADERS}/trips/${id}/apply`,
        form
    )
    .then((res)=>{
        alert(res.data.message)
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
export const DecideCandidate = (tripId, candidateId, token, boolean)=>{
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
        }else{
            alert("Candidato não aprovado")
        }
    })
}
////

//DEL REQUESTS//

export const Delete = (id, token)=>{
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
    })
    .catch((err)=>{
      console.log(err.response)
    })
}
////