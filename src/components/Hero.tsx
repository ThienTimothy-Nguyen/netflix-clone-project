import background from "../assets/hero-background.jpg";
import "tailwindcss";
import { Show } from "@clerk/react";
import { ChevronRight } from 'lucide-react';


const Hero = () => {
    return (
    <div className="flex flex-col justify-center items-center w-full h-[75vh] relative row ">
        <figure className="absolute -top-[80px] bottom-0 left-0 right-0 z-[-1]">
            <img src={background} fetchPriority="high" alt="" className="w-full h-full object-cover opacity-[0.4]" />
        </figure>
        <h1 className="z-[1] font-extrabold text-center sm:max-w-md sm:text-[44px]/10 text-[26px]/9 max-w-xs">
            Unlimited movies, TV shows, and more
        </h1>
        <h3 className="z-[1] text-lg text-gray-300 font-bold my-[16px]">
            Start at $7.99. Cancel anytime.
        </h3>
        
        <Show when="signed-in">
            
            <button className="z-[1] text-base font-extrabold bg-red-600 py-[12px] px-[24px] font-w rounded-sm max-w-[300px]">Restart Your Membership</button>            
        </Show>
        <Show when="signed-out">
            <h3 className="z-[1] sm:text-lg text-gray-300 font-bold mb-[16px] text-xs sm:max-w-[500px] max-w-[300px] text-center ">
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className="z-[1] sm:w-md w-[300px] sm:flex-row flex-col justify-center items-center flex mt-[8px]">
                <input className="placeholder:font-normal placeholder:text-white/70 focus:outline-gray-100 focus:outline-[1px] outline-[0.5px] outline-gray-300 font-semibold rounded-[4px] py-[6px] pl-[24px] w-full sm:mr-[6px] sm:mb-0 mb-[8px] sm:max-w-none max-w-[250px]" type="email" placeholder="Email Address" />
                <button className="bg-red-600 text-sm sm:text-base border-solid rounded-[6px] pl-[16px] pr-[12px] py-[6px] font-semibold flex items-center justify-center sm:w-[200px] w-[160px]"><span className="">Get Started</span><ChevronRight /></button>
            </div>
        </Show>
    </div>
    )
}

export default Hero