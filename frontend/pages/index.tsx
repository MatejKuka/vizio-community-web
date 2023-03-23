import LandpageAlfa from "@/components/alfa-components/LandpageAlfa";
import HeaderAlfa from "@/components/alfa-components/HeaderAlfa";


export default function Home() {

    return (
        <div>
            <LandpageAlfa/>
            <div className={"text-center"}>
                <h2 className={"lg:text-6xl md:text-5xl text-4xl pt-12"}>Ako ti vie Vizio pomôcť?</h2>
                <iframe
                    className={"mx-auto my-12 lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[600px] w-11/12 h-[350px]"}
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdjBA0z5V87X37ZPaU_MwJtThHFa_CJ8eAtNz_n-OgMXConCw/viewform?embedded=true" frameBorder="0" marginHeight={0} marginWidth={0}>Načítava sa…
                </iframe>
            </div>
            <HeaderAlfa/>
        </div>
    )
}
