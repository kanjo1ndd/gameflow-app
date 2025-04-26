import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import './SignUp.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppContext } from '../../AppContext';
import * as yup from "yup";


const schema = yup.object().shape({
    login: yup.string().required("(Login is required)"),
    name: yup.string().required("(Name is required)"),
    password: yup.string().min(6, "(Password must be at least 6 characters)").required("(Password is required)"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], "(Passwords must match)")
        .required("(Please confirm your password)"),
    email: yup.string().email("(Invalid email)").required("(Email is required)"),
    phone: yup.string().required("(Phone number is required)").matches(/^[0-9]+$/, "(Only digits are allowed)"),
    country: yup.string().required("(Country is required)"),
    birthDate: yup.string().required("(Date of birth is required)"),
    agree: yup.boolean().oneOf([true], "(You must agree to the terms)")
});

export default function SignUp() {

    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate(); {/* Возращение назад */}
    const {request} = useContext(AppContext);

    // useEffect(() => {
    //     request("api/user/" + data)
    //     .then(data => Register(data))
    //     .catch(j => console.error(j));
    // });


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        data.preventDefault();
        console.log("Submitted data:", data);
        setIsSuccess(true);
        request('/api/user/', {
            method: 'POST',
            body: new FormData(data.target)
        }).then(console.log).catch(console.error);}


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
                        <form className='form-signUp' onSubmit={onSubmit}>
                            <div className='form-inputs'>
                                <div className='form-input'>
                                    <div className='form-errors'>
                                        CREATE A LOGIN
                                        {errors.login && <span>{errors.login.message}</span>}
                                    </div>
                                    <input  {...register("login")}
                                        className={`input-form ${errors.login ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        CREATE A NAME
                                        {errors.name && <span>{errors.name.message}</span>}
                                    </div>
                                    <input {...register("name")}
                                        className={`input-form ${errors.name ? 'input-error' : ''}`}/>   
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        CREATE A PASSWORD
                                        {errors.password && <span>{errors.password.message}</span>}
                                    </div>
                                    <input  type="password" {...register("password")}
                                        className={`input-form ${errors.password ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        REPEAT A PASSWORD
                                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                                    </div>
                                    <input type="password" {...register("confirmPassword")} 
                                        className={`input-form ${errors.confirmPassword ? 'input-error' : ''}`}/>
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR EMAIL
                                        {errors.email && <span>{errors.email.message}</span>}
                                    </div>
                                    <input {...register("email")}
                                        className={`input-form ${errors.email ? 'input-error' : ''}`} />
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR PHONE NUMBER
                                        {errors.phone && <span>{errors.phone.message}</span>}
                                    </div>
                                    <input {...register("phone")} 
                                        className={`input-form ${errors.phone ? 'input-error' : ''}`} />
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR COUNTRY
                                        {errors.country && <span>{errors.country.message}</span>}
                                    </div>
                                    <input {...register("country")} 
                                        className={`input-form ${errors.country ? 'input-error' : ''}`} />
                                </div>

                                <div className='form-input'>
                                    <div className='form-errors'>
                                        PUT YOUR DATE OF BIRTH
                                        {errors.birthDate && <span>{errors.birthDate.message}</span>}
                                    </div>
                                    <input {...register("birthDate")} 
                                        className={`input-form ${errors.birthDate? 'input-error' : ''}`}/>
                                </div>
                            </div>
                            {/* Согласие на права */}
                            <div className='description-signUp'>
                                <label>
                                    <input type="checkbox" {...register("agree")} className="checkbox-input" />
                                </label>
                                 I am 13 years of age or older and agree to the terms of the
                                 Steam Subscriber Agreement and the Valve Privacy Policy.
                            </div>
                            {/* Капча */}
                            {/* <div className='captcha'></div> */}
                            <button className='button-signup'>SIGN UP</button>
                        </form>
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
    <script>

    </script>
    }