import { MouseEventHandler } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

function darkMode(classes: Array<string>, dark: boolean) {
  let newClasses: string[] = [];

  classes.forEach((c) => {
    newClasses.push(c);
    if (dark) {
      newClasses.push(c + "-dark");
    }
  });

  return newClasses.join(" ");
}

export default function SettingOption(props: {
  dark: boolean;
  ShowCaseIcon: IconType;
  PopUp?: IconType;
  title: string;
  description: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  Extra?: JSX.Element;
}) {
  const { dark, title, description, ShowCaseIcon, onClick, PopUp, Extra } =
    props;

  const LinkIcon = PopUp != undefined ? (_ignore: IconBaseProps) => <></> : FiExternalLink;

  return (
    <div className={`${darkMode(["checkbox"], dark)} checkbox-special mt-3 cursor-pointer`}>
      <div className="checkbox-special-child" onClick={onClick}>
        <div className="ml-3"></div>

        <div
          className={`flex items-center justify-center ${
            dark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <ShowCaseIcon size="2.5em" />
        </div>

        <div className="ml-3"></div>

        <h6>
          <div className="flex space-x-1">
            <h2>{title}</h2>
            <LinkIcon
              size="1em"
              className={
                dark ? "text-slate-300" : "text-slate-700"
              }
            />
          </div>

          <p>{description}</p>
        </h6>

        <div className="mx-auto"></div>

        <div className="my-auto ml-auto mr-1 transition-all">
          {PopUp ? <PopUp /> : <></>}
        </div>

        <div className="mr-3"></div>
      </div>

      {Extra ? <>{Extra}</> : <></>}
    </div>
  );
}
