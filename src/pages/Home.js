import React from "react";

function Home() {
  return (
    <>
      <main className="w-full py-16">
        <h2 className="my-4 text-slate-400 w-4/5 mx-auto font-bold text-4xl">
          Welcome to home
        </h2>
        <div className="flex items-center mx-auto my-8 h-12 w-4/5">
          <div className="w-32 bg-red-200 mr-8 h-full"></div>
          <div className="w-48 bg-sky-200 mr-8 h-full"></div>
        </div>
        <div className="w-4/5 bg-gray-100 mx-auto">
          <p className="p-8 text-sm text-slate-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            labore illum deserunt recusandae minima sed voluptas possimus, quo
            exercitationem, temporibus quis laborum similique eveniet eius nisi
            consectetur consequuntur ex eum sint? Illum consectetur dolore sed
            voluptas voluptatibus magni quod asperiores!
          </p>
        </div>
        <div className="w-4/5 bg-gray-100 mx-auto my-8">
          <p className="text-sm text-slate-900 p-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            tempore quidem eaque! Reiciendis praesentium itaque laudantium
            voluptas qui et iste non. Deserunt doloremque deleniti consectetur.
            Corporis eum enim totam sunt, velit quo repellat ex consequuntur,
            doloribus unde ipsam corrupti magni animi dicta! Dolor adipisci,
            sunt dolorum ipsa officiis voluptatem obcaecati aperiam molestias
            doloremque laboriosam? Deleniti, numquam? Necessitatibus repellat
            nobis ipsam?
          </p>
        </div>
      </main>
    </>
  );
}

export default Home;
