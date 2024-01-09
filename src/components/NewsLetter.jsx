import React from "react";

const NewsLetter = () => {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-5 ">
            <div className="text-center mt-10 lg:mt-24 mb-7">
                <p className="text-rose-800 text-2xl sm:text-5xl">Subscribe to our Newsletter</p>
            </div>

            <div className=" w-full  relative flex items-center justify-center">
                <img src="https://i.ibb.co/4sYZ8gC/img-2.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-5 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-10">
                    <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">Don’t miss out!</h1>
                    <p className="text-xs leading-normal text-center text-white sm:text-sm mt-3 sm:mt-6">
                        Subscribe to your newsletter to stay in the looP. Our newsletter is sent once in a week on every friday so subscribe to get latest news and updates.
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-5 sm:mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-2 sm:p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-1 sm:py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
