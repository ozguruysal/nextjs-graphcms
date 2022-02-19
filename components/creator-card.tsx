import { FunctionComponent } from "react";
import type { Creator } from "../types";
import { Avatar } from ".";
import Link from "next/link";

type Props = {
  creator: Creator;
};

export const CreatorCard: FunctionComponent<Props> = ({ creator }) => {
  return (
    <Link href={`/${creator.username}`}>
      <a className="p-6 flex flex-col items-center text-center border hover:border-gray-300 hover:shadow-sm rounded">
        {creator.avatar && (
          <Avatar src={creator.avatar?.url} alt={creator.fullName} size={64} />
        )}

        <h3 className="mt-4 text-xl font-bold text-black">
          {creator.fullName}
        </h3>
        <div className="mt-0.5 text-gray-600">@{creator.username}</div>
      </a>
    </Link>
  );
};
