export default function StepInput({ step, setStep }) {
  return (
    <div>
      <label className="font-bold block mb-2">
        Step Size
      </label>

      <input
        type="number"
        min="1"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        className="border p-2 rounded w-32 text-center"
      />
    </div>
  );
}