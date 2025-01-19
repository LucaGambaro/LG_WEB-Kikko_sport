"use client";

import { useRef } from "react";
import ArticlesSection from "./components/articles.section";
import FooterSection from "./components/footer.section";
import SecondSection from "./components/second.section";
import TitleSection from "./components/title.section";

export default function Home() {
  const ref = useRef(null);

  return (
    <div className="bg-bg1">
      <StyleSheet />

      <TitleSection scrollRef={ref} />

      <ArticlesSection scrollRef={ref} />

      <SecondSection scrollRef={ref} />

      <FooterSection scrollRef={ref} />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
         html {
            scroll-snap-type: y mandatory;
        }
    `}</style>
  );
}
