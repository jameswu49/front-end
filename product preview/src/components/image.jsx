import mobileImage from "../images/image-product-mobile.jpg"

export default function Image() {
    return (
        <>
            <div className="flex justify-center mx-5">
                <img className="rounded-t-lg md:hidden" src={mobileImage} alt="" />
            </div>
        </>
    )
}