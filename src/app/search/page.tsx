"use client";

import { useMovie } from "@/hooks/useHooks";

import { ListFilms, Loading } from "@/components";
import { Input } from "@/components/Input";
import { useState } from "react";
import { ButtonSearch } from "@/components/Button/Button.styles";
import { SearchIcon } from "@/icons/search.icon";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const urlQuery = typeof window !== 'undefined' ? window?.location?.href : '';
  const nameMovie = urlQuery.split("=")[1]?.replace("%20", " ");
  const { handleCartAction, allMovies, isLoading, ...props } = useMovie();
  const [search, setSearch] = useState<string>("");

  const handleSearch = async () => {
    const encodedQuery = encodeURIComponent(search);

    router.push(`/search?search-query=${encodedQuery}`);
  };

  const searchLowerCase = nameMovie?.toLowerCase();
  const filterMovies = allMovies?.filter((item) =>
    item?.title.toLowerCase().includes(searchLowerCase)
  );

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <Input
          type="text"
          placeholder="Buscar filme pelo nome"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ButtonSearch
          onClick={() => {
            handleSearch();
          }}
        >
          <SearchIcon />
        </ButtonSearch>
      </div>
      <ListFilms
        handleCartAction={handleCartAction}
        list={filterMovies}
        isLoading={isLoading}
        {...props}
      />
    </>
  );
}
