import DetailRepo from "@/components/DetailRepo";

async function getDataRepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  await new Promise((r) => setTimeout(r, 2000));
  return res.json();
}

const RepoList = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);
  // console.log(dataRepos);

  return (
    <>
      <p className="text-center text-2xl font-bold my-10">List Repository</p>
      {/* <div>{JSON.stringify(dataRepos)}</div> */}
      <div className="flex justify-center flex-wrap gap-10">
        {Array.from(dataRepos).map((user: any, index: any) => (
          <DetailRepo name={user.name} htmlUrl={user.html_url} description={user.description} />
        ))}
      </div>
    </>
  );
};

export default RepoList;
