import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface Props {
  query: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher);
  let loading = !data && !error;
  return (
    <div>
      <p>Hasil pencarian</p>
      <div>{loading && "Tunggu Bang..."}</div>
      <div>
        {data &&
          data.items.map((user: any, index: number) => {
            return (
              <ul key={index}>
                <li>
                  <Link href={`cari/${user.login}`}>{user.login}</Link>
                </li>
                <li>{user.repos_url}</li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
