import { Container, Col } from "react-bootstrap";
import s from "./PhoneView.module.css";
import { useState, useEffect } from "react";
import Link from "next/dist/client/link";
import {Row} from "react-bootstrap";
import MobileCard from "./mobileSearchCard";
function PhoneView() {
    const [data, setData] = useState({ search: "" });

    return <Container  >
<Row>
    <Col>
    <div className={s.big1}>
            <div className={s.heading1div}>
                <span className={s.heading1}>Find answers to your questions</span>
                <h1 className={s.search}>Search</h1>
                <div className={s.underline}>
                    <img
                        src={"/searchUnderline.png"}
                        style={{ width: "220px", height: "17px" }}

                    />                       </div>
            </div>
            <div className={s.inputdiv}>
                <img src="/Vector.png" style={{ width: "18.76px", height: "18.76px" }} className={s.qimg} />
                <input
                    className={s.input}
                    id="query"
                    type="text"
                    autoComplete="query"
                    value={data.search}
                    onChange={(event) =>
                        setData({ search: event.target.value })}
                    required
                    placeholder="Enter Search Term"></input>

            </div>
            <Link href={{
                pathname: "/search_detail",
                query: data
            }}>
                <button className={s.btn} style={{ fontSize: "20px", width: "40%", marginTop: "10%" }}>
                    Submit
                </button>
            </Link>

            <div className={s.paris}>
                <div className={s.pardiv}>
                    Par
                </div>
                <img src="/Group.svg" className={s.tower} />
                <div className={s.s}>
                    s
                </div>           

            </div>
            <div style={{textAlign:"center"}}>
            
                    <img src={"/Union.png"} style={{ height: "380px", width: "180px", padding: " 0 auto " }} />

                </div>
                <div className={s.london} >
                <span style={{ fontSize: "35px" }}>London</span>
                </div>

                

        </div>
    </Col>
</Row>
        

    </Container>
}

export default PhoneView;