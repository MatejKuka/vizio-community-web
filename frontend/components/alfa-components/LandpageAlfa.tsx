import React from 'react';
import ImageLogo from "@/public/logo-hd-vizio.png";

function LandpageAlfa() {
    return (
        <div className={"bg-black text-center py-10 px-4"}>
            <h2 className={"text-white md:text-5xl text-3xl italic"}>Priprav sa na
                <img
                className={"mx-2 inline h-8 md:h-12"}
                src={ImageLogo.src}
                alt="Vizio logo"/>
            </h2>
            <h1 className={"text-white italic text-4xl md:text-7xl uppercase my-4 font-medium"}>Pripravujeme</h1>
            <p className={"text-white md:text-2xl text-xl font-medium"}>
                udalosti, prednášky a workshopy pre podnikateľov a
                <br/> majiteľov malých firiem v Banskobystrickom
                kraji</p>
        </div>
    );
}

export default LandpageAlfa;