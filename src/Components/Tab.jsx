import { useContext, useState } from "react";
import Tab1 from "./Tab1.jsx";
import Tab2 from "./Tab2.jsx";
import Tab3 from "./Tab3.jsx";
import TabCarousal from "./TabCarousal.jsx";
import PageContext from "../PageContext.jsx";

function Tab() {
  const [isActive, setIsActive] = useState(1);
  const { tabIndex, setTabIndex } = useContext(PageContext);
  const btnText = [
    "Dial the Code",
    "Enter the Medication Code",
    "Receive Instant Result",
  ];

  return (
    <section className={"relative mt-8 h-330 w-full"}>
      <div
        className={
          "absolute left-0 hidden h-full w-1/3 flex-col justify-center gap-8 rounded-3xl bg-whiteSmoke px-4 py-6 md:flex"
        }
      >
        {btnText.map((text, index) => (
          <button
            onClick={() => setTabIndex(index)}
            className={`how-to-btn transform duration-500 ${tabIndex === index ? "bg-celestialBlue text-white" : ""}`}
            key={index}
          >
            {text}
          </button>
        ))}
      </div>
      <div className={" absolute right-0 h-330 md:w-[64%]"}>
        <TabCarousal />
      </div>
    </section>
  );
}

export default Tab;
