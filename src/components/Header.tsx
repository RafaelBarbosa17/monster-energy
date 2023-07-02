
import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full h-[10vh] snap-center">
            <div className="w-40 h-auto p-4">
                <Image
                    src={'/logo-main.png'}
                    alt="Logo principal"
                    className="w-full h-full"
                    width={300}
                    height={300}
                />
            </div>
        </header>
    )
}

export default Header;