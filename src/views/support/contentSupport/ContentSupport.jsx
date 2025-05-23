import './ContentSupport.css'
import { useState } from 'react';

export default function ContentSupport() {

    const supportSections = [
        { title: 'Game problems', description: 'If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.' },
        { title: 'My account', description: 'If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.' },
        { title: 'Client', description: 'If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.' },
        { title: 'Community problems', description: 'If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.' },
        { title: 'Device problems', description: 'If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.' },
        { title: 'Gifts', description: 'If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.' }, 
        { title: 'Frequent questions', description: 'If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.' }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSections = supportSections.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <>
        <div className='support-block'>
            <div className='text-support'>
                Support
            </div>
            <div className='search-block'>
                <i className="bi bi-search"></i>
                <input placeholder='Find help' value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}></input>
            </div>
            <div className='blocks-sections'>
                {filteredSections.length > 0 ? (
                    filteredSections.map((section, index) => (
                    <div key={index} className={`support-section ${openIndex === index ? 'open' : ''}`}
                        style={{ animationDelay: `${index * 0.11}s` }}>
                        <div className="section-header">
                            {section.title}
                            <div className='chevron' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <i className={`bi ${openIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
                            </div>
                        </div>
                        {openIndex === index && (
                            <div className="section-description">
                                {section.description}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="no-results">Nothing found.</div>
            )}
            </div>
            <div className='text-question'>
                Have any other questions?
            </div>
            <div>
                <button className='btn button-contact'>Contact us on our email!</button>
            </div>
        </div>
    </>;
}