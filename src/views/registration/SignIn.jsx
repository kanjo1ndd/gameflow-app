import './SignIn.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContext';
import { useContext, useState, useRef } from 'react';

export default function SignIn() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const {request, token, setToken} = useContext(AppContext);
    const [errors, setErrors] = useState({ login: '', password: '' });
    
    const onSubmit = () => {
        const newErrors = { login: '', password: '' };

        if (!login.trim()) newErrors.login = '(Login is required)';
        if (!password.trim()) newErrors.password = '(Password is required)';

        setErrors(newErrors);

        // Если есть ошибки — не отправляем
        if (newErrors.login || newErrors.password) return;

        console.log(login, password);
        let credentials = btoa(`${login}:${password}`);
        request('/api/user', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + credentials
            }
        }).then(data => {
            let jti = data;
            setToken(jti);
            console.log('Токен после аутентификации:', jti);
            navigate('/Profile');
        }).catch(console.error);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return <>
        <div className='container-registration'>
            <div className='button-back' onClick={handleBack}>
                <i className="bi bi-chevron-left"></i>
            </div>
            <div className='logIn'>Log in</div>
            <div className='block-registration'>
                <div className='block-form'>
                <div className='form'>
                    <div className='form-input'>
                        <div className='form-errors'>
                            SIGN IN WITH ACCOUNT NAME
                            {errors.login && <span>{errors.login}</span>}
                        </div>
                        <input name="login" value={login} onChange={(e) => setLogin(e.target.value)} 
                            className={`input-form ${errors.login ? 'input-error' : ''}`}/>
                    </div>
                    <div className='form-input'>
                        <div className='form-errors'>
                            PASSWORD
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <input name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                            className={`input-form ${errors.password ? 'input-error' : ''}`}/>
                    </div>
                </div>
                <div className='form-buttons'>
                    <button onClick={ onSubmit } className='btn button-signin'>SIGN IN</button>
                    <button className='btn button-cantlog'>Help, i cant log in</button>
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