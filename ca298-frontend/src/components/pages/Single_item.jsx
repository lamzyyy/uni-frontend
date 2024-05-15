import Loading from "../base/loading"
import { useEffect, useState } from "react"
import Navbar from "../base/navbar"
import { useParams } from "react-router"

const SingleItem = ({endpoint, name, Component}) => {
    const {ItemId} = useParams()
    const api_url = process.env.REACT_APP_API_URL
    const [isLoading, setLoading] = useState(true)
    const [items, SetItem] = useState(null)
    useEffect(()=>{
        const fetchdata = async () => {
            try{
                const response = await fetch(`${api_url}${endpoint}${ItemId}`)
                if (!response.ok){
                    throw new Error('Network response was not ok');
                }
                
            const data = await response.json()
            console.log(data)
            SetItem(data)
            
            }
            catch(error){
                console.error(error)
            }
            finally{ setLoading(false)}       
        }
        fetchdata()
    },[ItemId, endpoint, api_url])
    
    let content;
    if (isLoading) {
        content = <Loading />
    } else {
       content =  <Component data={items}/>
        }
    return(
        <>
        <Navbar />
        <h1>{name} : {ItemId}</h1>
        <ul>{content}</ul>
        </>
    )
}
export default SingleItem;