type Avatar = {
  url: string;
};

export type Creator = {
  id: string;
  username: string;
  fullName: string;
  bio?: string;
  avatar?: Avatar;
};
