import { FunctionComponent } from "react";

type Props = {
  label: string;
  url: string;
};

export const LinkBlock: FunctionComponent<Props> = ({ label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="px-4 py-[0.6875rem] block text-center text-lg text-primary-700 font-semibold bg-primary-100 hover:bg-primary-200 border border-primary-300 rounded overflow-hidden overflow-ellipsis transition-colors ease-linear duration-150"
    >
      {label}
    </a>
  );
};
