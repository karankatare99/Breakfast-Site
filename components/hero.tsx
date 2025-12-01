'use client'

import Image from "next/image"
import { Shopcart } from "./svgs"
import { useAnimate, motion, useInView } from "motion/react"
import { useEffect } from "react"

export const Hero = () => {

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { once: false })

    const startAnimation = async () => {
        animate(".skew", {
            opacity: 1,
            x: 0
        }, {
            duration: 0.8
        })

        animate(".spoon", {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0
        }, {
            duration: 0.8
        })

        animate(".banana", {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0
        }, {
            duration: 0.8
        })

        animate(".bowl", {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0
        }, {
            duration: 0.8
        })

        await animate(".yummy", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        await animate(".breakfast", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        await animate(".welcome", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        animate(".order", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })
    }

    useEffect(() => {
        if (isInView) {
            startAnimation()
            return
        }

        animate(".yummy", { opacity: 0, y: 90 })
        animate(".breakfast", { opacity: 0, y: 70 })
        animate(".welcome", { opacity: 0, y: 50 })
        animate(".order", { opacity: 0, y: 30 })
        animate(".skew", { opacity: 0, x: 100 })
        animate(".spoon", { opacity: 0, x: 50, y: -50, rotate: 20 })
        animate(".banana", { opacity: 0, x: 50, y: 50, rotate: 20 })
        animate(".bowl", { opacity: 0, x: 50, y: 50, rotate: 20 })
    }, [isInView, animate])

    return (
        <div ref={scope} className="grid grid-cols-2 w-full h-screen place-items-center">
            <div className="flex justify-center">
                <div className="flex flex-col gap-2 col-span-1 w-full">
                    <motion.div style={{ opacity: 0, y: 90 }} className="yummy flex gap-16">
                        <h1 className="text-8xl font-sans font-bold text-transparent text-outline uppercase leading-20">Yummy</h1>
                        <Image className="size-12" src={"/leaf.png"} alt="leaf" width={50} height={50} />
                    </motion.div>
                    
                    <motion.h1 style={{ opacity: 0, y: 70 }} className="breakfast text-8xl tracking-wide font-bold font-sans uppercase leading-30 text-zinc-900">Breakfast</motion.h1>
                    <motion.p style={{ opacity: 0, y: 50 }} className="welcome text-lg font-sans">From breakfast to dessert, we serve emotion and happiness on a plate.</motion.p>
                    <motion.button style={{ opacity: 0, y: 30 }} className="order">
                        <span className="flex mb-24 mt-8 gap-1.5 items-center w-34 px-3 py-2 text-white font-sans font-bold bg-green-600 rounded-full"> <Shopcart/> Order Now</span>
                    </motion.button>
                </div>

            </div>
            <div className="col-span-1 w-full relative ml-80 mb-8">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    className="skew absolute -z-10 right-0 -top-[70%]
                        w-0 h-0
                        border-t-900 border-t-transparent
                        border-r-900 border-r-[#f6d876]">
                </motion.div>
                <motion.img initial={{ opacity: 0, y: -50, x: 50, rotate: 20 }} className="spoon w-[350px] -bottom-[110px] left-[-100px] rotate-84 img-shadow absolute"  alt="spoon" width={100} height={100} src={"/spoon.png"} />
                <motion.img initial={{ opacity: 0, y: 50, x: 50, rotate: 20 }} className="bowl w-[400px] img-shadow relative" alt="food" width={100} height={100} src={"/food.png"} />
                <motion.img initial={{ opacity: 0, y: 50, x: 50, rotate: 20 }} className="banana w-[350px] bottom-[180px] left-[200px] img-shadow absolute" alt="banana" width={100} height={100} src={"/banana2.png"} />
            </div>
        </div>
    )
}