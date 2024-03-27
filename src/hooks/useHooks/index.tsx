import { useCallback, useEffect, useState } from "react";

import { getFilms, putFilms } from "@/services/query";

import { UseAppDispatch, UseAppSelector } from "@/redux/store";
import { handleFilmsSelected } from "@/redux/slices/WeMovies/weMovies.slices";

import { IFilmsProps } from "@/interfaces/IFilms.interface";

export function useMovie() {
  const [isLoading, setIsLoading] = useState(true);

  const allMovies = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );
  const dispatch = UseAppDispatch();

  const fetchListFilms = useCallback(async () => {
    try {
      if (allMovies.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      setIsLoading(false);
      const res = await getFilms();
      dispatch(handleFilmsSelected(res));
    } catch (error) {
      setIsLoading(true);
      error;
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, allMovies.length]);

  const handleCartAction = useCallback(
    async (film: IFilmsProps, action: "add" | "remove" | "reset") => {
      try {
        const { cart, quantity, ...prev } = film;
        let updatedFilm;

        switch (action) {
          case "add":
            updatedFilm = {
              cart: true,
              quantity: quantity + 1,
              ...prev,
            };
            break;
          case "remove":
            updatedFilm = {
              cart: quantity === 1 ? false : true,
              quantity: quantity === 1 ? 0 : quantity - 1,
              ...prev,
            };
            break;
          case "reset":
            updatedFilm = {
              cart: false,
              quantity: 0,
              ...prev,
            };
            break;
          default:
            throw new Error("Invalid action type");
        }

        await putFilms(updatedFilm);
        fetchListFilms();
      } catch (error) {
        console.error(error);
      }
    },
    [fetchListFilms]
  );

  const filmsInCart = allMovies.filter((i) => i.cart);

  const removeAllFromCart = () => {
    filmsInCart.map((item) => {
      putFilms({ ...item, cart: false, quantity: 0 });
    });
  };

  useEffect(() => {
    fetchListFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    allMovies,
    filmsInCart,
    handleCartAction,
    removeAllFromCart,
  };
}
