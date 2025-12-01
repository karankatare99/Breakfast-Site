'use client'

import { motion, useAnimate, useInView } from "motion/react"
import { useEffect, useRef } from "react"


export const Desserts = () => {

    const [scope, animate] = useAnimate()

    const isInView = useInView(scope, { once: false })
    
    const startAnimation = async () => {
        await animate(".heading", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.3
        })

        await animate(".soup", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.3
        })

        await animate(".salad", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.3
        })
        
        await animate(".stake", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.3
        })

    }

    useEffect(() => {
        if (isInView) {
            startAnimation()
            return
        }

        animate(".heading", { opacity: 0, y: 50 }, { duration: 0 })
        animate(".soup", { opacity: 0, y: 90 }, { duration: 0 })
        animate(".salad", { opacity: 0, y: 90 }, { duration: 0 })
        animate(".stake", { opacity: 0, y: 90 }, { duration: 0 })

    }, [isInView, animate])

    return (
        <div ref={scope} className="w-full px-30 py-8">
            <motion.h3 initial={{ opacity: 0, y: 50 }} className="heading font-sans font-medium text-3xl text-[#05ab54] uppercase tracking-tight">Hot Desserts</motion.h3>
            <div className="flex gap-8 mt-10">

            <motion.div initial={{ opacity: 0, y: 90 }} className="soup flex font-sans h-34 items-center gap-4 shadow-lg w-full bg-white">
                <motion.img whileHover={{
                    rotate: 45,
                    width: "8rem",
                    height: "8rem"
                }} transition={{
                    duration: 0.3
                }} className="dish size-24 ml-8" src="food.png" alt="" />
                <div className="flex flex-col gap-1 ml-4">
                    <h2 className="font-medium text-xl tracking-wide relative">Fruit Soup</h2>
                    <p className="text-[#f6d876] font-medium text-xl font-sans">$6.89</p>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 90 }} className="salad flex font-sans h-34 items-center gap-4 shadow-lg w-full bg-white">
                <motion.img whileHover={{
                    rotate: 45,
                    width: "8rem",
                    height: "8rem"
                }} transition={{
                    duration: 0.3
                }} className="dish size-24 ml-8" src="/food2-plate.png" alt="" />
                <div className="flex flex-col gap-1 ml-4">
                    <h2 className="font-medium text-xl tracking-wide relative">Salad</h2>
                    <p className="text-[#f6d876] font-medium text-xl font-sans">$3.99</p>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 90 }} className="stake flex font-sans h-34 items-center gap-4 shadow-lg w-full bg-white">
                <motion.img whileHover={{
                    rotate: 45,
                    width: "8rem",
                    height: "8rem"
                }} transition={{
                    duration: 0.3
                }} className="dish size-24 ml-8" src="/banner.png" alt="" />
                <div className="flex flex-col gap-1 ml-4">
                    <h2 className="font-medium text-xl tracking-wide relative">Stake</h2>
                    <p className="text-[#f6d876] font-medium text-xl font-sans">$7.99</p>
                </div>
            </motion.div>

            </div>
        </div>
    )
}