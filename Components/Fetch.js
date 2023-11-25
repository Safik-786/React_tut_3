import React, { useEffect, useState } from 'react'

function Fetch() {
    const [posts,setPosts]= useState([])
    const url = `https://jsonplaceholder.typicode.com/todos`
    // fetch(url)
    // .then((resp)=>{
    //     return resp.json();           // it will also return a promise
    // })
    // .then((data)=>{
    //     console.log(data)
    // })
    useEffect(() => {
        fetch(url)
            .then(resp => {
                return resp.json().then((data) => {
                    setPosts(data)
                    console.log(data)
                })          
            })
            
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map((pst,i)=>{
                        return(
                            <div key={i}>
                                <li  >
                                    <span>id={pst.id +"  "+ i} ,</span> &nbsp;
                                    <span>title={pst.title}</span>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Fetch
