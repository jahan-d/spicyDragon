import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className="px-5 py-2 flex justify-between items-center gap-5 bg-stone-800">
            <div className="space-x-5">
                <Link className="btn" href="/foods">Foods</Link>
                <Link className="btn" href="/reviews">Reviews</Link>
            </div>
            <Link href="/"><img src="/spicyDragon.png" alt="" className="w-[120px]" /></Link>
        </header>
    );
};

export default Navbar;