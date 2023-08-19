import './index.scss'

type Props = {
  result: {
    title: string,
    value: number
  }[]
};
const ResultBox = ({result}: Props) => {

  return (
    <div className="result-bar">
      {result.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
