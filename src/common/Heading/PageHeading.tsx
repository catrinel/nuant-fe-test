import { IPageHeadingProps } from "./Heading.interface";

export default function PageHeading(props: IPageHeadingProps) {
  return (
    <header className="shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold tracking-tight text-teal-950">
          {props.text}
        </h3>
      </div>
    </header>
  );
}
