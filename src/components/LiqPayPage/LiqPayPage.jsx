import React, { useEffect, useState } from 'react'

const { LiqPayCheckout } = window;

export default function LiqPayPage({ data }) {
    const [orderData, setOrderData] = useState(data)

    useEffect(() => {
        LiqPayCheckout.init({
            data: orderData.data,
            signature: orderData.signature,
            embedTo: "#liqpay_checkout",
            language: "ru",
            mode: "embed" // embed || popup
        }).on("liqpay.callback", function (data) {
            console.log('callback', data);
        }).on("liqpay.ready", function (data) {
            console.log('ready', data)
        }).on("liqpay.close", function (data) {
            console.log('close', data)
        });

    }, [])
    return (
        <div id="liqpay_checkout"></div>
    )
}
