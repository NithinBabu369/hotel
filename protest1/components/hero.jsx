'use client'

import Image from "next/image"


export function Hero () {
    return(
      
        <div className="w-full min-h-screen relative">
            <Image
                src="/bg-2.jpg"
                alt="Background Image"
                fill
                style={{ objectFit: "cover" }}
                className="z-20"
            /> 
        </div>
    )
}