import Header from "../Components/Header.jsx"
import Hero from "../Components/hero/Hero.jsx"
import HowTO from "../Components/HowTO.jsx"
import Footer from "../Components/Footer.jsx"
import Result from "./Result.jsx"
import { useContext } from "react"
import PageContext from "../context/PageContext.jsx"

function LandingPage() {
  const { fetchedResult } = useContext(PageContext)
  return (
    <div className={"relative"}>
      <div
        className={
          "mx-auto flex min-w-300 flex-col justify-between px-2 pt-4 md:max-w-1240 md:px-0"
        }
      >
        <Header />
        <Hero />
        <HowTO />
      </div>
      {fetchedResult && <Result />}
      <Footer />
    </div>
  )
}

export default LandingPage
