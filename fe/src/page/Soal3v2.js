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

export default function Soal3v2() {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [operator, setOperator] = useState("")
    const [hasil, setHasil] = useState("")
    const [error, setError] = useState("")

    class Stack {
        constructor() {
            this.items = [];
        }
        
        // add element to the stack
        add(element) {
            return this.items.push(element);
        }
        
        // remove element from the stack
        remove() {
            if(this.items.length > 0) {
                return this.items.pop();
            }
        }
        
        // view the last element
        peek() {
            return this.items[this.items.length - 1];
        }
        
        // check if the stack is empty
        isEmpty(){
           return this.items.length == 0;
        }
       
        // the size of the stack
        size(){
            return this.items.length;
        }
     
        // empty the stack
        clear(){
            this.items = [];
        }
    }

    const hasilnya = async (e) => {
        e.preventDefault();
        console.log("masuk", a)
        let sign = 1;
        let sum = 0;
        let stack = new Stack();
        for (let i = 0; i < a.length; i++ ){
            console.log("masuk", a)
            console.log("masuk sum", sum)
            if(a.charAt(i) >= '0' && a.charAt(i) <= '9'){
                let num = 0;
                while (i < a.length && a.charAt(i) >= '0' && a.charAt(i) <= '9'){
                    num = num * 10 + a.charAt(i) - '0';
                    i++;
                    console.log("masuk sini awal1", sum)
                    console.log("masuk sini num loop ke",i, num)
                }
                console.log("masuk sini awal2", sum)
                sum += num*sign;
                console.log("masuk sini awal3", sum)
                i--;
                console.log("masuk sini 2", sum)
            } else if(a.charAt(i) == '+'){
                sign = 1;
                console.log("masuk sini 3", sum)
            } else if(a.charAt(i) == '-'){
                sign = -1;
                console.log("masuk sini 3", sum)
            } else if(a.charAt(i) == '('){
                stack.add(sum);
                stack.add(sign);
                sum = 0;
                sign = 1;
                console.log("masuk sini 3 v1", sum)
            } else if(a.charAt(i) == ')'){
                sum = stack.peek() * sum;
                sum += stack.peek();
                console.log("masuk sini 3 v2", sum)
            }
        }
        console.log("masuk sini 4", sum)
        return (setHasil(sum));

        // try {

        //     if (operator == '*') {
        //         setHasil(a * b)
        //     } else if (operator == '/') {
        //         setHasil(a / b)
        //     } else if (operator == '+') {
        //         setHasil(a + b)
        //     } else if (operator == '-') {
        //         setHasil(a - b)
        //     } else {
        //         setError("operator yang anda masukan salah")
        //     }

        // } catch (error) {
        //     console.log(error)
        // }

    }
    console.log("tes", hasil)

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
                                max={1000000}
                                placeholder="masukkan angka"
                                value={a}
                                onChange={(e) => setA(e.target.value)}/>
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
            </div>
        </div>
    </div>
</>
)
}