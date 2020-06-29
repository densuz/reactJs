import React, { PureComponent } from 'react'
import { Container, Col, Form, Alert, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Blog from './Blog'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            response: '',
            display: 'none'
        }
    }

    Addmahasiswa = () => {
        axios.post(api + '/tambah', {
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        })
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    // alert("Mahasiswa telah ditambahkan");
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
                else {
                    // alert('Mahasiswa gagal tersimpan');
                    debugger;
                    this.props.history.push('/mahasiswa/tambah')
                }
            })
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container>
                <b><h4 class='text-center'>Masukan Data Mahasiswa</h4></b>
                <br/>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <div class="tengah">
                    <Form className="form">
                        <Col>
                            <b><Label for="nim">NIM</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="nim" id="validationDefaultnim"onChange={this.handleChange} value={this.state.nim} placeholder="Masukan NIM" required/>
                                </Col>
                            </FormGroup>
                            <b><Label for="nama">Nama</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="nama" id="validationDefaultnama"onChange={this.handleChange} value={this.state.nama} placeholder="Masukan Nama" required/>
                                </Col>
                            </FormGroup>

                            <b><Label for="jurusan">Jurusan</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="jurusan" id="validationDefaultjurusan" onChange={this.handleChange} value={this.state.jurusan} placeholder="Masukan Jurusan" required/>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <span>
                                    <Col>
                                        <button type="button" onClick={this.Addmahasiswa} className="btn btn-success">Submit</button>
                                    </Col>
                                </span>
                                <Col>
                                    <Button color="danger">Reset</Button>{' '}
                                </Col>
                                <Col>
                                    <Link to='/mahasiswa'><Button color="secondary">Kembali</Button></Link>
                                </Col>
                            </FormGroup>
                        </Col>

                    </Form>
                </div>
            </Container>

        )
    }
}

export default TambahComp