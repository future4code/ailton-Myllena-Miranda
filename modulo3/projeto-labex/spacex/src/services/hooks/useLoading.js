import React, {useState} from "react";

export const useLoading = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    return [isLoading, error, setIsLoading, setError];
}