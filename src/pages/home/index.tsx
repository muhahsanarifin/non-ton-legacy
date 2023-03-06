import React, {useEffect, useState} from "react";
import { Title } from "@/components/Title";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search } from "@/components/Form";
import { Pagination } from "@/components/Pagination";

const Home = () => {
  return (
    <>
      <Title name="Home" />
      <div className="flex flex-col">
        <Header />
        <main className=" min-h-screen bg-white flex flex-row pt-16">
          <section className="w-52 shadow">
            <div className="relative">
              <div className="fixed p-2 w-52">
                <ul className="menu text-cyan-dark">
                  <li className="menu-title my-2 shadow p-2">Media</li>
                  <li className="text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full">
                    Web
                  </li>
                  <li className="text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full">
                    Tulisan
                  </li>
                  <li className="text-sm cursor-pointer my-1 hover:bg-cyan-blue-medium-ligth p-2 rounded-full">
                    Podcast / Video
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className=" p-4 flex-1 flex flex-col gap-y-4">
            <div>
              <Search />
            </div>
            <div className="rounded-md shadow h-screen">
              <ul className=" p-4 flex flex-col gap-y-2">
                <li className="text-cyan-dark shadow p-2 flex flex-col gap-y-2 rounded-md">
                  <h3>Website Statis</h3>
                  <article className="text-xs">
                    <p>
                      Website statis adalah website yang berisi konten yang
                      tetap atau statis, yang ditampilkan secara konsisten untuk
                      setiap pengunjung.
                    </p>
                  </article>
                  <div className="text-cyan-dark text-xs font-semibold">
                    <p>Contributor: hilmanski</p>
                    <span className="flex gap-x-2">
                      <p>Published: 2023-03-01T04:04:25</p>
                      <p>Created: 2023-03-06T01:49:20.95626</p>
                      <p>Updated: 2023-03-06T01:49:20.95626</p>
                    </span>
                  </div>
                </li>
              </ul>
              <Pagination />
            </div>
          </section>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
