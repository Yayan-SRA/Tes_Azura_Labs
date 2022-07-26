import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style/Soal2.module.css"
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CurrencyFormat from 'react-currency-format';
import {useNavigate, Link} from "react-router-dom";
axios.defaults.withCredentials = true;

export default function Soal3() {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [operator, setOperator] = useState("")
    const [hasil, setHasil] = useState("")
    const [error, setError] = useState("")

    const hasilnya = async (e) => {
        e.preventDefault();

        try {

            if (operator == '*') {
                setHasil(a * b)
            } else if (operator == '/') {
                setHasil(a / b)
            } else if (operator == '+') {
                setHasil(a + b)
            } else if (operator == '-') {
                setHasil(a - b)
            } else {
                setError("operator yang anda masukan salah")
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (<> < Nav /> <div className="container pb-5">
        <div className="row mt-5 justify-content-center">
            <div
                className="col-8"
                style={{
                    margin: "auto"
                }}>

                <Form
                    className='p-5'
                    style={{
                        backgroundColor: "light",
                        borderColor: 'black',
                        borderRadius: '16px'
                    }}
                    onSubmit={(e) => hasilnya(e)}>
                    <Col md="12" lg="12" sm="12" className='row'>
                    <Form.Group className="mb-3 col-5" controlId="formBasicKota">
                            <Form.Control
                                style={{
                                    border: '1px solid #D0D0D0',
                                    borderRadius: '16px',
                                    padding: '12px 16px'
                                }}
                                type="number"
                                max={1000000}
                                placeholder="masukkan angka"
                                value={a}
                                onChange={(e) => setA(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className='mb-3 col-2'>
                            <Form.Select
                                aria-label="Default select example"
                                style={{
                                    border: '1px solid #D0D0D0',
                                    borderRadius: '16px',
                                    padding: '12px 16px'
                                }}
                                value={operator}
                                onChange={(e) => setOperator(e.target.value)}>
                                <option value="/">/</option>
                                <option value="*">*</option>
                                <option value="-">-</option>
                                <option value="+">+</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-5" controlId="formBasicKota">
                            <Form.Control
                                style={{
                                    border: '1px solid #D0D0D0',
                                    borderRadius: '16px',
                                    padding: '12px 16px'
                                }}
                                type="number"
                                max={1000000}
                                placeholder="masukkan angka"
                                value={b}
                                onChange={(e) => setB(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className='mt-3 col-6'>
                            <Button
                                className="form-control"
                                type="submit"
                                style={{
                                    background: '#0d6efd',
                                    borderColor: '#0d6efd',
                                    borderRadius: '16px',
                                    padding: '12px 16px'
                                }}>
                                Hitung
                            </Button>
                        </Form.Group>
                        <Form.Group className='mt-3 col-6'>
                            {
                                hasil
                                    ? <div
                                            style={{
                                                border: '1px solid #D0D0D0',
                                                background: "white",
                                                borderRadius: '16px',
                                                padding: '12px 16px'
                                            }}>
                                            <p>{hasil}</p>
                                        </div>
                                    : <div
                                            style={{
                                                border: '1px solid #D0D0D0',
                                                background: "white",
                                                borderRadius: '16px',
                                                padding: '12px 16px'
                                            }}>
                                            <p>{error}</p>
                                        </div>
                            }
                        </Form.Group>
                    </Col>
                </Form>
                <div style={{
                    textAlign: "center"
                }}>
                <small style={{
                    color: "gray",
                    textAlign: "center"
                }}>Yang lebih tepat ada di folder soal 3</small>
                </div>
            </div>
        </div>
    </div>
</>
)
}