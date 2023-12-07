import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'

function Add(){

    const[name, setName] = useState('');
    const[age, setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Mahasiswa.push({id: uniqueId, Name : a, Age : b});

        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="forName">
                <Form.Control type="text" placeholder="Masukkan Nama" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forAge">
                <Form.Control type="text" placeholder="Masukkan Umur" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>;
}

export default Add;