import emojiSuccess from "../../../assets/emoji-success.svg";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onRestartFeedback: () => void;
}

export function FeedbackSuccessStep({
  onRestartFeedback,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[384px]">
        <span className="text-xl mt-2 mb-[0.625rem]">
          Agradecemos o feedback!
        </span>

        <img src={emojiSuccess} title="Emoji de Sucesso" />

        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onRestartFeedback}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
