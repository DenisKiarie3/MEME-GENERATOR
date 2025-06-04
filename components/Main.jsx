export default function Main() {
    return(
        <main className="max-w-[600px] p-[36px] mx-auto">
            <div className="grid grid-rows-[auto_auto] grid-cols-2 gap-[17px] mb-[17px]">
                <label>Top Text
                    <input 
                    className="rounded-[5px] border border-[#D5D4D8] w-full sm:indent-[5px] min-h-[40px]"
                    type="text"
                    placeholder="One does not simply"
                    name="topText" />
                </label>
                <label>Bottom Text
                    <input 
                    className="rounded-[5px] border border-[#D5D4D8] w-full sm:indent-[5px] min-h-[40px]"
                    type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText" />
                </label>
                <button 
                className="col-span-full rounded-[5px] bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white border-0 cursor-pointer min-h-[40px] font-inter">
                Get a new meme image 🖼
                </button>
            </div>
            <div className="flex flex-col justify-center items-center relative">
                <img className="max-w-full h-auto rounded-[3px]" src="http://i.imgflip.com/1bij.jpg" alt="" />
                <span 
                className="absolute text-center my-[15px] px-[5px] sm:text-[2rem] uppercase text-white tracking-[1px] top-0">
                One does not simply
                </span>
                <span 
                className="absolute text-center my-[15px] px-[5px] sm:text-[2rem] uppercase text-white tracking-[1px] bottom-0">
                Walk into Mordor
                </span>
            </div>
        </main>
    )
}