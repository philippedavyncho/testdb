import React from 'react';

class PaymentSDK extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://cdn.cinetpay.com/seamless/main.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            this.setupCinetPay();
        };
    }

    setupCinetPay = () => {
        window.CinetPay.setConfig({
            apikey: '197769166866101a03cafd74.06998405', // YOUR APIKEY
            site_id: '5870643', // YOUR_SITE_ID
            notify_url: 'http://mondomaine.com/notify/',
            mode: 'PRODUCTION'
        });
    }

    handleCheckout = () => {
        window.CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(), // YOUR TRANSACTION ID
            amount: 100,
            currency: 'XOF',
            channels: 'ALL',
            description: 'Test de paiement',
            customer_name: "Joe", // Le nom du client
            customer_surname: "Down", // Le prenom du client
            customer_email: "down@test.com", // L'email du client
            customer_phone_number: "088767611", // L'email du client
            customer_address: "BP 0024", // Addresse du client
            customer_city: "Antananarivo", // La ville du client
            customer_country: "CM", // Le code ISO du pays
            customer_state: "CM", // Le code ISO de l'état
            customer_zip_code: "06510", // Code postal
        });

        window.CinetPay.waitResponse((data) => {
            if (data.status === "REFUSED") {
                alert("Votre paiement a échoué");
                window.location.reload();
            } else if (data.status === "ACCEPTED") {
                alert("Votre paiement a été effectué avec succès");
                window.location.reload();
            }
        });

        window.CinetPay.onError((data) => {
            console.log(data);
        });
    };

    render() {
        return (
            <div className="sdk">
                <h1>SDK SEAMLESS</h1>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        );
    }
}

export default PaymentSDK;
