import ListItemSearch from "@/components/ListItemSearch";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface Props {
  query: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher);
  console.log(data);
  let loading = !data && !error;
  return (
    <div className="mt-5">
      <p className="text-lg font-bold">
        Hasil pencarian : <span className="italic font-medium text-blue-600">{query}</span>
      </p>
      <div>{loading && "Tunggu Bang..."}</div>
      <div>
        {data &&
          data.items.map((user: any, index: number) => {
            return <ListItemSearch key={index} name={user.login} imageUrl={user.avatar_url} />;
          })}
        {/* <div>{data.item}</div> */}
      </div>
    </div>
  );
}
