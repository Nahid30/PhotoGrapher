import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../images/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate('');

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate(from, {replace: true});
    }
    return (
        <div>
            <p className='text-danger text-center'>{error?.message}</p>
            <button
            onClick={()=>signInWithGoogle()}
            className='btn btn-danger d-block mx-auto'>
                <img height={30} width={30} className="me-2" src={google} alt="" />
            Google Login
            
            </button>
        </div>
    );
};

export default SocialLogin;