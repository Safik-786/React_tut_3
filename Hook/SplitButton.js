import React from 'react'
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'


function SplitButton() {
    return (<>
        <div className='d-flex justify-content-center my-3'>
            <Dropdown as={ButtonGroup}>
                <Button variant="primary">Choose Different Hooks</Button>
                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="usestate" >
                        useState
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="usereducer">
                        useReducer
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="useeffect">
                        useEffect
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="usecontext">
                        useContext
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="useref">
                        useref
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div style={{textAlign:'center'}}><Outlet/></div>
        </>
    )
}

export default SplitButton
