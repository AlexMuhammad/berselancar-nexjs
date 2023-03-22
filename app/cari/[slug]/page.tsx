import React, { Suspense } from "react";
import RepoList from "./sectionRepository";

async function getDataUser(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
}

export default async function DetailCari({ params }: { params: { slug: string } }) {
  const dataUser = await getDataUser(params.slug);

  return (
    <div>
      <p>Detail User: {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>
      <div>
        <Suspense fallback={<div>Sedang mengambil repository...</div>}>
          {/* @ts-ignore */}
          <RepoList slug={params.slug} />
        </Suspense>
      </div>
    </div>
  );
}
