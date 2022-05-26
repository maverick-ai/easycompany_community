import Image from "next/image";
import styles from "../../styles/Post.module.css";

function CommentImage(){

    const imgNum = Math.floor((Math.random()*4)+1);
    const source = "/comImg"+ imgNum +".png"

    return(
    <div>
    <Image alt="logo"
    src={source}
    height={118}
    width={130}
    quality={100}/>
    </div>
    );
    
}

export default CommentImage;