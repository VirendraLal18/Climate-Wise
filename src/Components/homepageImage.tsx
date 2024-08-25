import "../App.css"

const HomepageImage = (): JSX.Element => {
  return (
    <div className="min-h-[50vh] w-[50%] items-center flex justify-center rounded-3xl flex-col overflow-y-scroll no-scrollbar">
      <div className="min-h-[35vh] w-[40]">
        <img src="/ui/Clouds&umbrella 2.png" alt="Image" />
      </div>
      <p className="text-5xl font-thin bg-white bg-opacity-20 rounded-lg p-2 border-x-4 border-y border-zinc-800">
        Welcome!
      </p>
    </div>
  )
}

export default HomepageImage
