import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPend, setIspend] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {

                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');

                    }
                    return res.json();
                })
                .then(data => {
                    setdata(data);
                    setIspend(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        // auto catches network / connection error
                        setIspend(false);
                        setError(err.message);
                    }
                })
        }, 1000);
        return () => abortCont.abort();

        // abort the fetch
    }, [url]);

    return { data, isPend, error }

}

export default useFetch;