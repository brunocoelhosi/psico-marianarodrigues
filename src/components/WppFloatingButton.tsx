import { MessageCircleCheck } from "lucide-react";

export function WppFloatingButton() {
  return (
    <div>
      <a
        target="_blank"
        href="https://wa.me/+5534996373011"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <MessageCircleCheck size={25} />
      </a>
      ;
    </div>
  );
}

export default WppFloatingButton;
