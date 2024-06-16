import PageHeading from "../Heading/PageHeading";
import { IPageLayoutProps } from "./PageLayout.interface";

export default function PageLayout(props: IPageLayoutProps) {
  return (
    <div className="bg-teal-50 min-h-full h-full rounded-b-lg">
      <PageHeading text={props.heading} />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 overflow-y-auto max-h-full">
          {props.children}
        </div>
      </main>
    </div>
  );
}
