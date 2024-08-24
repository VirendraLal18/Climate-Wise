import wind from "./Icons/wind"
import feelsLike from "./Icons/feelsLike"
import humidity from "./Icons/humidity"
import visibility from "./Icons/visibility"
import pressure from "./Icons/pressure"
import precipitation from "./Icons/precipitation"

type Props = {
  icon:
    | "wind"
    | "feelsLike"
    | "humidity"
    | "visibility"
    | "pressure"
    | "precipitation"
  title: string
  info: string
  description: string
}

const icons = {
  wind: wind,
  feelsLike: feelsLike,
  humidity: humidity,
  visibility: visibility,
  pressure: pressure,
  precipitation: precipitation,
}

// title, info, description

const Widgets = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon]

  return (
    <article className=" bg-white bg-opacity-40 drop-shadow-lg h-[130px] w-[210px] p-2 rounded-lg flex flex-col justify-between hover:bg-zinc-500 hover:h-[140px] hover:w-[220px]">
      <div className="flex">
        <Icon />
        <span className="text-2xl text-white font-semibold ml-4">
          <h3>{title}</h3>
        </span>
      </div>
      <h3 className="text-3xl font-light text-white">{info}</h3>
      <p className="text-md text-white mb-2 font-normal gap-2">{description}</p>
    </article>
  )
}

export default Widgets
