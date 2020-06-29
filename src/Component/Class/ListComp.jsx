import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { type } from 'os'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    Deletemahasiswa = (id_mahasiswa) => {
        const { mahasiswa } = this.state
        const data = qs.stringify({
            id_mahasiswa: id_mahasiswa

        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== id_mahasiswa),
                    display: 'block'
                })
                this.props.history.push('/mahasiswa')
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
                <h2> Data mahasiswa</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/mahasiswa/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map(mahasiswa =>
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.nim}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.jurusan}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/mahasiswa/edit',
                                                state: {
                                                    id_mahasiswa: mahasiswa.id_mahasiswa,
                                                    nim: mahasiswa.nim,
                                                    nama: mahasiswa.nama,
                                                    jurusan: mahasiswa.jurusan
                                                }
                                            }
                                        }>
                                        <Button> Edit </Button>

                                    </Link>
                                    <span> </span>
                                        <Button onClick={() => this.Deletemahasiswa(mahasiswa.id_mahasiswa)} color="danger"> Delete </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>
            </Container>
        )
    }
}
export default ListComp;