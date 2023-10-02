"use client"
import { useState } from "react"

export default function Home(){
    const [url, seturl] = useState('');
    const [qrUrl, setqrUrl] = useState('https://i.ibb.co/31BW7NR/temp-Image.png');
    const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    function get(e){
        e.preventDefault();
        if(!url){
            return alert('please provide url');
        }
        if(!urlRegex.test(url)){
            seturl('');
            return alert('invalid url');
        }
        setqrUrl(`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300&mrgin=20`);
        seturl('');
    }

    function downloadQR(e,qrUrl){
        e.preventDefault();
        if(qrUrl == 'https://i.ibb.co/31BW7NR/temp-Image.png') return
        const filename = Math.random().toString(36).substring(2,9)+'.png';
        
        // ------------- downloading technique ------------        
        fetch(qrUrl)
        .then((response) => response.blob())
        .then((blob) => {
            const a = document.createElement('a');
            a.style.display = 'none';
            document.body.appendChild(a);

            const blobUrl = window.URL.createObjectURL(blob);
            a.href = blobUrl;
            a.download = filename;
            a.click();

            window.URL.revokeObjectURL(blobUrl);
        });
    }
    return (
    <div id="main">
        <div id="top-panel">
            <input type="url" value={url} placeholder="enter url" onChange={e=>seturl(e.target.value)} id="url-box"/>
            <button className="btn" onClick={get}>Generate</button>
            <div id="image-container">
                <img id="QRimage" src={qrUrl} alt="QR code"/>
            </div>
            <button onClick={(e)=>downloadQR(e,qrUrl)} className="btn"><i className="ri-download-line"/></button>
            <a id="git" target="_blank" href="https://github.com/ritikkohli"><i class="ri-github-line"/></a>
        </div>
    </div>
    )
}