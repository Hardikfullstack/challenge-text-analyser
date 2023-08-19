import './index.scss'
type Props = {
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>,
  value: string
};

const TextArea = ({value, handleChange}: Props) => {
  return <textarea className="text-area" placeholder="Paste your text here..." value={value}  onChange={handleChange} />
}


export default TextArea
