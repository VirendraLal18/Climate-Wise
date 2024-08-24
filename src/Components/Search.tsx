import { ChangeEvent } from "react"
import { optionType } from "../types"
import AppIcon from "./AppIcon"

type Props = {
  place: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  options: []
  onOptionSelect: (option: optionType) => void
  onSearch: () => void
}

function Search({
  place,
  onInputChange,
  options,
  onOptionSelect,
  onSearch,
}: Props): JSX.Element {
  return (
    // Define a state for the place that user will enter
    //bg-gradient-to-br from-sky-600 via-pink-400 to-sky-500

    <main className=" flex justify-start items-center h-[100vh]">
      <section className="bg-white bg-opacity-40 ml-[100px] h-[500px] w-full md:max-w-[400px] flex flex-col justify-center items-center rounded-xl drop-shadow-2xl border-2 hover:from-gray-500 hover:via-gray-400 hover:to-gray-600">
        <div className="mb-2">
          <AppIcon />
        </div>
        <h1 className="text-4xl font-extrabold bg-white h-[60px] w-[340px] flex justify-center items-center border-y-2 border-black rounded-md mb-8">
          Climate <span className="font-thin ml-2">Wise</span>
        </h1>
        <p className="text-center text-md px-2 py-2">
          Enter below a place you want to know weather of and select the area
          from dropdown
        </p>
        <div className="flex relative mt-10">
          <input
            type="text"
            value={place}
            placeholder="Enter the place"
            onChange={onInputChange}
            className="px-2 py-2 border-y-2 border-white rounded-l-md"
          />

          <ul className="absolute top-9 bg-white rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + "-" + index}>
                <button
                  className=" flex justify-center min-w-[100px] text-center text-sm w-full hover:bg-zinc-700 hover:text-white"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="px-2 py-2 border-2 border-white bg-[#96afb8] rounded-r-md hover:bg-[#334a52] hover:text-white cursor-pointer"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
