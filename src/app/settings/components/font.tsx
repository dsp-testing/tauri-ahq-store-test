import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IconType } from "react-icons/lib";

export default function ListSelector(props: {
  Icon: IconType;
  initial: string;
  onChange: (e: string) => void;
  list?: string[];
  klist: "font" | "theme" | "scale"
}) {
  const { Icon, initial, onChange, list, klist } = props;

  return (
    <div
      className={`checkbox mt-3`}
      style={{
        cursor: "default",
      }}
    >
      <div className="ml-3"></div>

      <div className={`flex items-center justify-center`}>
        {typeof Icon !== "string" ? (
          <Icon size="2.5em" />
        ) : (
          <img
            src={Icon}
            alt="Icon"
            style={{ minHeight: "2.5em", minWidth: "2.5em" }}
          />
        )}
      </div>

      <div className="ml-3"></div>

      <h6 style={{ cursor: "default" }}>
        {klist == "font" ? (
          <>
            Font<p>Choose the font that suits you best!</p>
          </>
        ) : klist == "theme" ? (
          <>
            Theme<p>Choose the UI theme of AHQ Store</p>
          </>
        ) : <>
          Scale<p>Choose your scale factor</p>
        </>}
      </h6>

      <div className="mx-auto"></div>

      <Select defaultValue={initial} onValueChange={onChange}>
        <SelectTrigger className="h-10 w-[15rem] max-w-xs my-auto">
          <SelectValue placeholder="Select" />
        </SelectTrigger>

        <SelectContent>
          {list ? (<>
            {list.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="text-lg"
              >
                {item == "night"
                  ? "Dark"
                  : item[0].toUpperCase() + item.slice(1)}
              </SelectItem>
            ))}</>) :
            (<>
              <SelectGroup>
                <SelectLabel className="border-t-0">Store Style</SelectLabel>
                <SelectItem value="def" style={{ fontFamily: "Segoe UI" }}>
                  Normal
                </SelectItem>
                <SelectItem value="def-v" style={{ fontFamily: "Roboto" }}>
                  Pro
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Store+</SelectLabel>
                <SelectItem value="ari" style={{ fontFamily: "Arial" }}>
                  Arial
                </SelectItem>
                <SelectItem value="ext" style={{ fontFamily: "Extatica" }}>
                  Extatica
                </SelectItem>
                <SelectItem value="bhn" style={{ fontFamily: "Bahnschrift" }}>
                  Bahnschrift
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Formal</SelectLabel>
                <SelectItem value="tnr" style={{ fontFamily: "Times New Roman" }}>
                  Times New Roman
                </SelectItem>
                <SelectItem value="geo" style={{ fontFamily: "Georgia" }}>
                  Georgia
                </SelectItem>
                <SelectItem value="gra" style={{ fontFamily: "Garamond" }}>
                  Garamond
                </SelectItem>
              </SelectGroup>
            </>)
          }
        </SelectContent>
      </Select>

      <div className="mr-3"></div>
    </div>
  );
}
