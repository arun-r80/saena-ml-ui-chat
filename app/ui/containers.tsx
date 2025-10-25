/*
Components to render container components of the app
*/

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type emptyProps = {};

export default function HeaderBar() {
  return (
    <div className="flex flex-col justify-center bg-blue-500 rounded-lg h-24">
      <p className="font-bitcount text-center text-[20px]">
        FormAssistant - Your Form Assistant Bot
      </p>
    </div>
  );
}

export function ChatContainer({}: emptyProps) {
  return;
}

export function SideBar() {
  return (
    <div className="flex flex-col justify-center rounded-lg grow w-2/9 p-2 text-center bg-blue-500 min-h-full">
      FormAssisstant - Pre-configured, Customizable and Hallucinophilic
    </div>
  );
}

function ChatMessages({
  message,
  userType,
}: {
  message: string;
  userType: string;
}): JSX.Element {
  return (
    <div
      className={
        "flex flex-row rounded-lg " +
        (userType == "user"
          ? "justify-right bg-blue-500 text-white"
          : "justify-left text-blue-500")
      }
    >
      <p className="p-2">{message}</p>
    </div>
  );
}
