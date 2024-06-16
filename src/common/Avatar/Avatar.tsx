import { AvatarSize, IAvatarProps } from "./Avatar.interface";

export default function Avatar(props: IAvatarProps) {
  return (
    <div
      className="flex content-center py-1"
      style={{ minWidth: props.size || AvatarSize.small }}
    >
      <img
        className={
          props.withBorder ? "border border-teal-700 rounded-full" : undefined
        }
        src={props.src}
        height={props.size || AvatarSize.small}
        width={props.size || AvatarSize.small}
        alt={props.alt}
      />
      {props.name && <span className="px-4 content-center">{props.name}</span>}
    </div>
  );
}
