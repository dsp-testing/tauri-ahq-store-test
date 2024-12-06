import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IconType } from "react-icons/lib";

export default function SidebarSelector(props: {
  Icon: IconType;
  dark: boolean;
  initial: string;
  onChange: (e: string) => void;
}) {
  const { Icon, initial, onChange } = props;

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
        Sidebar<p>Choose the sidebar style that suits you best!</p>
      </h6>

      <div className="mx-auto"></div>

      <Select onValueChange={onChange} defaultValue={initial}>
        <SelectTrigger className="h-10 w-[15rem] max-w-xs my-auto">
          <SelectValue placeholder="Select Sidebar Location" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="flex-row">Left</SelectItem>
            <SelectItem value="flex-row-reverse">Right</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="mr-3"></div>
    </div>
  );
}
