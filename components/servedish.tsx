'use client'

import { animateMini } from "motion"
import { motion, useAnimate, useInView } from "motion/react"
import { useEffect } from "react"
import { start } from "repl"


export const Servedish = () => {
    const [scope, animate] = useAnimate()
    const isInVeiw = useInView(scope, { once: false })

    const startAnimation = async () => {
        animate(".dish", {
            opacity: 1,
            x: 0,
            y: 0
        }, {
            duration: 0.8
        })

        animate(".order", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        await animate(".quote01", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.8
        })

        animate(".quote02", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })
    }

    useEffect(() => {
        if (isInVeiw) {
            startAnimation()
            return
        }

        animate(".dish", { opacity: 0, x: -40, y: 80, width: "22rem" })
        animate(".order", { opacity: 0, y: 30 })
        animate(".quote01", { opacity: 0, y: 30 })
        animate(".quote02", { opacity: 0, y: 30 })

    }, [isInVeiw, animate])
    return (
        <div ref={scope} className="flex items-center justify-between w-full h-screen px-44">
            <div className="flex flex-col justify-center size-100 bg-[#f6d876] rounded-full">
                <motion.img
                initial={{ opacity: 0, x: -40, y: 80, width: "22rem" }}
                animate={{ opacity: 1, x: 0, y: 0, width: "24rem" }}
                whileHover={{ width: "28rem", x: 40, y: -70, rotate: 30 }}
                transition={{ duration: 0.8 }}
                className="dish mx-auto"
                src="banner.png"
                alt=""
                />
            </div>
            <div className="flex flex-col gap-8 items-start">
                <div className="flex flex-col gap-4 max-w-lg">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} className="quote01 text-6xl font-bold uppercase">The Best yummy food <br /> in the town</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} className="quote02 font-sans text-lg">Indulge in flavors that dance on your palate and leave you craving more.</motion.p>
                </div>

                <motion.button style={{ opacity: 0, y: 30 }}>
                    <span className="order px-4 py-2 text-white font-sans font-bold bg-green-600 rounded-full">Order Now</span>
                </motion.button>
            </div>
        </div>
    )
}