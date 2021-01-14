import React,{useEffect,useState} from 'react';

function Item({match}) {
    const [item,setItem]=useState({
        images:{}
    });

    useEffect(() => {
        fetchItem();
    }, []);
    const fetchItem = async()=>{
        const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const data = await response.json();
        console.log(data.data.item);
        setItem(data.data.item);
    }
    return (
        <div>
            <h2>
                {item.name}
            </h2>
            <img src={item.images.background} alt=""></img>
        </div>
    )
}

export default Item;
