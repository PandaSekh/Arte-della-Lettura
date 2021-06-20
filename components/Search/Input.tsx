import Post from "@interfaces/Post";
import { useRouter } from "next/router"; import Fuse from "fuse.js";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Input({
  setResultsCallback,
  fuse
}: {
  setResultsCallback: Dispatch<SetStateAction<Post[]>>,
  fuse: Fuse<Post>
}): JSX.Element {
  const router = useRouter();
  const { q } = router.query;
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery((q as string) || "");
  }, [q]);

  useEffect(() => {
    const results = [...fuse
      .search(searchQuery)
      .slice(0, 6)
      .map((item) => item.item)]

    const delayDebounceFn = setTimeout(() => {
      setResultsCallback(results);
    }, 750);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <>
      <h2 className="text-center mx-auto">Cerca</h2>
      <input
        type="text"
        placeholder="Cerca"
        id="search"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md w-9/12 mx-auto mb-8"
      />
    </>
  );
}


// export default function Input({
//   setResultsCallback,
// }: {
//   setResultsCallback: (arg0: string) => void;
// }): JSX.Element {
//   const router = useRouter();
//   const { q } = router.query;
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     setSearchQuery((q as string) || "");
//   }, [q]);

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       setResultsCallback(searchQuery);
//     }, 750);

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchQuery]);

//   return (
//     <>
//       <h2 className="text-center mx-auto">Cerca</h2>
//       <input
//         type="text"
//         placeholder="Cerca"
//         id="search"
//         name="search"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md w-9/12 mx-auto mb-8"
//       />
//     </>
//   );
// }
