import React, { useEffect, useState } from "react";
import { contentProps } from "@/utils/types/contentsType";
import { getContents } from "../../utils/api/content";
import { useRouter } from "next/router";
import { DateTime } from "luxon";

import { Title } from "@/components/Title";
import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { Search } from "@/components/Form";
import { Pagination } from "@/components/Pagination";
import { ResetButton } from "@/components/Button";

const Home = () => {
  const [contents, setContents] = useState<contentProps>([]);
  const [page, setPage] = useState<number>(1);
  const [media, setMedia] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [queryString, setQueryString] = useState<string>(
    media
      ? `page=${page}&media=${media}`
      : query
      ? `page=${page}&query=${query}`
      : `page=${page}`
  );
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  // Updated new state
  useEffect(() => {
    setQueryString(
      media
        ? `page=${page}&media=${media}&query=${query}`
        : query
        ? `page=${page}&query=${query}`
        : `page=${page}`
    );
  }, [media, page, query]);

  useEffect(() => {
    const retrieveContents = async () => {
      try {
        setLoading(true);
        const response = await getContents(queryString);
        setContents(response?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    retrieveContents();
  }, [queryString]);

  useEffect(() => {
    router.push(`home?${queryString}`);
  }, [queryString]);

  // Total pages
  const totalPages = (data: number, total: number) => {
    return Math.ceil(total / data - 1);
  };

  // console.log(
  //   "Sample Total Pages: ",
  //   totalPages(contents.data?.length, contents?.total)
  // );

  // Handle datetime
  const handleDateTime = (date: any) => {
    return DateTime.fromISO(date).toFormat("ff");
  };

  return (
    <>
      <Title name="Home" />
      <div className="flex flex-col">
        <Header />
        <main className="bg-white flex flex-row pt-16">
          <section className="w-52 shadow">
            <div className="relative">
              <div className="fixed p-2 w-52 min-h-screen">
                <ul className="menu text-cyan-dark">
                  <li className="menu-title my-2 shadow p-2">Media</li>
                  <li
                    className="text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full"
                    onClick={() => {
                      setMedia("web");
                      setPage(1);
                    }}
                  >
                    Web
                  </li>
                  <li
                    className="text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full"
                    onClick={() => {
                      setMedia("tulisan");
                      setPage(1);
                    }}
                  >
                    Tulisan
                  </li>
                  <li
                    className="text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full"
                    onClick={() => {
                      setMedia("podcast");
                      setPage(1);
                    }}
                  >
                    Podcast
                  </li>
                  <li
                    className="text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full"
                    onClick={() => {
                      setMedia("video");
                      setPage(1);
                    }}
                  >
                    Video
                  </li>
                </ul>
                <div className="absolute bottom-24">
                  <Pagination
                    onSetPages={setPage}
                    onPage={page}
                    onTotalPages={totalPages(
                      contents.data?.length,
                      contents?.total
                    )}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className=" p-4 flex-1 flex flex-col gap-y-4">
            <div>
              <Search onSetQuery={setQuery} />
            </div>
            <div className="rounded-md shadow min-h-screen">
              {media || query || page > 1 ? (
                <div className="flex justify-end px-4">
                  <ResetButton />
                </div>
              ) : null}

              <ul className=" p-4 flex flex-col gap-y-2">
                {loading ? (
                  <Loader />
                ) : (
                  contents?.data?.map((content: any) => (
                    <>
                      <li
                        className="text-cyan-dark shadow p-2 flex flex-col gap-y-2 rounded-md"
                        key={content.id}
                      >
                        <h3 className="font-extrabold">{content.title}</h3>
                        <div className="text-xs">
                          <p className="text-justify">{content.body}</p>
                          <p
                            className="link link-primary font-semibold"
                            onClick={() => {
                              window.open(content.url, "_blank");
                            }}
                          >
                            visit
                          </p>
                        </div>
                        <div className="text-cyan-dark text-xs font-semibold">
                          <p>Contributor: {content.contributor}</p>
                          <span className="flex gap-x-2">
                            <p>
                              Published:{" "}
                              {handleDateTime(content.original_published_at)}
                            </p>
                            <p>Created: {handleDateTime(content.created_at)}</p>
                            <p>Updated: {handleDateTime(content.updated_at)}</p>
                          </span>
                        </div>
                      </li>
                    </>
                  ))
                )}
              </ul>
            </div>
          </section>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
