import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import './SignUp.css'
import { AppContext } from '../../AppContext';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const countryOptions = countryList().getData();

export default function SignUp() {

    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate(); {/* Возращение назад */}
    const {request} = useContext(AppContext);

    const [errors, setErrors] = useState({});
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [country, setCountry] = useState(null);
    const [agree, setAgree] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        console.log("Submitted data:", e);
        setIsSuccess(true);
        request('/api/user/', {
            method: 'POST',
            body: new FormData(e.target)
        }).then(console.log).catch(console.error);
    }

    const validate = () => {
        const newErrors = {};
        if (!login.trim()) newErrors.login = "(Login is required)";
        if (!name.trim()) newErrors.name = "(Name is required)";
        if (!password.trim() || password.length < 6) 
            newErrors.password = "(Password must be at least 6 characters)";
        if (password !== confirmPassword)
            newErrors.confirmPassword = "(Passwords must match)";
        if (!confirmPassword.trim()) newErrors.confirmPassword = "(Password is required)";
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
            newErrors.email = "(Invalid email)";
        if (!phone.trim() || !/^\d+$/.test(phone))
            newErrors.phone = "(Only digits are allowed)";
        if (!phone.trim()) newErrors.phone = ("(Phone is required)");
        if (!country) newErrors.country = "(Country is required)";
        if (!birthDate.trim()) newErrors.birthDate = "(Date of birth is required)";
        if (!agree) newErrors.agree = "(You must agree to the terms)";
        return newErrors;
    };

    {/* Возращение назад */}
    const handleBack = () => {
        navigate(-1);
    };

    return <>
        <div className='container-signUp'>
        <div className='button-back' onClick={handleBack}>  {/* Возращение назад */}
            <i className="bi bi-chevron-left"></i>
        </div>
            {!isSuccess ? (
                <>
                    <div className='signUp'>Create an account</div>
                    <div className='block-signUp'>
                        <form className='form-signUp' onSubmit={(onSubmit)}>
                            <div className='form-inputs'>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        CREATE A LOGIN
                                        {errors.login && <span>{errors.login}</span>}
                                    </div>
                                    <input name="login" value={login} onChange={(e) => setLogin(e.target.value)}
                                    className={`input-form ${errors.login ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        CREATE A NAME
                                        {errors.name && <span>{errors.name}</span>}
                                    </div>
                                    <input name="name" onChange={(e) => setName(e.target.value)}
                                    className={`input-form ${errors.name ? 'input-error' : ''}`} />   
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        CREATE A PASSWORD
                                        {errors.password && <span>{errors.password}</span>}
                                    </div>
                                    <input name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                                        className={`input-form ${errors.password ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        REPEAT A PASSWORD
                                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                                    </div>
                                    <input name="confirmPassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`input-form ${errors.confirmPassword ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR EMAIL
                                        {errors.email && <span>{errors.email}</span>}
                                    </div>
                                    <input name="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`input-form ${errors.email ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR PHONE NUMBER
                                        {errors.phone && <span>{errors.phone}</span>}
                                    </div>
                                    <input name="phone" onChange={(e) => setPhone(e.target.value)}
                                    className={`input-form ${errors.phone ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR COUNTRY
                                        {errors.country && <span>{errors.country}</span>}
                                    </div>
                                    <Select
                                        value={country}
                                        onChange={setCountry}
                                        options={countryOptions}
                                        classNamePrefix="react-select"
                                        className={`${errors.country ? 'react-select--error' : ''}`}
                                        placeholder="Select a country..."
                                        isClearable
                                    />
                                    <input type="hidden" name="country" value={country?.label || ''} />
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR DATE OF BIRTH
                                        {errors.birthDate && <span>{errors.birthDate}</span>}
                                    </div>
                                    <input name="birthDate" type="date" value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    className={`input-form ${errors.birthDate ? 'input-error' : ''}`}/>
                                </div>
                            </div>
                            {/* Согласие на права */}
                            <div className='description-signUp'>
                                <label>
                                    <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} className="checkbox-input" />
                                </label>
                                 I am 13 years of age or older and agree to the terms of the
                                 Steam Subscriber Agreement and the Valve Privacy Policy.
                            </div>
                            {/* Капча */}
                            {/* <div className='captcha'></div> */}
                            <button className='btn button-signup'>SIGN UP</button>
                        </form>
                    </div>
                </>
            ) : (
                <div className='form-created'>
                    <div className='created-description'>
                        <div className='created'>Account created!</div>
                        <div className='send-email'>An email has been sent to you.</div>
                    </div>
                    <button className='btn button-created' onClick={() => navigate('/SignIn')}>LOG IN</button>
                </div>
            )}
        </div>
    </>;
}