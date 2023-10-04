import {useState, useEffect} from 'react';
import Feed from './Feed';
import useFetchData from './useFetchData';

// data is collected then displayed through the feed
export default function FrontPage() {
    // const [backendData, setBackendData] = useState({});

    // const [errorMessage, setErrorMessage] = useState(null);

    const {backendData, errorMessage} = useFetchData("/posts");

    // useEffect(() => {
    //   fetch("/posts")
    //     .then(response => {
    //         if (!response.ok) {
    //             throw Error('could not fetch data from response');
    //         } else {
    //             return response.json();
    //         }
    //     })
    //     .then(data => {
    //         setBackendData(data);
    //     })
    //     .catch(error => {
    //         setErrorMessage(error.message);
    //         console.log(error.message);
    //     })
    
    // }, []);

    return (
        <div className='the-front-page'>
            <Feed backendData={backendData} />
        </div>
    )
}