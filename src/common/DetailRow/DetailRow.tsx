import { IDetailRowProps } from "./DetailRow.interface";

const DetailRow: React.FC<IDetailRowProps> = ({ label, text }) => {
  return (
    <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {text}
      </dd>
    </div>
  );
};

export default DetailRow;
