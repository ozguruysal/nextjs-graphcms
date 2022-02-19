type Avatar = {
  url: string;
};

type BlockTypeName = "LinkBlock" | "VideoBlock";

export type LinkBlockType = {
  __typename: BlockTypeName;
  id: string;
  label: string;
  url: string;
};

export type VideoBlockType = {
  __typename: BlockTypeName;
  id: string;
  url: string;
};

export type Creator = {
  id: string;
  username: string;
  fullName: string;
  bio?: string;
  avatar?: Avatar;
  blocks?: Array<LinkBlockType | VideoBlockType>;
};
