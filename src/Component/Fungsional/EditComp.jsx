import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Link } from 'react-router-dom';
import { Container, Col, Form, Alert, FormGroup, Label, Input, Button } from 'reactstrap';


const api = "http://localhost:3001"

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_mahasiswa: this.props.location.state.id_mahasiswa,
            nim: this.props.location.state.nim,
            nama: this.props.location.state.nama,
            jurusam: this.props.location.state.jurusan,
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    ubahMahasiswa = (id_mahasiswa) => {
        const data = qs.stringify({
            id_mahasiswa: id_mahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan

        });
        axios.put(api + '/ubah', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
            })
    }


    render() {
        return (
            <Container>
                <h4>Ubah Data Mahasiswa</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label for="nim">NIM</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nim" onChange={this.handleChange} value={this.state.nim} placeholder="Masukan NIM" />
                            </Col>
                        </FormGroup>
                        <Label for="nama">Nama</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nama" onChange={this.handleChange} value={this.state.nama} placeholder="Masukan Nama" />
                            </Col>
                        </FormGroup>
                        <Label for="jurusan">Jurusan</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="jurusan" onChange={this.handleChange} value={this.state.jurusan} placeholder="Masukan Jurusan" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col>
                                <button type="button" onClick={()=>this.ubahMahasiswa(this.state.id_mahasiswa)} className="btn btn-success">Update</button>
                            </Col>
                            <Col>
                                <Button color="danger">Reset</Button>{' '}
                            </Col>
                            <Col>
                                <Link to='/mahasiswa'><Button color="secondary">Kembali</Button></Link>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>

        );
    }
}

export default EditComp;