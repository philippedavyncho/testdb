import "./FooterHead.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";


export default function FooterHead(){
    return(
        <div className="foocont">
            <FontAwesomeIcon icon={faApple} className="apple" />
            <FontAwesomeIcon icon={faWindows} className="windows" />
            <FontAwesomeIcon icon={faFacebookF} className="faFacebookF"/>
            <FontAwesomeIcon icon={faYoutube} className="faYoutube" />
            <FontAwesomeIcon icon={faInstagram} className="faInstagram" />
            <FontAwesomeIcon icon={faTwitter} className="faTwitter"/>
        </div>
    )
}