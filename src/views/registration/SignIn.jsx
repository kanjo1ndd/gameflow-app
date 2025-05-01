import './SignIn.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    login: yup.string().required("(Login is required)"),
    password: yup.string().min(6, "(Password must be at least 6 characters)").required("(Password is required)"),
});

export default function SignIn() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data) => {
        console.log("Submitted data:", data);
        setIsSuccess(true);
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
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-input'>
                            <div className='form-errors'>
                                SIGN IN WITH ACCOUNT NAME
                                {errors.login && <span>{errors.login.message}</span>}
                            </div>
                            <input {...register("login")}
                            className={`input-form ${errors.login ? 'input-error' : ''}`}/>
                        </div>
                        <div className='form-input'>
                            <div className='form-errors'>
                                PASSWORD
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <input type="password" {...register("password")}
                            className={`input-form ${errors.password ? 'input-error' : ''}`}/>
                        </div>
                    </form>
                    <div className='form-buttons'>
                        <button className='btn button-signin'>SIGN IN</button>
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