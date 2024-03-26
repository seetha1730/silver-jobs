const Navbar = () => {
    return (
        <div>
            <nav class="bg-[#194c80] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://silverJobs.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-[#ffffff] font-500 text-[27px] leading-[35px] whitespace-nowrap dark:text-white">SilverJobs</span>
                    </a>

                    <a href="https://silverJobs.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-[#ffffff] font-500 text-[14px] leading-[18px] whitespace-nowrap dark:text-white">FOR PENSIONERS</span>
                    </a>

                    <a href="https://silverJobs.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-[#ffffff] font-500 text-[14px] leading-[18px] whitespace-nowrap dark:text-white">FOR COMPANIES</span>
                    </a>

                    <a href="https://silverJobs.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-[#ffffff] font-500 text-[14px] leading-[18px] whitespace-nowrap dark:text-white">FOR HOUSEHOLDS</span>
                    </a>

                    <a href="https://silverJobs.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-[#ffffff] font-500 text-[14px] leading-[18px] whitespace-nowrap dark:text-white">MAGAZINE</span>
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="text-[#000000] bg-[#ffffff] hover:bg-[#ffffff] h-[41px] text-[12px] leading-[15px] font-medium text-sm px-4 py-2 text-center rounded-full mr-2">LOG IN</button>
                        <button type="button" class="text-[#000000] bg-[#64a3e1] hover:bg-[#64a3e1] h-[41px] text-[12px] leading-[15px] font-medium text-sm px-4 py-2 text-center rounded-full">TO REGISTER</button>
                    </div>

                </div>
            </nav>
        </div>

    );
}

export default Navbar;