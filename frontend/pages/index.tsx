import ImageLogo from "../public/logo-hd-vizio.png"
import {BsFacebook, BsInstagram} from "react-icons/bs"


export default function Home() {
    
    return (
        <div >
            <div className={"custom-land-page text-center pt-10 "}>
                <h2 className={"text-white text-5xl italic "}>Priprav sa na <img className={"inline"} src={ImageLogo.src} alt="Vizio logo"/></h2>
                <h1 className={"text-white italic text-[5rem] uppercase font-medium"}>Pripravujeme</h1>
                <p className={"text-white text-4xl"}>
                    udalosti, prednášky a workshopy pre podnikateľov a
                    <br/> majiteľov malých firiem v Banskobystrickom
                    kraji</p>
            </div>
            <div className={"text-center"}>
                <h2 className={"text-6xl"}>V čom ti vie Vizio pomôcť?</h2>
            </div>
            <header className={"text-center mt-40"}>
                <div className={"flex justify-center gap-12 p-4"}>
                    <BsFacebook className={"text-5xl text-blue-500"}/>
                    <BsInstagram className={"text-5xl"}/>
                </div>
                <p className={"font-semibold"}>VIZIO komunita 2023</p>
            </header>
        </div>
    )
}
