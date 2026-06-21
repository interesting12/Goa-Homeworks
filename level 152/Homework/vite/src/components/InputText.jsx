export default function InputText({ value, setValue }) {
  return (
    <input
      className="border p-2"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}