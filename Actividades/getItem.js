import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const getItem = (id) => {
    const item = [{
        id: '1234',
        name: 'prod'
    },
    {
        id: '5678',
        name: 'prod2'
    }
    ].find(
        p => {
            p.id === id
        }        
    )

    console.log(item);
    return item;
}

const ItemDetail = ()=>{
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(
        () => {
            setItem(
                getItem(id)
            );
            console.log('Mounted ItemDetail');
            return () => {
                console.log('Dismounted ItemDetail');
            }
        }, [id]
    );

    return <>
        <p>
            Mostrando itemId: {id}
        </p>
        {item && <p>Item { item.name }</p>}
        <Link to="/">Volver al listado</Link>
    </>
}




