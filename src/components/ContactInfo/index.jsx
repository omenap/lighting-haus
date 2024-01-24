import './index.css';
import { PhoneIcon, LocationIcon, EnvelopeIcon } from '../../assets/icons';

function ContactInfo() {
    return (
        <div className='contactInfo'>
            <div className="contactInfoContent container">
                <div className='contacts'>
                    <PhoneIcon />
                    <p className='f-14px'>+234 802 501 8557</p>
                </div>
                <div className='contacts'>
                    <LocationIcon />
                    <p className='f-14px'>35 Freedom Way, Lekki Phase 1, Lagos, Nigeria</p>
                </div>
                <div className='contacts'>
                    <EnvelopeIcon />
                    <p className='f-14px'>sales@thelightinghaus.com</p>
                </div>
            </div>
        </div>

    )
}

export default ContactInfo