import { useEffect, useState } from "react";
import Loading from "../base/loading";
import Navbar from "../base/navbar";

function AllItems({endpoint, name, Component}) {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    const api_url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${api_url}${endpoint}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const jsonData = await response.json();
                setItems(jsonData);
            } catch(error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [api_url, endpoint]);
    
    if (isLoading) {
        return <Loading />
    } else if (!items || items.length === 0) {
        return <p>No {name} to display</p>;
    } else {
        return (
            <>
                <Navbar />
                <h3 className="font-serif text-3xl">{name} List</h3>
                <ul>
                    {console.log(items)}
                    <Component data={items}/>
                </ul>
            </>
        );
    }
}

export default AllItems;
