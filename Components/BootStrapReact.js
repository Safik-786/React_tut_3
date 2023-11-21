import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function BootStrapReact() {
    return (
        <div className='my-20 text-center' >
            <Alert variant='success'>
                <Alert.Heading>this is alert heading</Alert.Heading>
                <p>
                    hello Worldhello Worldhello Worldhello Worldhello Worldhello Worldhello Worldhello Worldhello Worldhello   World
                </p>
                <Alert.Link href='#'>
                    Click to Open this Link
                </Alert.Link>
            </Alert>
            <Button >Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="success">success</Button>
            <Button variant="warning">warning</Button>
            <Button variant="dark">dark</Button><br />

            <Button variant="success" size='lg' href='https://google.com'>google</Button>
            <Button variant="success" active >success</Button>
            <Button variant="success" size='sm' disabled>success</Button>

        </div>
    )
}

export default BootStrapReact
