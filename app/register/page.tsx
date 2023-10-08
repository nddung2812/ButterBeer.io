"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingDots from "../../components/LoadingDots";
import ResizablePanel from "../../components/ResizablePanel";
export default function DreamPage() {
    const [restoredImage, setRestoredImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
                <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
                    Register your <span className="text-blue-600">Business</span> now
                </h1>
                <ResizablePanel>
                    <AnimatePresence mode="wait">
                        <motion.div className="flex justify-between items-center w-full flex-col mt-4">
                            <>
                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-3 items-center space-x-3">
                                        <Image
                                            src="/number-1-white.svg"
                                            width={30}
                                            height={30}
                                            alt="1 icon"
                                        />
                                        <p className="text-left font-medium">
                                            Enter your full name
                                        </p>
                                    </div>
                                    <input type="text" />
                                </div>
                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-10 items-center space-x-3">
                                        <Image
                                            src="/number-2-white.svg"
                                            width={30}
                                            height={30}
                                            alt="1 icon"
                                        />
                                        <p className="text-left font-medium">
                                            Enter your email
                                        </p>
                                    </div>
                                    <input type="text" />

                                </div>
                            </>
                            {loading && (
                                <button
                                    disabled
                                    className="bg-blue-500 rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 w-40"
                                >
                                    <span className="pt-4">
                                        <LoadingDots color="white" style="large" />
                                    </span>
                                </button>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </ResizablePanel>
            </main>
            <Footer />
        </div>
    );
}