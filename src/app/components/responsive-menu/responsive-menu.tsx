import Link from "next/link"
import {motion, AnimatePresence} from "framer-motion"
const ResponsiveMenu=({open}: any)=>{
    return(
        <div>

              <AnimatePresence mode="wait">

                {
                    open && (
                        <motion.div
                        initial={{opacity: 0,y: -100}}
                        animate={{opacity: 1,y:0}}
                        exit={{opacity: 0,y: -100}}

                        className=" left-0 w-full h-screen z-20">
                            <div className="bg-black  py-10 m-5 rounded-3xl md:hidden">
                                <ul className="flex flex-col justify-center items-center gap-10">
                                    <li className="text-[20px] font-bold underline  text-white">
                                        <Link href="/">Home</Link>
                                    </li>

                                    <li className="text-[20px]  text-white font-bold underline">
                                        <Link href="Product">Product</Link>
                                    </li>

                                    <li className="text-[20px]  text-white font-bold underline">
                                        <Link href="Pricing">Pricing</Link>
                                    </li>

                                    <li className="text-[20px]  text-white font-bold underline">
                                        <Link href="Contact">Contact</Link>
                                    </li>
                                    <li>
                                    <button className="text-white pr-[55px]">Login</button>
                                    <button className="bg-[#23A6F0] w-[90px] rounded-[5px] h-[42px] text-white">JOIN US</button>
                                    </li>
                                </ul>
                            </div>
                            </motion.div>
                    )
                }
           </AnimatePresence>
        </div>
    )
}



export default ResponsiveMenu