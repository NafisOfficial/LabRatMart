import { useEffect } from "react"

const useTitle =(title)=>{
    useEffect(()=>{
        document.title=`${title} - LabRatMart`
    },[title])
}
export default useTitle