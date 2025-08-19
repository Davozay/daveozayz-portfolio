

export default function Footer() {
    return (
        // <section>
        //     <div className="">
        //         {/* <i id="jumper" className="text-50px] ri-circle-line "></i>
        //         <i id="jumper" className="text-50px] ri-circle-line "></i>
        //         <i id="jumper" className="text-50px] ri-circle-line "></i>
        //          */}
        //     </div>

        // </section>

        <footer className="relative  min-h-[20px] px-[20px] py-[5px] flex flex-col items-center justify-between overflow-hidden">
            {/* Waves */}
            <div className="waves absolute bottom-[-20px]  w-full h-[120px] overflow-hidden z-0">
                <div className=" wave " id="wave1"></div>
                <div className=" wave " id="wave2"></div>
                <div className=" wave " id="wave3"></div>
                <div className=" wave  " id="wave4"></div>
            </div>


            {/* Social Icons */}
            <ul className="flex relative items-center justify-center mx-0 my-[10px] flex-wrap z-10">
                <li>
                    <a className="inline-block mx-[10px] text-[2em] text-white transition duration-500 hover:translate-y-[-5px]" href="https://www.facebook.com/share/1EogMYG6s6/?mibextid=wwXlfr" target="_blank">
                        <i className="ri-facebook-line transition duration-200 hover:text-blue-700"></i>
                    </a>
                </li>
                <li>
                    <a className="inline-block mx-[10px] text-[2em] text-white transition duration-500 hover:translate-y-[-5px]" href="https://x.com/davozay" target="_blank">
                        <i className="ri-twitter-x-line transition duration-200 hover:text-gray-900"></i>
                    </a>
                </li>
                <li>
                    <a className="inline-block mx-[10px] text-[2em] text-white transition duration-500 hover:translate-y-[-5px]" href="https://www.linkedin.com/feed/" target="_blank">
                        <i className="ri-linkedin-line transition duration-200 hover:text-blue-600"></i>
                    </a>
                </li>
                <li>
  <a
    className="inline-block mx-[10px] text-[2em] text-white transition-all duration-500 hover:translate-y-[-5px] 
               bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] bg-clip-text text-transparent hover:text-transparent"
    href="https://www.instagram.com/daveozay_23"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="ri-instagram-line"></i>
  </a>
</li>




            </ul>

            {/* Copyright */}
            <p className="text-sm text-center mt-[15px] text-[1.1em] text-white z-10">
                &copy; 2025 | Designed by <span className="font-semibold text-red-100/85">Daveozay</span>
            </p>
        </footer>



    )
}
