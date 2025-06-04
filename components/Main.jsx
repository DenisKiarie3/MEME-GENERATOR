import React from "react"
export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main className="max-w-[600px] p-[36px] mx-auto">
            <div className="grid grid-rows-[auto_auto] grid-cols-2 gap-[17px] mb-[17px]">
                <label>Top Text
                    <input 
                    className="rounded-[5px] border border-[#D5D4D8] w-full sm:indent-[5px] min-h-[40px]"
                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} />
                </label>
                <label>Bottom Text
                    <input 
                    className="rounded-[5px] border border-[#D5D4D8] w-full sm:indent-[5px] min-h-[40px]"
                    type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}/>
                </label>
                <button 
                className="col-span-full rounded-[5px] bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white border-0 cursor-pointer min-h-[40px] font-inter">
                Get a new meme image 🖼
                </button>
            </div>
            <div className="flex flex-col justify-center items-center relative">
                <img className="max-w-full h-auto rounded-[3px]" src={meme.imgUrl} alt="meme image" />
                <span 
                className="absolute text-center my-[15px] px-[5px] sm:text-[2rem] uppercase text-white tracking-[1px] top-0 font-bold drop-shadow-lg">
                {meme.topText}
                </span>
                <span 
                className="absolute text-center my-[15px] px-[5px] sm:text-[2rem] uppercase text-white tracking-[1px] bottom-0 font-bold drop-shadow-lg">
                {meme.bottomText}
                </span>
            </div>
        </main>
    )
}