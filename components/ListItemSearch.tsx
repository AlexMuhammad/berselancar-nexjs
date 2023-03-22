import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  imageUrl: string;
}

export default function ListItemSearch({ name, imageUrl }: Props) {
  return (
    <div className="inline-flex w-full space-x-3 py-3">
      <Image src={imageUrl} width={60} height={60} alt={"img"} className="border-zinc-300 border rounded-full" />
      <div>
        <p className="text-lg">
          <Link href={`cari/${name}`}>{name}</Link>
        </p>
        <p className="text-sm hover:text-blue-500 text-zinc-500">
          <Link href={`cari/${name}`}>Lihat Repo</Link>
        </p>
      </div>
    </div>
  );
}
