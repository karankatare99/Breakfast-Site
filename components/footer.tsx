import Image from "next/image";
import Link from "next/link";


export const Footer = () => (
    <div className="flex justify-center w-full bg-[#f6d876] rounded-t-full font-sans py-8 gap-64 mt-20">
        <div className="flex flex-col gap-4 max-w-xs">
            <Image src="/logo.png" alt="" width={100} height={100} />
            <div className="flex flex-col gap-4">
                <p>a copyright notice (e.g., © 2025 xkaranme), legal links for a Privacy Policy and Terms of Use, contact information like a phone number or email, social media links, and a sitemap for navigation</p>
                <p>karankatare969@gmail.com</p>
            </div>
        </div>
        <div className="flex flex-col gap-8">
            <h1 className="font-medium text-2xl">Quick Links</h1>
            <div className="text-md font-medium flex flex-col gap-1">
                <Link className="hover:text-emerald-700 transition-colors duration-100" href={"https://x.com/XkaranMe"}>X ( Twitter )</Link>
                <Link className="hover:text-emerald-700 transition-colors duration-100" href={"https://github.com/karankatare99"}>Github</Link>
            </div>
        </div>
    </div>
)