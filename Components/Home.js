import React from 'react'
import bg3 from '../images/bg3.jpg'

function Home() {
    return (
        <>

        <div style={{textAlign:"center",backgroundImage:{bg3}}}>
            <h2>hii welcome to Home Page of my-app-react3</h2>
        <img src={bg3} alt="" height='400' width="400" />
        <img src={require("../images/bg4.jpg")} alt=""  height='400' width="400" />
        <img src="img/bg5.jpg" alt=""  height='400' width="400" />


        </div>
        </>
    )
}

export default Home
