export enum AvatarSize {
  small = "32x",
  medium = "64px",
  large = "128px",
}

export interface IAvatarProps {
  src: string;
  alt: string;
  name?: string;
  size?: AvatarSize;
}
