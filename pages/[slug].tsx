import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { FunctionComponent } from "react";
import { Avatar, LinkBlock, MainLayout, Meta, VideoBlock } from "../components";
import { client } from "../lib/graphcms-client";
import { creatorByUsernameQuery, allCreatorSlugsQuery } from "../lib/queries";
import type { Creator, LinkBlockType, VideoBlockType } from "../types";

type Props = {
  creator: Creator | null;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await client.request<Props>(creatorByUsernameQuery, {
    username: (params as IParams).slug,
  });

  return {
    props: {
      creator: data.creator,
    },
  };
};

type AllCreatorSlugsQueryData = {
  creators: {
    username: string;
  }[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.request<AllCreatorSlugsQueryData>(
    allCreatorSlugsQuery
  );

  const paths = data.creators.map((item) => ({
    params: { slug: item.username },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Creator: FunctionComponent<Props> = ({ creator }) => {
  if (!creator) {
    return null;
  }

  return (
    <>
      <Meta
        title={creator.fullName}
        description={creator.bio}
        ogimage={creator.avatar?.url}
      />

      <MainLayout>
        <div className="max-w-[25rem] mx-auto">
          <div className="flex flex-col items-center text-center">
            <Avatar
              src={creator.avatar?.url as string}
              alt={creator.fullName}
              size={100}
            />

            <h3 className="mt-4 text-xl font-bold text-black leading-6">
              {creator.fullName}
            </h3>

            {creator.bio && (
              <div className="mt-0.5 text-gray-600 leading-5">
                {creator.bio}
              </div>
            )}
          </div>

          <div className="mt-7 space-y-4">
            {creator.blocks?.length &&
              creator.blocks.map((block) => {
                if (block.__typename === "LinkBlock") {
                  return (
                    <LinkBlock
                      key={block.id}
                      label={(block as LinkBlockType).label}
                      url={block.url}
                    />
                  );
                } else if (block.__typename === "VideoBlock") {
                  return (
                    <VideoBlock
                      key={(block as VideoBlockType).id}
                      url={block.url}
                    />
                  );
                }
              })}
          </div>

          <Link href="/">
            <a className="mt-12 inline-block text-primary-500">&#8592; Home</a>
          </Link>
        </div>
      </MainLayout>
    </>
  );
};

export default Creator;
