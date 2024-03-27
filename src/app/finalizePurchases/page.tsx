"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { useMovie } from "@/hooks/useHooks";

import useMobile from "@/global/isMobile/isMobile";

import FinalizePurchasesPage from ".";

export default function FinalizePurchases() {
  const { isLoading, removeAllFromCart, filmsInCart } = useMovie();
  const { push } = useRouter();

  useEffect(() => {
    if (filmsInCart.length === 0) return push("/");
    if (filmsInCart.length > 0) {
      removeAllFromCart();
      push("/finalizePurchases");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FinalizePurchasesPage
      isMobile={useMobile()}
      isLoading={isLoading}
      handleBackHome={() => push("/")}
    />
  );
}
