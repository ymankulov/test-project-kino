import React from 'react';
import {Link} from "react-router-dom";

const ActorCard = ({el}) => {
    return (
        <>
            <Link to={`/actors/${el.id}`}>
                {
                    el.profile_path ?
                        <img style={{
                            borderRadius:'5px'

                        }} className="hover:scale-110 hover:transition" src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/> :
                        <img className='hover:scale-110 hover:transition' style={{
                            width: '138px',
                            height: '175px',
                            borderRadius:'5px'
                        }}
                             src='https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg' alt=""/>
                }
            </Link>

            <h1 className='text-2xl hover:text-blue-100 hover:scale-105 hover:transition'>{el.name}</h1>

        </>
    );
};

export default ActorCard;