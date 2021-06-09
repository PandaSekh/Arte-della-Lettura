export default function TextInput({ name, labelText, value, callback, placeholder }: TextInputParams): JSX.Element {
  return (
    <label htmlFor={name}>
      {labelText}:
      <textarea type="text" id={name} name={name} value={value} placeholder={placeholder} onChange={callback} />
    </label>
  );
}

interface TextInputParams {
  labelText: string;
  name: string;
  value: string;
  callback: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder: string;
}
