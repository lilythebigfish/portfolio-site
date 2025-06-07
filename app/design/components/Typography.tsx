"use client";
import { ReactNode } from "react";

export function Header({ title }: { title: ReactNode }) {
  return <h1 className="text-xl md:text-3xl pt-8 md:pt-12 pb-4 md:pb-8 font-medium col-span-full">{title}</h1>;
}

export function Subheader({ title }: { title: ReactNode }) {
  return <h1 className="text-xl pt-8 pb-6 font-medium uppercase col-span-full">{title}</h1>;
}

export function Body({ content }: { content: ReactNode }) {
  return <p className="md:pb-4"> {content}</p>;
}