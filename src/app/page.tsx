"use client";

import { useMovie } from "@/hooks/useHooks";

import { ListFilms, Loading } from "@/components";
import { Input } from "@/components/Input";
import { useState } from "react";
import { ButtonSearch } from "@/components/Button/Button.styles";
import { SearchIcon } from "@/icons/search.icon";
import { useRouter } from "next/navigation";
import ErrorGet from "@/components/ErrorGet";

export default function HomePage() {
  const router = useRouter();
  const { handleCartAction, allMovies, isLoading, ...props } = useMovie();
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    const encodedQuery = encodeURIComponent(search);

    router.push(`/search?search-query=${encodedQuery}`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {allMovies.length > 0 ? (
        <>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <Input
              type="text"
              placeholder="Buscar filme pelo nome"
              onChange={(e) => setSearch(e.target.value)}
            />
            <ButtonSearch onClick={handleSearch}>
              <SearchIcon />
            </ButtonSearch>
          </div>
          <ListFilms
            handleCartAction={handleCartAction}
            list={allMovies}
            isLoading={isLoading}
            {...props}
          />
        </>
      ) : (
        <ErrorGet
          isMobile={false}
          isLoading={isLoading}
          handleBackHome={() => window.location.reload()}
        />
      )}
    </>
  );
}
