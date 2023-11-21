import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

function DismisableAlert() {
    const [show, setshow]= useState(true)
    if(show){
        return(
            <div>
                <Alert variant='warning' onClose={()=>setshow(false)} dismissible>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maxime quidem omnis expedita voluptates eum dolore molestiae corporis quibusdam eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eveniet quidem nemo dolores expedita labore numquam molestiae ad saepe ea incidunt atque at porro facilis quis id fuga aut earum assumenda deleniti. Labore quod modi nemo iste. Perspiciatis fugit dicta recusandae. Eum nemo minus cumque.</p>
                    <Alert.Link href='https://google.com'>Click me to go...</Alert.Link>
                </Alert>
            </div>
        )
    }

}

export default DismisableAlert
