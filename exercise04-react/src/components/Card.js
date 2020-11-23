import react from 'react';

const Card = (props) =>{
    return(
        <div className="card-container">
            <p>{props.name}</p>
            <p>{props.username}</p>
            <p>{props.company}</p>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p>{props.website}</p>
        </div>
    );
}

export default Card;
/*
Menggunakan konsep Destructuring (lebih simple)
const Card = ({name, institution, address, phoneNumber}) =>{
    return(
        <div className="card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
        </div>
    );
}
*/