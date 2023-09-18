import React, {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import "./style.scss";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = ()=>{
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state)=>state.home);
    const {data, loading} = useFetch("/movie/popular");

    useEffect(()=>{
        const backg = url.backdrop + data?.results?.[Math.floor(Math.random()*10)]?.backdrop_path;
        console.log(backg);
        setBackground(backg);
    }, [data]);

    const searchQueryHandler = (event) =>{
        if(event.key=="Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }
    const searchResult = (event) =>{
        if(query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    return(
        <div className='hero-banner'>
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="hero-banner-content">
                    <span className="title">Welcome</span>
                    <span className="subtitle">Discover 10M+ Movies, TV Shows and People <br/> all at one place</span>
                    <div className="search-input">
                        <input type="text" placeholder="Search for movie or tv show" onChange={(event) =>{setQuery(event.target.value);}} onKeyUp={searchQueryHandler} />
                        <button onClick={searchResult}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner;