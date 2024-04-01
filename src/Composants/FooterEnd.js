import "./FooterEnd.css"
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";

export default function FooterEnd(){
    return(
        <div className="end">
            <div>
            <p className="YATTE">YATTE</p>
            <p>YATTE Boutique<br/>
            YATTE & Partner<br/>
            YATTE GROUP</p>
            </div>
            <div>
            <p className="END">SERVICES CLIENTS</p>
            <p><IconTelephone /> +225 07 68 74 30 02<br/>
            <IconTelephone /> +225 07 68 74 30 02<br/>
            <IconEnvelope /> info@email.com</p>
            </div>
        </div>
    )
}