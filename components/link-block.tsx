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
      className="h-13 px-4 w-full flex items-center justify-center text-lg text-primary-700 font-semibold bg-primary-100 hover:bg-primary-200 border border-primary-300 rounded transition-colors ease-linear duration-150"
    >
      {label}
    </a>
  );
};
