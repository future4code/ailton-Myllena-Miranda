

export const goToHomePage = (navigate)=>{
    navigate("/")
}
export const goToAdminHomePage = (navigate)=>{
    navigate("/adm")
}
export const goToApplicationFormPage = (navigate)=>{
    navigate("/trips/form")
}
export const goToCreateTripPage = (navigate)=>{
    navigate("/createtrip")
}
export const goToListTripPage = (navigate)=>{
    navigate("/trips")
}
export const goToLoginPage = (navigate)=>{
    navigate("/login")
}
export const goToTripDetailsPage = (navigate)=>{
    navigate("/adm/tripDetails")
}

export const goBack = (navigate) => {
    navigate(-1)
}