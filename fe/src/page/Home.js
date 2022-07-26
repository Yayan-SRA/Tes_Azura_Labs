import Nav from '../components/Nav'
import gambar from "./images/logo.png"
export default function Home() {

    return (
        <> 
        < Nav /> 
        <div className="bg-primary text-light pb-5">
            <div className="container pb-5">
                <div className="row justify-content-center pb-5">
                    <div className="col-4 " style={{textAlign: "right", marginTop: "15%"}}>
                        <h1>Tes Azura Labs</h1>
                        <h3>Sofyan Rizki Afandy</h3>
                        <h3>Universitas Negeri Semarang</h3>
                    </div>
                    <div className="col-5 p-3">
                        <div className="img text-end">
                            <img src={gambar} className="rounded"  width="75%" alt="" />
                        </div>
                    </div>
                    <div className="col-3 p-3">
                        <div className="teks text-white">
                            <b style={{fontSize: "5rem"}}>Azura
                                <br/>
                                Labs</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
