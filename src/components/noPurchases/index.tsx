"use client";

import { useRouter } from "next/navigation";

import useMobile from "@/global/isMobile/isMobile";

import { useMovie } from "@/hooks/useHooks";

import NoPurchasesComponent from "./noPurchases.component";

export default function NoPurchases() {
  const { isLoading } = useMovie();
  const { push } = useRouter();

  return (
    <NoPurchasesComponent
      isMobile={useMobile()}
      handleBackHome={() => push("/")}
      isLoading={isLoading}
    />
  );
}
