import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

export default function Nav() {

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container className="container container-fluid">
                <a className="navbar-brand" href="/">Tes YP</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/soal1">Soal 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/soal2">Soal 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/soal3">Soal 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/soal3v2">Soal 3 v2</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </Navbar>

    );
}
