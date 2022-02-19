import { FunctionComponent } from "react";

type Props = {
  url: string;
};

export const VideoBlock: FunctionComponent<Props> = ({ url }) => {
  return (
    <iframe
      className="w-full aspect-video shadow-md rounded"
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      loading="lazy"
      allowFullScreen
    ></iframe>
  );
};
