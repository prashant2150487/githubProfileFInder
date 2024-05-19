import React, { useEffect, useState } from 'react'



const Github = () => {
    const [userName, setUserName] = useState("sangammukherjee");
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState("");
    async function fetchApi() {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const detail = await res.json();
        setData(detail)
        console.log(detail)
    }
    useEffect(() => {
        fetchApi()
    }, [userName])


    return (
        <div>
            <input onChange={(e) => setInputData(e.target.value)} value={inputData}/>
            <button onClick={()=>setUserName(inputData)}>Search</button>
            <div>
                <h3>{data.login}</h3>
                <h3>{data.id}</h3>
                <h3>No of followers:{data.followers}</h3>
                <img src={data.avatar_url} alt='img' width={100} style={{ borderRadius: '50%' }} />
            </div>
            {userName}
        </div>
    )

}

export default Github;