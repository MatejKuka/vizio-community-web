import React from 'react';
import Image from 'next/image'
import BackgroundImage from "../public/ilustration.svg";

function Landpage() {

    return (
        <div className={"text-center h-[500px]"}>
            <div className={"relative"}>
                <Image
                    alt={"background Image"}
                    src={BackgroundImage}
                    objectFit={"cover"}
                    fill
                    objectPosition={"center"}
                />
                <h1 className={"font-bold text-7xl mb-12"}>Učíme sa jeden od druhého</h1>
                <p className={"text-3xl"}>Sme komunita pripravenych podnikat zmeny pre <br/> zlepsenie, vymnienanie skusenosti   </p>
            </div>

        </div>
    );
}

export default Landpage;