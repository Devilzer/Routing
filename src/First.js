import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";

function First() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async()=>{
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const items =await data.json();
        console.log(items.data);
        setList(items.data);
    }

    return (
        <div>
            {
                list.map((item,index)=>(
                    <Link key={index} to={`item/${item.itemId}`}>
                        <h3>
                            {item.item.name}
                        </h3>
                    </Link>
                    
                ))
            }
            
        </div>
    )
}

export default First;
