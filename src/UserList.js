import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, } from 'react-bootstrap'


function UserList() {
    const [listOfUSer, setListOfUSer] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => { setListOfUSer(res.data) })
            .catch(err => { })

    })




    return (
        <div style={{margin:'20px' }}>


            {
                listOfUSer.map(user =>
                    <Card
                        border="dark"
                        bg='light'
                        key={user.id}
                        text='dark'
                        style={{ width: '25rem',margin:'20px' }}
                        className="mb-2">
                        <Card.Header style={{display:'flex',justifyContent:'space-evenly'}}><h3>{user.id}</h3> <h3>{user.name}</h3> </Card.Header>
                        <Card.Body>
                            <Card.Title>  <h3>Username: {user.username}</h3> </Card.Title>
                            <Card.Text>
                                Address:
                                <ul>
                                <li>Street: {user.address.street}</li>
                                <li>Suite: {user.address.suite}</li>
                                <li>City: {user.address.city}</li>
                                <li>Zipcode: {user.address.zipcode}</li>

                                </ul>
                            </Card.Text>
                            <Card.Text>
                                Phone:{user.phone}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}

        </div>
    )
}

export default UserList
