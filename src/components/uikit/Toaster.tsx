import { toast, Toaster as NewToaster } from 'react-hot-toast';
import { JourneyAssets } from '../static/journeyAssets';

export const Toaster = () => <NewToaster position='top-right' />

export const SuccessToast = ({successMessage="",duration=5000}) => {
    return toast(
        (t) => (
            <div className="toaster-css-for-success">
                <div className="toaster-success">
                    <div className="flex-propertie-wi-jc">
                        <img src={JourneyAssets?.images?.SucessIcon} alt="" className="error-tri"/>
                        Success{' '}
                    </div>
                    <img src={JourneyAssets?.images?.CloseIcon} className="error-toat-close-icon" onClick={() => toast.remove(t.id)}/>{' '}
                </div>
                <div className="toaster-success-msg">{successMessage}</div>
            </div>
        ),
        { className: 'main-toaster-class',duration:duration },
    );
};

export const ErrorToast = ({errorMessage="",duration=5000}) => {
    return toast(
        (t) => (
            <div className="toaster-css">
                <div className="toaster-error">
                    <div className="flex-propertie-wi-jc">
                        <img src={JourneyAssets?.images?.ToasterAlertIcon} alt="" className="error-tri"/>
                        Error{' '}
                    </div>
                    <img src={JourneyAssets?.images?.CloseIcon} className="error-toat-close-icon" onClick={() => toast.remove(t.id)}/>{' '}
                </div>
                <div className="toaster-error-msg">{errorMessage}</div>
            </div>
        ),
        { className: 'main-toaster-class',duration: duration },
    );
};