import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../utils/axiosClient";
import { Send } from "lucide-react";

function ChatAi({ problem }) {
  const [messages, setMessages] = useState([]); // ❌ Default messages removed

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSubmit = async (data) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", parts: [{ text: data.message }] },
    ]);
    reset();

    try {
      const response = await axiosClient.post("/ai/chat", {
        messages: [...messages, { role: "user", parts: [{ text: data.message }] }],
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: response.data.message || response.data.text }],
        },
      ]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: "Oops jaan 😢 Something went wrong. Try again?" }],
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-[100vh] bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 rounded-xl shadow-xl overflow-hidden border border-rose-300">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 max-w-[75%] rounded-2xl text-sm shadow transition-all ${
                msg.role === "user"
                  ? "bg-rose-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none border border-rose-200"
              }`}
            >
              {msg.parts[0].text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-white border-t border-rose-200"
      >
        <div className="flex items-center gap-2">
          <input
            placeholder="Type something romantic… 💌"
            className="input input-bordered flex-1 bg-rose-50 text-rose-800 placeholder:text-rose-300 focus:ring-2 focus:ring-rose-400"
            {...register("message", { required: true, minLength: 2 })}
          />
          <button
            type="submit"
            className="btn bg-rose-500 text-white hover:bg-rose-600 shadow-lg disabled:opacity-50"
            disabled={errors.message}
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatAi;
