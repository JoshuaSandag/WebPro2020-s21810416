import react from 'react';

const Card = (props) =>{
    return(
        <div className="card-container">
            <p>{props.name}</p>
            <p>{props.institution}</p>
            <p>{props.address}</p>
            <p>{props.phoneNumber}</p>
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