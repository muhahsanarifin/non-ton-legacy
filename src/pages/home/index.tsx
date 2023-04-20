import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { DateTime } from "luxon";
import type { RootState } from "@/redux/store";
import { contentsAction } from "@/redux/reducers/content";

import { Title } from "@/components/Title";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search } from "@/components/Form";
import { Pagination } from "@/components/Pagination";
import { ResetButton } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { Skeleton } from "@/components/Loader";
import { Info } from "@/components/Info";

const Home = () => {
  const dispatch = useDispatch<any>();
  const contents = useSelector(
    (state: RootState) => state.contents.retriveContents
  );

  const loading = useSelector((state: RootState) => state.contents?.isLoading);
  const [page, setPage] = useState<number>(1);
  const [media, setMedia] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [focus, setFocus] = useState<number>();
  const [queryString, setQueryString] = useState<string>(
    media
      ? `page=${page}&media=${media}`
      : query
      ? `page=${page}&query=${query}`
      : `page=${page}`
  );
  const router = useRouter();

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
    dispatch(contentsAction.retriveContentsThunk(queryString));
  }, [queryString, dispatch]);

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

  const mediaArrOfObjs = [
    {
      id: 0,
      media: "web",
      page: 1,
    },
    {
      id: 1,
      media: "tulisan",
      page: 1,
    },
    {
      id: 2,
      media: "podcast",
      page: 1,
    },
    {
      id: 3,
      media: "video",
      page: 1,
    },
  ];

  return (
    <>
      <Title name="Home" />
      <Modal onIdModal="about-modal" />
      <div className="flex flex-col">
        <Header />
        <main className="bg-white flex flex-row pt-16">
          <section className="w-52 shadow xs:hidden">
            <aside className="relative">
              <div className="fixed p-2 w-52 min-h-screen">
                <ul className="menu text-cyan-dark">
                  <li className="menu-title my-2 shadow p-2">Media</li>
                  {mediaArrOfObjs?.map((mediaArrOfObj) => (
                    <>
                      <li
                        className={
                          focus !== mediaArrOfObj?.id
                            ? "text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full capitalize font-semibold"
                            : "text-sm cursor-pointer my-1 bg-cyan-blue-medium-ligth ring-2 ring-cyan-blue-light p-2 rounded-full capitalize font-semibold"
                        }
                        onClick={() => {
                          setMedia(mediaArrOfObj.media);
                          setPage(mediaArrOfObj.page);
                          setFocus(mediaArrOfObj.id);
                        }}
                        key={mediaArrOfObj.id}
                      >
                        {mediaArrOfObj.media}
                      </li>
                    </>
                  ))}
                </ul>
                {contents?.total !== 0 ? (
                  <div className="absolute bottom-24">
                    <Pagination
                      onSetPages={setPage}
                      onPage={page}
                      onTotalPages={totalPages(
                        contents.data?.length,
                        contents?.total
                      )}
                      onContentPegs={contents?.total}
                    />
                  </div>
                ) : null}
              </div>
            </aside>
          </section>

          <section className=" p-4 flex-1 flex flex-col gap-y-4 xs:w-full">
            <div>
              <Search onSetQuery={setQuery} onSetPages={setPage} />
            </div>
            <div className="rounded-md shadow min-h-screen ">
              {media || query || page > 1 ? (
                <div className="flex justify-end px-4">
                  <ResetButton />
                </div>
              ) : null}

              <ul className=" p-4 flex flex-col gap-y-2">
                {loading ? (
                  new Array(6).fill(0).map((_, idx) => <Skeleton key={idx} />)
                ) : contents?.total !== 0 ? (
                  contents?.data?.map((content: any) => (
                    <>
                      <li
                        className="text-cyan-dark shadow p-2 flex flex-col gap-y-2 rounded-md xs:w-full"
                        key={content.id}
                      >
                        <h3 className="font-extrabold xs: text-base">
                          {content.title}
                        </h3>
                        <div className="text-xs">
                          <p className="text-justify xs:hidden">
                            {content.body}
                          </p>
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
                            <p className="font-bold">
                              Published:{" "}
                              {handleDateTime(content.original_published_at)}
                            </p>
                            <p className="font-bold">
                              Created: {handleDateTime(content.created_at)}
                            </p>
                            <p className="font-bold">
                              Updated: {handleDateTime(content.updated_at)}
                            </p>
                          </span>
                        </div>
                      </li>
                    </>
                  ))
                ) : (
                  <Info />
                )}
              </ul>
            </div>
          </section>
        </main>
        <Footer
          onSetPages={setPage}
          onPage={page}
          onTotalPages={totalPages(contents.data?.length, contents?.total)}
          onContentPegs={contents?.total}
        />
      </div>
    </>
  );
};

export default Home;
