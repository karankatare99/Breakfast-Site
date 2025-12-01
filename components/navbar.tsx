'use client'


import { Shopcart } from "./svgs"
import { motion } from "motion/react"


export const Navbar = () => {
    const tabs = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Menu",
            href: "/Menu"
        },
        {
            title: "Delivery",
            href: "/delivery"
        },
        {
            title: "Contact Us",
            href: "/contact"
        }
    ]
    return (
        <div className="flex justify-between items-center w-full px-20">
            <motion.img style={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-36"
            />
            <motion.div
            className="flex gap-10"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                transition: {
                    staggerChildren: 0.2
                }
                }
            }}
            >
            {tabs.map(({ title, href }) => (
                <motion.a
                key={title}
                className="font-league-gothic text-2xl"
                href={href}
                variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 }
                }}
                >
                {title}
                </motion.a>
            ))}
            </motion.div>
            <motion.button style={{ opacity: 0, y: -30}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="size-10 bg-black text-white rounded-full">
                <Shopcart />
            </motion.button>
        </div>
    )
}