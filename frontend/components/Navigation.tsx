import Image from 'next/image'
import VizioLogo from "../public/brand-logo-vizio.jpg";

function Navigation() {
    return (
        <nav className="custom-secondary-color flex justify-around p-4">
            <ul className={"flex custom-links-style items-center gap-12"}>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
            <Image alt={"Vizio Logo"} src={VizioLogo}/>
            <ul className={"flex custom-links-style gap-12 items-center"}>
                <li><a href="#">API</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">CTA</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;