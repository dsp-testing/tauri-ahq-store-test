import { useEffect, useState } from "react";

//Icons
import { IoIosNotifications } from "react-icons/io";

//API
import { appData, getResource } from "../../resources/api/fetchApps";

export default function App({
  appInfo,
  dark,
  lastIndex,
  index,
}: {
    appInfo: appData;
    dark: boolean;
    lastIndex: boolean;
    index: number;
}) {
  const updating = false;

  const [icon, setIcon] = useState<string>();

  useEffect(() => {
    (async () => {
      setIcon(await getResource(appInfo.appId, "0"));
    })();
  }, [appInfo.appId]);

  return (
    <div
      className={`mx-2 flex min-h-[4.5rem] max-h-[4.5rem] max-w-[100%] checkbox pl-2 cursor-default rounded-none ${lastIndex ? "rounded-b-lg" : ""} ${index == 0 ? "rounded-t-lg" : ""}`}
    >
      {icon ? (
        <img
          src={icon}
          alt={appInfo.appDisplayName}
          className={`mr-2`}
          draggable={false}
          style={{
            width: "60px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />
      ) : (
          <div
          className={`dui-loading dui-loading-lg dui-loading-ring mt-5 mr-2 mb-[0.75rem] ${dark ? "text-white" : ""
            }`}
        />
      )}

      <div className="flex flex-col my-auto text-start">
        <h1 className={`flex ${dark ? "text-blue-400" : "text-blue-700"}`}>
          <span className="text-2xl">{appInfo.appDisplayName}</span>
          {updating ? (
            <div className={`${dark ? "text-yellow-500" : "text-yellow-900"}`}>
              <IoIosNotifications />
            </div>
          ) : (
            <></>
          )}
        </h1>
        <h2 className="block">
          {appInfo.description.substring(0, 64)}
          {appInfo.description.length > 64 ? "..." : ""}
        </h2>
      </div>
    </div>
  );
}
