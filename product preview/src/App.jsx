import Image from "./components/image"
import TextBox from "./components/textbox"
import DesktopImage from "./components/desktop-image"

export default function App() {
  return (
    <>
      <section className="h-screen pt-10 md:flex md:justify-center md:items-center md:h-screen">
        <div className=" flex flex-col justify-center h-full md:flex md:flex-row md:h-[35rem]">
          <Image />
          <DesktopImage />
          <TextBox />
        </div>
      </section>
    </>
  )
}


