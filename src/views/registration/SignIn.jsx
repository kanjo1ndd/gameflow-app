import './SignIn.css'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

    const navigate = useNavigate();

    return <>
        <div className='container-registration'>
            <div className='logIn'>Log in</div>
            <div className='block-registration'>
                <div className='block-form'>
                    <div className='form'>
                        <div className='form-input'>
                            SIGN IN WITH ACCOUNT NAME
                            <input></input>
                        </div>
                        <div className='form-input'>
                            PASSWORD
                            <input></input>
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button className='button-signin'>SIGN IN</button>
                        <button className='button-cantlog'>Help, i cant log in</button>
                    </div>
                    <div className='text'>no account?</div>
                    <div className='text-create-new' onClick={() => navigate('/SignUp')}>Create a new one!</div>
                </div>
                <div className='block-qrcode'>
                    <div className='qrcode-text'>SIGN IN WITH QRCODE</div>
                    <div className='qrcode-img'></div>
                    <div className='qrcode-description'>Use out app or other means to scan this QRcode and log in into your account</div>
                </div>
            </div>
        </div>
    </>;
}