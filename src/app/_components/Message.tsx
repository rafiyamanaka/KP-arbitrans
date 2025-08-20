import { createPortal } from "react-dom";

function Message({ text }: { text?: string }) {
  if (!text) return null;

  return createPortal(
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white max-w-xs text-center text-netral-600 px-8 py-4 rounded-lg shadow-md border border-netral-400 z-[9999]">
      {text}
    </div>,
    document.body
  );
}

export default Message;
