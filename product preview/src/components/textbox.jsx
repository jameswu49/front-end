const cart = <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg>

export default function TextBox() {
    return (
        <>
            <div className="bg-white mx-5 rounded-b-lg px-5 h-[28rem] md:ml-0 md:pl-0 md:rounded-r-lg md:h-[34rem]">
                <p className="space montserrat-500 grey pt-6 md:pt-10 md:pl-10 md:text-base md:pb-4">
                    PERFUME
                </p>
                <p className="fraunces dark-blue font-bold text-3xl pt-4 pb-3 pl-1 md:pl-11 md:pb-6 md:text-4xl">
                    Gabrielle <br className="desktop" /> Essence
                    Eau <br className="desktop" /> De Parfum
                </p>
                <p className="leading-7 montserrat-500 grey pb-8 text-[14px] md:pl-12 md:text-base md:leading-6 md:pb-8">
                    A floral, solar and voluptuous  <br /> interpretation composed by <br className="desktop" /> Olivier <br className="break" /> Polge, Perfumer-Creator <br className="desktop" /> for the House of CHANEL.
                </p>
                <p className="fraunces text-4xl green font-bold flex pl-2 md:pl-12">
                    $149.99
                    <span className="montserrat-500 grey text-sm flex items-center line-through ml-5">$169.99</span>
                </p>
                <div className="flex justify-center rounded-lg pt-8 md:pt-10 md:pb-0">
                    <button className="montserrat-500 greenbg text-white text-sm rounded-lg w-full py-4 cursor-pointer flex justify-center md:ml-10"> <span className="flex items-center h-full pr-2">{cart}</span> Add to Cart</button>
                </div>
            </div>
        </>
    )
}