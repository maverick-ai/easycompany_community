import styles from "../styles/Search.module.css";
import { useState} from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

function search_1() {

    const [data, setData] = useState({search:""});

    return (
        <div style={{marginTop:"100px"}}>
            <input
                className={styles.searchInput}
                style={{border:"2px solid white"}}
                id="query"
                type="text"
                autoComplete="query"
                value={data.search}
                onChange={(event) => 
                setData({search: event.target.value})}
                required
            />
            <div className={styles.ImgQues}>
                <Link href={{
                    pathname:"/search_detail",
                    query:data
                }}>
                <Image
                    src={"/Vector.png"}
                    height={18.76}
                    width={18.76}
                    quality={100}
                    
                />
                </Link>
            </div>
        </div>
    );
}
export default search_1;