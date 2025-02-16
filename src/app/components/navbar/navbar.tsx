
'use client'

import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link"
import ResponsiveMenu from "../responsive-menu/responsive-menu";
export default function NAVBAR(){
  const [open, setOpen] = useState(false)
    return(
        <div className="overflow-x-hidden">




            {/* navbar */}

            <div className="bg-[#252B42]  h-[133px] md:flex  md:justify-around        hidden">
                <div>
            <h1 className="md:text-white md:font-bold md:pt-[22px]  ">BrandName</h1>
            </div>


              <div className="md:flex md:gap-3 lg:flex lg:gap-10 md:pt-[22px] ">
            <Link className="md:text-white" href="/">Home</Link>
            <Link className="md:text-white"href="Product">Product</Link>
            <Link className="md:text-white"href="Pricing">Pricing</Link>
            <Link className="md:text-white"href="Contact">Contact</Link>
            </div>

              <div className="  md:pt-[13px] ">
            <button className="md:text-white md:pr-[55px]">Login</button>
            <button className="md:bg-[#23A6F0] md:w-[90px] md:rounded-[5px] md:h-[42px] md:text-white">JOIN US</button>
            </div>
           
          

            </div>


               {/* Mobile Hamburger */}

           <div className="h-[60px] flex flex-row justify-end items-center w-full md:hidden"  onClick={()=>

setOpen(!open)

}>
 <GiHamburgerMenu className="size-20 pr-5 " />
</div>

{/* Mobile Sidebar */}
<ResponsiveMenu open={open}/>
            


            


        </div>
    )
}