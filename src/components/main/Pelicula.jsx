import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Pelicula = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    useEffect (() => {
        navigate(`/movie/${params.id}`);
      
    });

    return <></>
}

export default Pelicula