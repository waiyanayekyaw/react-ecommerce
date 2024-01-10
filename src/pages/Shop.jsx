import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offer from "../components/Offer";
import NewCollections from "../components/NewCollections";
import Subscribe from "../components/Subscribe";

export default function Shop() {
    return (
        <div>
            <Hero />
            <Popular />
            <Offer />
            <NewCollections />
            <Subscribe />
        </div>
    );
}
