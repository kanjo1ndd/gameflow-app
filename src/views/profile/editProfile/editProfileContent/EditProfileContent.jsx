import Select from 'react-select';
import './EditProfileContent.css';
import countryList from 'react-select-country-list';
import { useContext, useEffect, useState, useRef } from "react";
import '../../../registration/SignUp.css';
import { AppContext } from '../../../../AppContext';
import { useParams } from 'react-router-dom';

const countryOptions = countryList().getData();

export default function EditProfileContent() {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState(null);
    const [aboutUser, setAboutUser] = useState('');
    const [errors, setErrors] = useState({});
    const [initialData, setInitialData] = useState({});

    const [preview, setPreview] = useState('');
    const [activeTab, setActiveTab] = useState("main");

    // валидация
    const validate = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = "(Username is required)";
        if (!phone.trim() || !/^\d+$/.test(phone)) newErrors.phone = "(Invalid phone)";
        if (!country) newErrors.country = "(Country is required)";
        return newErrors;
    };
    const {input} = useParams();

    const handleSave = () => {
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log({ username, phone, country, aboutUser });
            let input = username+","+phone+","+country.label+","+aboutUser;
            request('/api/user/'+input)
            .then(console.log).catch(console.error);
        }
    };

    // запрос
    const { request, token } = useContext(AppContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if(token == null) {
            setUserData({});
            setInitialData({});
        }
        else {
            request("/api/user/profile")
            .then((data) => {
                setUserData(data);
                setInitialData(data);

                setUsername(data.userName || '');
                setPhone(data.phone || '');
                setAboutUser(data.aboutUser || '');
                setPreview(data.avatarUrl || '');

                const selectedCountry = countryOptions.find(option => option.label === data.country);
                setCountry(selectedCountry || null);
            })
            .catch(err => {
                console.error(err);
                setUserData({});
                setInitialData({});
            });
        }
    }, [token]);

    // Отмена изменений 
    const handleCancel = () => {
        setUsername(initialData.userName || '');
        setPhone(initialData.phone || '');
        setCountry(
            countryOptions.find(option => option.label === initialData.country) || null
        );
        setAboutUser(initialData.aboutUser || '');
        setPreview(initialData.avatarUrl || '');
        setErrors({});
    };

    return <>
        <div className='content-edit-profile'>
            <div className='title-edit-profile'>Profile Editor</div>
            <div className='main-content-edit-profile'>
                <div className='left-part-list'>
                    <nav>
                        <ul className='nav-li'>
                            <li className={`li-edit-profile ${activeTab === "main" ? "active" : ""}`}
                                onClick={() => setActiveTab("main")}>Main</li>
                            <li className={`li-edit-profile ${activeTab === "avatar" ? "active" : ""}`}
                                onClick={() => setActiveTab("avatar")}>Avatar</li>
                            <li className='li-edit-profile'>Showcase</li>
                            <li className='li-edit-profile'>Privacy</li>
                        </ul>
                    </nav>
                </div>
                <div className='right-part-list'>
                    {activeTab === "main" && <Main username={username}
                        setUsername={setUsername}
                        phone={phone}
                        setPhone={setPhone}
                        country={country}
                        setCountry={setCountry}
                        aboutUser={aboutUser}
                        setAboutUser={setAboutUser}
                        errors={errors} 
                         />}
                    {activeTab === "avatar" && (
                        <Avatar avatarUrl={userData.avatarUrl} preview={preview} 
                            setPreview={setPreview} />
                    )}
                    <div className='buttons-cancel-save'>
                        <button className='btn button-cancel' onClick={handleCancel}>Cancel</button>
                        <button className='btn button-save' onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export function Main({ username, setUsername, phone, setPhone, country, setCountry, aboutUser, setAboutUser, errors }) {
    return <>
        <div className='title-right-part'>Main</div>
        <hr/>
        <div className='for-inputs-edit-profile'>
            <div className='for-title-input'>
                <div className='title-category'>UserName {errors.username && <span className="error-text">
                    {errors.username}</span>}</div>
                <input
                    className={`input-edit-profile ${errors.username ? 'input-error' : ''}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className='title-category'>Phone {errors.phone && <span className="error-text">
                    {errors.phone}</span>}</div>
                <input
                    className={`input-edit-profile ${errors.phone ? 'input-error' : ''}`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        </div>
        <div className='title-right-part'>Location</div>
        <hr/>
        <div className='for-inputs-edit-profile'>
            <div className='for-title-input'>
                <div className='title-category'>Country {errors.country && <span className="error-text">
                    {errors.country}</span>}</div>
                    <Select
                        value={country}
                        onChange={setCountry}
                        options={countryOptions}
                        classNamePrefix="react-select"
                        className={errors.country ? 'react-select--error' : ''}
                        placeholder="Select a country..."
                        isClearable
                    />
            </div>
        </div>
        <div className='title-right-part'>About me</div>
        <hr/>
        <div className='for-inputs-edit-profile'>
            <div>
                <textarea
                    className='input-about-me'
                    value={aboutUser}
                    onChange={(e) => setAboutUser(e.target.value)}
                />
            </div>
        </div>
    </>;
}

export function Avatar({ avatarUrl, preview, setPreview }) {

    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // превью
                // здесь можно сделать загрузку на сервер, если нужно
            };
            reader.readAsDataURL(file);
        }
        event.target.value = null;
    };

    return <>
        <div className='title-right-part'>Avatar</div>
        <hr />
        <div className='avatar-button-upload'>
            <img className='img-avatar-profile' src={preview || null}/>
            <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            <button className='btn button-upload' onClick={handleUploadClick}>
                Upload your avatar
            </button>
        </div>
    </>;
}