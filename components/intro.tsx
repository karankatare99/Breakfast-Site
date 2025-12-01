'use client'

import { motion, useAnimate, useInView } from "motion/react"
import Link from "next/link"
import { useEffect } from "react"

export const Intro = () => {

    const [scope, animate] = useAnimate()
    const isInVeiw = useInView(scope, { once: false })

    const startAnimation = async () => {
        await animate(".review", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        await animate(".pfp", {
            opacity: 1,
            y: 0,
        }, {
            duration: 0.5
        })

        await animate(".name", {
            opacity: 1,
            y: 0,
        }, {
            duration: 0.5
        })

        animate(".job", {
            opacity: 1,
            y: 0,
        }, {
            duration: 0.5
        })
    }

    useEffect(() => {
        if (isInVeiw) {
            startAnimation()
            return
        }

        animate(".review", { opacity: 0, y: 30 })
        animate(".pfp", { opacity: 0, y: 30 })
        animate(".name", { opacity: 0, y: 30 })
        animate(".job", { opacity: 0, y: 30 })
    }, [isInVeiw, animate])

    return (
        <div ref={scope} className="flex justify-center items-center gap-74">
            <div className="flex flex-col font-sans gap-6">
                <motion.p initial={{ opacity: 0, y: 30 }} className="review font-serif max-w-xs text-xl">"This was a delightful experience from start to finish. The food was exceptional, the staff attentive, and the ambiance was perfect for a cozy evening. Highly recommended!" </motion.p>
                <Link href={"https://x.com/XkaranMe/"} className="flex gap-5">
                    <motion.img initial={{ opacity: 0, y: 30 }} src="/pfp.jpg" alt="" width={60} height={60} className="pfp rounded-full" />
                    <div className="flex flex-col">
                        <motion.h4 initial={{ opacity: 0, y: 30 }} className="name text-lg font-medium text-neutral-800">karan</motion.h4>
                        <motion.p initial={{ opacity: 0, y: 30 }} className="job">Developer</motion.p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col justify-center size-80 bg-[#f6d876] rounded-full">
                <motion.img
                initial={{ opacity: 0, x: -40, y: 80, width: "18rem" }}
                animate={{ opacity: 1, x: 0, y: 0, width: "20rem" }}
                whileHover={{ width: "24rem", x: 40, y: -70, rotate: 30 }}
                transition={{ duration: 0.8 }}
                className="dish mx-auto"
                src="banner.png"
                alt=""
                />
            </div>
        </div>
    )
}