import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Mahasiswa from './Mahasiswa';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }

    const handleDelete = (id) => {
        var index = Mahasiswa.map(function (e) {
            return e.id
        }).indexOf(id);

        Mahasiswa.splice(index, 1);

        history('/');
    }
    

    return (
        <Fragment>
            <b><h1>Data Bimba AIUEO</h1></b>
            <div className="Home-container">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Nama
                            </th>
                            <th>
                                Umur
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Mahasiswa && Mahasiswa.length > 0
                                ?
                                Mahasiswa.map((item) => {
                                    return (
                                        <tr key={item.id}> {/* Tambahkan key prop */}
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>EDIT</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan="3">No data available</td> {/* Ubah pesan jika tidak ada data */}
                                </tr>
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grid gap-5' to="/create">
                    <Button size="5g">Create</Button>
                </Link>
                <Link className='d-grid gap-5' to="/Logout">
                    <Button size="5g">Logout</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;
