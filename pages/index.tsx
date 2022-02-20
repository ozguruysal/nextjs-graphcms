import type { GetStaticProps, NextPage } from "next";
import { CreatorCard, MainLayout, Meta } from "../components";
import { client } from "../lib/graphcms-client";
import { allCreatorsQuery } from "../lib/queries";
import type { Creator } from "../types";

type Props = {
  creators: Creator[];
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(allCreatorsQuery);

  return {
    props: {
      creators: data.creators as Creator[],
    },
  };
};

const Home: NextPage<Props> = ({ creators }) => {
  return (
    <>
      <Meta />
      <MainLayout>
        <h1 className="text-4xl font-bold">Popular creators</h1>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
