"use client";

import { useRef } from "react";
import FooterSection from "./components/footer.section";
import SecondSection from "./components/second.section";
import TitleSection from "./components/title.section";

export default function Home() {
  const ref = useRef(null);

  return (
    <div>
      <StyleSheet />

      <TitleSection scrollRef={ref} />

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
