import './Footer.css'

export default function Footer() {
    return <>
        <div className='block'>
            <div className='footer'>
                <div className='messengers'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-youtube"></i>
                </div>
                <div className='up'>
                    <i className="bi bi-chevron-up"></i>
                </div>
                <div className='text'>
                    © 2025 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                    <br/>
                    VAT included in all prices where applicable
                </div>
                <div>           
                </div>
                <div className='footer-links'>
                    <a>Terms of service</a>
                    <a>Jobs</a>
                    <a>Rules</a>
                    <a>Contracts</a>
                    <a>Gift cards</a>
                    <a>Facebook</a>
                    <a>Twitter</a>
                </div>
            </div>
        </div>
    </>;
}