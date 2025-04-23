import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

export default function SignUp() {

    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = () => {
        setIsSuccess(true);
    };

    return <>
        <div className='container-signUp'>
            {!isSuccess ? (
                <>
                    <div className='signUp'>Create an account</div>
                    <div className='block-signUp'>
                        <div className='form-signUp'>
                            <div className='form-input'>
                                PUT YOUR EMAIL HERE
                                <input></input>
                            </div>
                            <div className='form-input'>
                                CREATE A PASSWORD
                                <input></input>
                            </div>
                            <div className='description-signUp'>
                                <label>
                                    <input type="checkbox" className="checkbox-input" />
                                </label>
                                 I am 13 years of age or older and agree to the terms of the
                                 Steam Subscriber Agreement and the Valve Privacy Policy.
                            </div>
                            <div className='captcha'></div>
                            <button className='button-signup' onClick={handleSignUp}>SIGN UP</button>
                        </div>
                    </div>
                </>
            ) : (
                <div className='form-created'>
                    <div className='created-description'>
                        <div className='created'>Account created!</div>
                        <div className='send-email'>An email has been sent to you.</div>
                    </div>
                    <button className='button-created' onClick={() => navigate('/SignIn')}>LOG IN</button>
                </div>
            )}
        </div>
    </>;
}