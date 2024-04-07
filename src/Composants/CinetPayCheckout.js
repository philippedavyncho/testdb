import React from 'react';

class CinetPayCheckout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: '197769166866101a03cafd74.06998405', // Votre APIKEY
            siteId: '5870643', // Votre SITE_ID
            transactionId: Math.floor(Math.random() * 100000000).toString(),
            amount: 100,
            currency: 'XOF',
            customerName: "Joe",
            customerSurname: "Down",
            customerEmail: "down@test.com",
            customerPhoneNumber: "088767611",
            customerAddress: "BP 0024",
            customerCity: "Antananarivo",
            customerCountry: "CM",
            customerState: "CM",
            customerZipCode: "06510"
        };
    }

    componentDidMount() {
        this.loadCinetPayScript();
    }

    loadCinetPayScript() {
        const script = document.createElement("script");
        script.src = "https://cdn.cinetpay.com/seamless/main.js";
        script.async = true;
        script.onload = () => this.initCinetPay();
        document.body.appendChild(script);
    }

    initCinetPay() {
        const { apiKey, siteId } = this.state;
        CinetPay.setConfig({
            apiKey,
            siteId,
            notify_url: 'https://nchodavy.pythonanywhere.com/admin/',
            mode: 'PRODUCTION'
        });
    }

    checkout = () => {
        const {
            transactionId,
            amount,
            currency,
            customerName,
            customerSurname,
            customerEmail,
            customerPhoneNumber,
            customerAddress,
            customerCity,
            customerCountry,
            customerState,
            customerZipCode
        } = this.state;

        CinetPay.getCheckout({
            transaction_id: transactionId,
            amount,
            currency,
            channels: 'ALL',
            description: 'Test de paiement',
            customer_name: customerName,
            customer_surname: customerSurname,
            customer_email: customerEmail,
            customer_phone_number: customerPhoneNumber,
            customer_address: customerAddress,
            customer_city: customerCity,
            customer_country: customerCountry,
            customer_state: customerState,
            customer_zip_code: customerZipCode
        });

        CinetPay.waitResponse(data => {
            if (data.status === "REFUSED") {
                alert("Votre paiement a échoué");
                window.location.reload();
            } else if (data.status === "ACCEPTED") {
                alert("Votre paiement a été effectué avec succès");
                window.location.reload();
            }
        });

        CinetPay.onError(data => {
            console.log(data);
        });
    };

    render() {
        return (
            <div className="sdk">
                <h1>SDK SEAMLESS</h1>
                <button onClick={this.checkout}>Checkout</button>
            </div>
        );
    }
}

export default CinetPayCheckout;
