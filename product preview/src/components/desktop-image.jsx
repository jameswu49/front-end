import desktopImage from "../images/image-product-desktop.jpg"

export default function DesktopImage() {
    return (
        <section>
            <img className="desktop rounded-l-lg h-[34rem]" src={desktopImage} alt="" />
        </section>
    )
}