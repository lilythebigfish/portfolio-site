import { ReactNode } from "react";

export function Article({children}: {children: ReactNode}){
  return <div className="mx-10 md:mx-56 md:pt-20 md:grid md:grid-cols-3 gap-x-20">{children}</div>
}