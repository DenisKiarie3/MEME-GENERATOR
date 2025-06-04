import Troll2 from "../images/Troll2.png"
export default function Header() {
    return(
        <header className="flex items-center h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3] text-white p-[20px]">
            <img className="w-[40px] h-[40px] mr-[6px]" src={Troll2} alt="Meme Generator Icon"/>
            <h1 className="text-[1.25rem] mr-auto">Meme Generator</h1>
        </header>
    )
}