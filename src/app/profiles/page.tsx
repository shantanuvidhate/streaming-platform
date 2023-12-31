"use client"
// import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// async function getServerSideProps (context : NextPageContext) {
//     const session = useSession();
//     if (!session){
//         return {
//             redirect : {
//                 destination : '/',
//                 permanent : false
//             }
//         }
//     }
//     return {
//         props : {}
//     }

// }
export default function Profiles() {
    const router = useRouter();
    const session = useSession();
    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who is Watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push("/home")}>

                        <div className="group flex-row w-44 mx-auto">
                            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                                <div className="w-44 h-44 relative">
                                    <Image src="/images/default-blue.png" alt="Profile" fill />
                                </div>
                            </div>
                            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white"> {session?.data?.user?.name} </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}