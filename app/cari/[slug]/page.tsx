import React, { Suspense } from "react";
import RepoList from "./sectionRepository";
import DetailItem from "@/components/DetailItem";

async function getDataUser(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
}

export default async function DetailCari({ params }: { params: { slug: string } }) {
  const dataUser = await getDataUser(params.slug);

  return (
    <div>
      <p className="text-center my-10 text-3xl font-bold">PROFILE</p>
      <div>
        <DetailItem key={1 + 1} name={dataUser.login} company={dataUser.company} bio={dataUser.bio} followers={dataUser.followers} following={dataUser.following} location={dataUser.location} imageUrl={dataUser.avatar_url} />
        {/* <div>{JSON.stringify(dataUser)}</div> */}
      </div>
      <div>
        <Suspense fallback={<div className="text-center my-20 text-3xl font-bold">Sedang mengambil repository...</div>}>
          {/* @ts-ignore */}
          <RepoList slug={params.slug} />
        </Suspense>
      </div>
    </div>
  );
}
