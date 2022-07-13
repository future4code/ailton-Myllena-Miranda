import axios from "axios";
import { BASE_URL } from "../../constants/BaseUrl";
import { HEADERS } from "../../constants/BaseUrl";

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
.catch(() => {
    alert("Você não tem autorização para entrar nessa página");
  });
};


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
        console.log(err.data)
    })
};

export const GetTripDetail =(id, saveData)=>{
    axios
    .get(
        `${BASE_URL}${HEADERS}/trip/${id}`
    )
    .then((res)=>{
        saveData(res.data.trip)
    })
    .catch((err)=>{
        console.log(err.data)
    })

}