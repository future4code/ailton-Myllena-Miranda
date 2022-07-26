

export const goToLoginPage = (navigate)=>{
    navigate("/");
};

export const goToFeedPage = (navigate)=>{
    navigate("/feed");
};

export const goToRegistPage = (navigate)=>{
    navigate("/registration");
};

export const goToPostPage = (navigate, id)=>{
    navigate(`/post/${id}`);
};

export const goBack = (navigate)=>{
    navigate(-1);
};