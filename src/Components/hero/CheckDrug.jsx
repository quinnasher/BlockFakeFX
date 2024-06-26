import { useContext, useRef } from "react"
import { fetchDrug } from "../../../utils/utils.js"
import PageContext from "../../context/PageContext.jsx"

export default function CheckDrug() {
  const { setFetchedResult, handleError, displaySpinner, setChecked } = useContext(PageContext)
  const searchDrugRef = useRef("")

  const spinner = displaySpinner(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { drugId: searchDrugRef.current.value }
    fetchDrug(data)
      .then((response) => {
        setFetchedResult(response)
        setChecked(false)
        console.log(response)
      })
      .catch((error) => {
        handleError(error.response.status)
        console.log(error)
      })
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className={"flex gap-2"}>
          <input
            ref={searchDrugRef}
            className={
              "rounded-3xl px-5  py-4 text-[0.65rem] text-textBlack outline-none md:w-436 md:max-w-[436px] md:px-10 md:text-sm"
            }
            type="text"
            placeholder={"Enter the secure digit on your drug pack"}
          />

          <button
            onClick={() => setChecked(true)}
            className={"z-50 rounded-3xl bg-indigoDye px-5 text-white md:px-10"}
          >
            Check
          </button>
        </fieldset>
      </form>
      {spinner}
    </>
  )
}