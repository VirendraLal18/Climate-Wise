type props = {
  temp: number
}

const Degree = ({temp}: props): JSX.Element => {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  )
}

export default Degree
