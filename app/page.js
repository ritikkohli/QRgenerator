"use client"
import { useState } from "react"

export default function Home(){
    const [url, seturl] = useState('');
    const [qrUrl, setqrUrl] = useState('https://learn.g2.com/hubfs/QR%20codes.jpeg');
    const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    function get(e){
        e.preventDefault();
        if(!url){
            return alert('please provide url');
        }
        if(!urlRegex.test(url)){
            return alert('invalid url');
        }
        setqrUrl(`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300`);
        seturl('');
    }

    return (
    <div>
        <div id="top-panel">
            <input type="url" placeholder="enter url" onChange={e=>seturl(e.target.value)} id="url-box"/>
            <button id="btn" onClick={get}>Genrate</button>
        </div>
        <div id="main">
            <img src={qrUrl} alt="QR code"/>
        </div>
    </div>
    )
}