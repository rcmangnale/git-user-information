import { useEffect, useState } from "react";

export default function ShowUserDetails() {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [imageUrl, setAvtar] = useState();
  const [gists, setGists] = useState();
  const [repos, setRepos] = useState();
  const [createdAt, setCreatedAt] = useState();

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("User"));
    setName(data.name);
    setUserName(data.login);
    setAvtar(data.avatar_url);
    setGists(data.public_gists);
    setRepos(data.public_repos);
    setCreatedAt(data.created_at.slice(0, 10));
  }, []);
  
  return (
    <>
      <div className="p-4 text-lg text-center ">
        <div>
          <div>
            <img src={imageUrl} height="100px" width="100px" alt="" />
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Github Information
          </h3>
        </div>
        <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">UserName</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userName}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {name}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                No. of public repos
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {repos}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                No. of public gists
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {gists}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Profile created at 
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {createdAt}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
