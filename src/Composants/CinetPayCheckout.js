import React, { useState, useEffect } from 'react';

const CinetPayCheckout = () => {
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.cinetpay.com/seamless/main.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const checkout = () => {
        const transactionId = Math.floor(Math.random() * 100000000).toString();

        // Définir la configuration CinetPay
        const config = {
            apikey: '197769166866101a03cafd74.06998405', // VOTRE APIKEY
            site_id: '5870643', // VOTRE_SITE_ID
            notify_url: 'https://nchodavy.pythonanywhere.com/admin/',
            mode: 'PRODUCTION'
        };

        // Obtenir le checkout de CinetPay
        const checkoutData = {
            transaction_id: transactionId,
            amount: 100,
            currency: 'XOF',
            channels: 'ALL',
            description: 'Test de paiement',
            customer_name: "Joe",
            customer_surname: "Down",
            customer_email: "down@test.com",
            customer_phone_number: "088767611",
            customer_address: "BP 0024",
            customer_city: "Antananarivo",
            customer_country: "CM",
            customer_state: "CM",
            customer_zip_code: "06510"
        };

        CinetPay.setConfig(config);
        CinetPay.getCheckout(checkoutData);

        // Attendre la réponse de CinetPay
        CinetPay.waitResponse(data => {
            if (data.status === "REFUSED") {
                alert("Votre paiement a échoué");
            } else if (data.status === "ACCEPTED") {
                alert("Votre paiement a été effectué avec succès");
                setIsPaymentSuccess(true);
            }
        });

        CinetPay.onError(data => {
            console.log(data);
        });
    };

    return (
        <div className="sdk">
            <h1>SDK SEAMLESS</h1>
            {isPaymentSuccess ? (
                <p>Votre paiement a été effectué avec succès!</p>
            ) : (
                <button onClick={checkout}>Checkout</button>
            )}
        </div>
    );
};

export default CinetPayCheckout;
