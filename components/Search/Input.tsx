import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Input({ setResultsCallback }: { setResultsCallback: (arg0: string) => void }): JSX.Element {
  const router = useRouter();
  const { query } = router.query;
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery((query as string) || "");
  }, [query]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setResultsCallback(searchQuery);
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
