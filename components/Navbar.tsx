import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constant";
import Button from "@/components/Button";

const Navbar = () => {
    return (
        <nav className={"flexBetween max-container padding-container relative z-30 py-5"}>
            <Link href={"/"}>
                <Image src={"/hilink-logo.svg"} alt={"logo"} width={74} height={29}/>
            </Link>
            <ul className={"hidden h-full gap-12 lg:flex"}>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.href}
                          className={"regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"}>
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className={"lg:flexCenter hidden"}>
                <Button type={"submit"} title={"Login"} variant="btn_dark_green" icon={"/user.svg"}/>
            </div>

            <Image src={"menu.svg"} alt={"menu"} className={"inline-block cursor-pointer lg:hidden"} width={32}
                   height={32}/>
        </nav>
    )
}

export default Navbar;