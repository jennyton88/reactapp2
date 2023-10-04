import {useState, useEffect} from 'react';
import Feed from './Feed';

// data is collected then displayed through the feed
export default function FrontPage() {
    const [backendData, setBackendData] = useState({});

    useEffect(() => {
      fetch("/posts")
        .then(response => response.json())
            .then(data => {setBackendData(data)});
    }, []);

    return (
        <div className='the-front-page'>
            {(backendData === "undefined") ? (<p>Loading...</p>) : (<Feed backendData={backendData} />)}
        </div>
    )
}