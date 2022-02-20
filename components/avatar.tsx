import { FunctionComponent } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: number;
};

export const Avatar: FunctionComponent<Props> = ({ src, alt, size }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }}>
      <Image
        className="inline-block object-cover rounded-full"
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </div>
  );
};
