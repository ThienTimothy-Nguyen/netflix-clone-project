import SearchBar from "./SearchBar";
import { Link } from "@tanstack/react-router";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const Header = () => {
    return ( 
    <header className="row relative z-[1]">
        <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
                <h1 className="font-bold sm:text-3xl text-2xl h-[5%] my-[16px] text-red-600 mr-[16px]">
                    NEXFLIX
                </h1>
            </Link>
            <div className="flex items-center gap-4">
                <Show when="signed-out">
                    <SignInButton />
                    <SignUpButton />
                </Show>
                <Show when="signed-in">
                    <SearchBar />
                    <UserButton />
                </Show>
            </div>
        </div>
    </header>
    )
}

export default Header