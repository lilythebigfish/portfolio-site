"use client";
import { ReactNode } from "react";

export function Header({ title }: { title: ReactNode }) {
  return <h1 className="text-3xl pt-12 pb-8 font-medium col-span-full">{title}</h1>;
}

export function Subheader({ title }: { title: ReactNode }) {
  return <h1 className="text-xl pt-8 pb-6 font-medium uppercase col-span-full">{title}</h1>;
}

export function Body({ content }: { content: ReactNode }) {
  return <p className="text-md pb-4"> {content}</p>;
}