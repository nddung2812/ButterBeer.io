"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResizablePanel from "../../components/ResizablePanel";

import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
    fullName: string;
    businessEmail: string;
    businessProblems: string;
};

const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    businessEmail: yup.string().required('Business Name is required'),
    businessProblems: yup.string().required('Business Problems are required'),
});

export default function RegisterPage() {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        // You can perform your form submission logic here
        // For this example, we'll just show a success message
        toast.success('Form submitted successfully!', {
            position: 'top-right',
        });
        console.log(data)
        reset(); // Reset the form after submission
    };

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
                            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between items-center w-full flex-col mt-4">
                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-3 items-center space-x-3">
                                        <Image
                                            src="/number-1-white.svg"
                                            width={30}
                                            height={30}
                                            alt="1 icon"
                                        />
                                        <label className="block mb-2" htmlFor="fullName">
                                            Your Full Name
                                        </label>
                                    </div>
                                    <Controller
                                        name="fullName"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                id="fullName"
                                                placeholder="Full Name"
                                                className="border rounded w-full p-2 text-black"
                                            />
                                        )}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500">{errors.fullName.message}</p>
                                    )}
                                </div>
                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-10 items-center space-x-3">
                                        <Image
                                            src="/number-2-white.svg"
                                            width={30}
                                            height={30}
                                            alt="1 icon"
                                        />
                                        <label className="block mb-2" htmlFor="businessName">
                                            Your Email Address
                                        </label>
                                    </div>
                                    <Controller
                                        name="businessEmail"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                id="businessEmail"
                                                placeholder="Enter your email"
                                                className="border rounded w-full p-2 text-black"
                                            />
                                        )}
                                    />
                                    {errors.businessEmail && (
                                        <p className="text-red-500">{errors.businessEmail.message}</p>
                                    )}

                                </div>
                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-10 items-center space-x-3">
                                        <Image
                                            src="/number-3-white.svg"
                                            width={30}
                                            height={30}
                                            alt="3 icon"
                                        />
                                        <label className="block mb-2" htmlFor="businessProblems">
                                            Share Your Business Challenges
                                        </label>
                                    </div>
                                    <Controller
                                        name="businessProblems"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <textarea
                                                {...field}
                                                id="businessProblems"
                                                placeholder="Your business problems"
                                                className="border rounded w-full p-2 text-black"
                                                rows={4}
                                            />
                                        )}
                                    />

                                    {errors.businessProblems && (
                                        <p className="text-red-500">
                                            {errors.businessProblems.message}
                                        </p>
                                    )}
                                </div>
                                <div className="my-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            <ToastContainer />
                        </motion.div>
                    </AnimatePresence>
                </ResizablePanel>
            </main>
            <Footer />
        </div>
    );
}