import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        //setEndpoint(tab === "Day" ? "day" : "week");
        setEndpoint(tab.toLowerCase());
    };

    return (
        <div className="carousel-section">
            <ContentWrapper>
                <span className="carousel-title">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;