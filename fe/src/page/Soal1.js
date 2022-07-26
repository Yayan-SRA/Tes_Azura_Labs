import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
axios.defaults.withCredentials = true;

export default function Soal1() {
    const [produk, setProduk] = useState([])
    const navigasi = useNavigate()

    const fetchdata = async () => {
        try {
            let response = await axios.get(`http://localhost:8000/soal`)
            console.log(response.data)
            // const data = await response.json()
            setProduk(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, []);


    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(money);
    };

    return (
        <>
            <Nav/>
            <div className="container pb-5">
        <div className="row table mt-5 justify-content-center">
            <div className="col-8">
                <table className="table table-striped">
                    <thead className="table-primary">
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Rating</th>
                            <th>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {produk.length !==0 ? produk.map((data, index) =>(
                            <tr key={index}>
                                <td>{data.nama}</td>
                                <td>{formatRupiah(data.harga)}</td>
                                <td>{data.rating}</td>
                                <td>{data.likes}</td>
                            </tr>
                    ))
                        :
                        <div>

                        </div>
                    }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
