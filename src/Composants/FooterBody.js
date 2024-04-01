import "./FooterBody.css"

import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";



export default function FooterBody(){
    return (
        <div className="FooterBody flexbox">
            <div className="bodyfootleft">
                <h6>YATTE</h6>
                <hr />
                <p>
                Yatte boutique est une  plateforme en ligne qui permet aux clients d'acheter des produits ou des services en utilisant une interface simple et intuitive. Yatte propose un catalogue de produits, des options de paiement sécurisées et une livraison rapide pour offrir une expérience d'achat en ligne pratique et fiable.
              </p>
            </div>
            <div className="bodyfootleftmi">
                <h6>Nos Produits</h6>
                <hr/>
                <ul>
                    <li>High Tech & Eletronique</li>
                    <li>Vetements & Chaussures</li>
                    <li>Tv & Téléphone</li>
                    <li>Montres & Appareils electroménagers</li>
                </ul>
            </div>
            <div className="bodyfooright">
                <h6>Politique</h6>
                <hr />
                <ul>
                    <li>Politique de retour et d'échange</li>
                    <li>Politique de livraison</li>
                    <li>Politique de confidentialité</li>
                    <li>Politique garantie</li>
                    <li>Politique de paiement</li>
                </ul>
            </div>
            <div className="bodyfoorightmi">
                <h6>Adresses</h6>
                <hr />
                <h6>Services clients</h6>
                <hr/>
                <IconTelephone /> +225 07 68 74 30 02
                <br />
                <IconTelephone /> +225 07 68 74 30 02
                <br />
                <IconEnvelope /> info@email.com
            </div>
        </div>
    )
}