import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};
export default function NotFound() {
  return (
    <div className="py-10 text-center">
      <h1 className="text-xl">404: This page could not be found</h1>
    </div>
  );
}
