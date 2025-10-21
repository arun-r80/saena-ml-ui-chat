/*
Components to render container components of the app
*/

export default function HeaderBar() {
  return (
    <div className="flex flex-col justify-center bg-blue-500 rounded-lg h-24">
      <p className="font-bitcount text-center text-[20px]">
        FormAssistant - Your Form Assistant Bot
      </p>
    </div>
  );
}

export function ChatContainer() {
  return;
}
