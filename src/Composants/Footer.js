import "./Footer.css"
import FooterHead from "./FooterHead"
import FooterBody from "./FooterBody"
import FooterEnd from "./FooterEnd"


export default function Footer(){
    return(
        <div className="containerFooter">
            <div className="footerHead">
                <FooterHead />
            </div>
            <div className="footerBody">
                <FooterBody/>
            </div>
            <div className="footerEnd">
                <FooterEnd />
            </div>
        </div>
    )
}
