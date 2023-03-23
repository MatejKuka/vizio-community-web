import React from 'react';
import {BsFacebook, BsInstagram} from "react-icons/bs";

function HeaderAlfa() {
    return (
        <header className={"text-center my-14 mx-4"}>
            <div className={"flex justify-center gap-12 p-4"}>
                <a href="https://www.facebook.com/groups/478924054180458/">
                    <BsFacebook className={"text-5xl text-blue-500"}/>
                </a>
                <a href="https://www.instagram.com/vizio_komunita/">
                    <BsInstagram className={"text-5xl"}/>
                </a>
            </div>
            <p className={"font-semibold mb-4"}>VIZIO komunita 2023</p>
            <p className={"font-semibold"}>Vytvorené v spolupráci s
                <a className={"text-blue-500"} href="https://www.matejkuka.com/"> matejkuka.com </a>
                & TTbelis </p>
        </header>
    );
}

export default HeaderAlfa;