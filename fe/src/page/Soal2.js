import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style/Soal2.module.css"
import axios from "axios";
import {Form, Button, Col, Modal} from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import {useNavigate, Link} from "react-router-dom";
axios.defaults.withCredentials = true;

export default function Soal2() {
    const [detail, setDetail] = useState(false)
    const [produk, setProduk] = useState('')
    const [nama, setNama] = useState(detail.nama)
    const [harga, setHarga] = useState(detail.harga)
    const [rating, setRating] = useState(detail.rating)
    const [likes, setLikes] = useState(detail.likes)
    const [showModal, setShowModal] = useState(false)
    const [showModalDetail, setShowModalDetail] = useState(false)
    const navigasi = useNavigate()

    const show = (data) => {
        setShowModal(true)
        setDetail(data)
    }
    const showDetail = (data) => {
        setShowModalDetail(true)
        setDetail(data)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    const closeModalDetail = () => {
        setShowModalDetail(false)
    }

    const fetchdata = async () => {
        try {
            let response = await fetch(`http://localhost:8000/soal2`)
            const data = await response.json()
            // console.log(response.data) const data = await response.json()
            setProduk(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, []);

    const formatRupiah = (money) => {
        return new Intl
            .NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            })
            .format(money);
    };

    console.log("mm", produk)
    const hapus = async (id) => {
        console.log(id)
        let response = await axios.delete(`http://localhost:8000/produk/hapus/${id}`)
        console.log("coba", response)
        window
            .location
            .reload();
    }

    const edit = async (e) => {
        e.preventDefault();
        console.log("tes id", detail.id)
        try {
            let response = await axios.put(`http://localhost:8000/produk/update/${detail.id}`, {
                nama: nama,
                harga: harga,
                rating: rating,
                likes: likes
            })
            console.log(response.data)
        } catch (error) {
            
        }
        window
        .location
        .reload();
    }

    const tambahProduk = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post(`http://localhost:8000/produk/add`, {
                nama: nama,
                harga: harga,
                rating: rating,
                likes: likes
            })
            console.log("hasil", response.data)
        } catch (error) {
            console.log(error)
        }
        window
            .location
            .reload();
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {
            value = ""
        } = e.target;
        const parsedValue = value.replace(/[^\d,]/gi, "");
        setHarga(parsedValue);
    };
    return (
        <> < Nav /> <div className="container pb-5">
            <div className="row table mt-5 justify-content-center">
                <div className="col-8">
                    <button
                        className='btn btn-primary my-1'
                        data-bs-toggle="modal"
                        data-bs-target="#add">
                        Tambah Produk
                    </button>
                    <table className="table table-striped text-center">
                        <thead className="table-primary">
                            <tr>
                                <th>Nama</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                                {produk.length !== 0 ? <> 
                                {produk.map((data, index) => {
                                                return (
                                                    <tr key={data.id}>
                                                        <td>{data.nama}</td>
                                                        <td>
                                                            <Button onClick={()=>showDetail(data)} className="btn btn-success">Detail</Button>
                                                            <Button onClick={()=>show(data)}
                                                                type='button'
                                                                className="btn btn-warning mx-2">Edit</Button>
                                                            <Button onClick={() => hapus(data.id)} className="btn btn-danger">Hapus</Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        <Modal style={{
                                            marginTop: "100px"
                                        }} show={showModalDetail} onHide={()=>closeModalDetail()}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Detail Produk</Modal.Title>
                                            </Modal.Header>
                                                <Form className='p-5 row'>
                                                    <Form.Group className="mb-3 col-6">
                                                    <div
                                                        style={{
                                                            border: '1px solid #D0D0D0',
                                                            borderRadius: '16px',
                                                            padding: '12px 16px'
                                                        }}>Nama : {detail.nama}</div> 
                                                                
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 col-6">
                                                    <div
                                                        style={{
                                                            border: '1px solid #D0D0D0',
                                                            borderRadius: '16px',
                                                            padding: '12px 16px'
                                                        }}>Harga : {formatRupiah(detail.harga)}</div>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 col-6" controlId="formBasicKota">
                                                            <div
                                                                style={{
                                                                    border: '1px solid #D0D0D0',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px'
                                                                }}>Rating : {detail.rating}</div>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 col-6" controlId="formBasicAlamat">
                                                            <div
                                                                style={{
                                                                    border: '1px solid #D0D0D0',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px'
                                                                }}>Likes : {detail.likes}</div>
                                                        
                                                    </Form.Group>
                                                    <Modal.Footer>
                                                    <Form.Group>
                                                            <Button
                                                                className="form-control"
                                                                style={{
                                                                    background: 'white',
                                                                    borderColor: '#0d6efd',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px',
                                                                    color: "black",
                                                                    marginRight: "5px"
                                                                }} onClick={()=>closeModalDetail()}>
                                                                Tutup
                                                            </Button>
                                                    </Form.Group>
                                                    </Modal.Footer>
                                                </Form>
                                        </Modal>
                                        <Modal style={{
                                            marginTop: "100px"
                                        }} show={showModal} onHide={()=>closeModal()}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Update Produk {detail.nama}</Modal.Title>
                                            </Modal.Header>
                                                <Form className='p-5' onSubmit={(e) => edit (e)}>
                                                    <Form.Group className="mb-3">
                                                            <Form.Control
                                                                style={{
                                                                    border: '1px solid #D0D0D0',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px'
                                                                }}
                                                                type="text"
                                                                placeholder={detail.nama}
                                                                className="form-control"
                                                                value={nama}
                                                                onChange={(e) => setNama(e.target.value)}/> 
                                                                
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        
                                                            <CurrencyFormat
                                                                value={harga}
                                                                onChange={handleChange}
                                                                style={{
                                                                    border: '1px solid #D0D0D0',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px'
                                                                }}
                                                                className='form-control'
                                                                displayType={'input'}
                                                                thousandSeparator={'.'}
                                                                decimalSeparator={','}
                                                                prefix={'Rp'}
                                                                placeholder={detail.harga}/> 
                                                            {console.log(harga)}
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicKota">
                                                            <Form.Control
                                                                style={{
                                                                    border: '1px solid #D0D0D0',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px'
                                                                }}
                                                                type="text"
                                                                placeholder={detail.rating}
                                                                value={rating}
                                                                onChange={(e) => setRating(e.target.value)}/>

                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicAlamat">
                                                        
                                                            <Form.Control
                                                                style={{
                                                                    border: '1px solid #D0D0D0',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px'
                                                                }}
                                                                type="text"
                                                                placeholder={detail.likes}
                                                                value={likes}
                                                                onChange={(e) => setLikes(e.target.value)}/>
                                                        
                                                    </Form.Group>
                                                    <Modal.Footer>
                                                    <Form.Group>
                                                        <Col
                                                            md="9"
                                                            lg="7"
                                                            sm="7"
                                                            className='d-flex'>
                                                            <Button
                                                                className="form-control"
                                                                style={{
                                                                    background: 'white',
                                                                    borderColor: '#0d6efd',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px',
                                                                    color: "black",
                                                                    marginRight: "5px"
                                                                }} onClick={()=>closeModal()}>
                                                                Batal
                                                            </Button>
                                                            <Button
                                                                className="form-control"
                                                                type="submit"
                                                                style={{
                                                                    background: '#0d6efd',
                                                                    borderColor: '#0d6efd',
                                                                    borderRadius: '16px',
                                                                    padding: '12px 16px'
                                                                }}>
                                                                Update
                                                            </Button>
                                                        </Col>
                                                    </Form.Group>
                                                    </Modal.Footer>
                                                </Form>
                                            {/* <Modal.Footer>
                                            <Button variant="secondary" onClick={()=>closeModal()}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={()=>closeModal()}>
                                                Save Changes
                                            </Button>
                                            </Modal.Footer> */}
                                        </Modal>
                                        </>
                                        : <></>
                                }
                        </tbody>
                    </table>

                    <div
                        className="modal fade"
                        id="add"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <strong>Tambah Product</strong>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body m-4">
                                    <div id={style.modal}>
                                        <Form className='p-5' onSubmit={(e) => tambahProduk(e)}>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    style={{
                                                        border: '1px solid #D0D0D0',
                                                        borderRadius: '16px',
                                                        padding: '12px 16px'
                                                    }}
                                                    type="text"
                                                    placeholder="Masukkan Nama Produk"
                                                    className="form-control"
                                                    value={nama}
                                                    onChange={(e) => setNama(e.target.value)}/>

                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <CurrencyFormat
                                                    value={harga}
                                                    onChange={handleChange}
                                                    style={{
                                                        border: '1px solid #D0D0D0',
                                                        borderRadius: '16px',
                                                        padding: '12px 16px'
                                                    }}
                                                    className='form-control'
                                                    displayType={'input'}
                                                    thousandSeparator={'.'}
                                                    decimalSeparator={','}
                                                    prefix={'Rp'}
                                                    placeholder="Rp.-"/> {console.log(harga)}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicKota">
                                                <Form.Control
                                                    style={{
                                                        border: '1px solid #D0D0D0',
                                                        borderRadius: '16px',
                                                        padding: '12px 16px'
                                                    }}
                                                    type="text"
                                                    placeholder="Rating produk"
                                                    value={rating}
                                                    onChange={(e) => setRating(e.target.value)}/>

                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicAlamat">

                                                <Form.Control
                                                    style={{
                                                        border: '1px solid #D0D0D0',
                                                        borderRadius: '16px',
                                                        padding: '12px 16px'
                                                    }}
                                                    type="text"
                                                    placeholder="Jumlah Like"
                                                    value={likes}
                                                    onChange={(e) => setLikes(e.target.value)}/>

                                            </Form.Group>
                                            <Form.Group>
                                                <Col md="9" lg="7" sm="7" className='d-flex'>
                                                    <Button
                                                        className="form-control"
                                                        style={{
                                                            background: 'white',
                                                            borderColor: '#0d6efd',
                                                            borderRadius: '16px',
                                                            padding: '12px 16px',
                                                            color: "black",
                                                            marginRight: "5px"
                                                        }}
                                                        data-bs-dismiss="modal">
                                                        Batal
                                                    </Button>
                                                    <Button
                                                        className="form-control"
                                                        type="submit"
                                                        style={{
                                                            background: '#0d6efd',
                                                            borderColor: '#0d6efd',
                                                            borderRadius: '16px',
                                                            padding: '12px 16px'
                                                        }}>
                                                        Tambah
                                                    </Button>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
