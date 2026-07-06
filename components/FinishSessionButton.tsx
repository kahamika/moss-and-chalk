interface FinishSessionButtonProps {
  onFinish: () => void;
}

export default function FinishSessionButton({
  onFinish,
}: FinishSessionButtonProps) {
  return (
    <div className="mt-8 flex justify-end">
      <button
        type="button"
        onClick={onFinish}
        className="rounded-2xl bg-[#2F4732] px-8 py-4 text-white hover:opacity-90 transition"
      >
        Finish Session
      </button>
    </div>
  );
}