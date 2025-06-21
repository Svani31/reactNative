import {useEffect, useState} from "react";

const useFetch = <T>(fetchFunction:()=> Promise<T>,autoFetch = true) =>{
    const [data,setData] = useState<T | null>();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState<Error | null>();


    const fetchData = async ()=>{
        try{
            setLoading(true);
            setError(null);


            const resunt = await fetchFunction()
            setData(resunt)

        }catch(err){
            // @ts-ignore
            setError(err instanceof Error ? err : new Error("an error occurred"));
        }finally {
            setLoading(false);
        }
    }
    const reset = ()=>{
        setData(null)
        setError(null);
        setLoading(false);
    }
    useEffect(() => {
        if(autoFetch){
            fetchData()
        }
    }, []);
    return {data,loading,error,refetch:fetchData,reset};
}

export default useFetch;