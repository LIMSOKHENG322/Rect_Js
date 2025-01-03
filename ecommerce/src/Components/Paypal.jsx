import React, { useEffect, useRef, useState } from 'react';

const PayPal = ({ total, onSuccess }) => {
    const paypalRef = useRef(null);
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        if (window.paypal) {
            setSdkReady(true);
        } else {
            const script = document.createElement('script');
            script.src = 'https://www.paypal.com/sdk/js?client-id=AfGjhJ_UTzl-Qy-ybEiy_U7mlx5Vb2VkV5EhMxz1il9Pc6xRaoEaof77oNrpz8z_CqHn-22CExklRMKc';
            script.async = true;
            script.onload = () => setSdkReady(true);
            document.body.appendChild(script);
        }
    }, []);

    useEffect(() => {
        if (sdkReady && paypalRef.current) {
            paypalRef.current.innerHTML = '';
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total.toFixed(2),
                                },
                            },
                        ],
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert(`Transaction completed by ${details.payer.name.given_name}`);
                        console.log('Transaction details:', details);

                        if (onSuccess) {
                            onSuccess(details);
                        }
                    });
                },
                onError: (err) => {
                    console.error('PayPal error:', err);
                },
            }).render(paypalRef.current);
        }
    }, [sdkReady, total, onSuccess]);

    if (!sdkReady) {
        return <div>Loading PayPal...</div>;
    }

    return <div ref={paypalRef}></div>;
};

export default PayPal;