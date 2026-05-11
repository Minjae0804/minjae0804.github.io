import { Link } from "react-router-dom";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";
import ui from "../config/ui.json";

export default function NotFoundPage() {
  useSEO({ title: ui.notFound.title });

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-28 gap-4 text-center">
        <p className="text-7xl font-semibold text-brown-100 dark:text-brown-900 select-none">{ui.notFound.code}</p>
        <h1 className="text-xl font-semibold text-stone-900 dark:text-white">{ui.notFound.title}</h1>
        <p className="text-sm text-stone-400 dark:text-stone-500">{ui.notFound.desc}</p>
        <Link to="/" className="mt-2 text-sm text-brown-500 dark:text-brown-300 hover:underline underline-offset-2">
          {ui.notFound.backToHome}
        </Link>
      </div>
    </PageLayout>
  );
}
