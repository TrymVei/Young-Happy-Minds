import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import Percent from "../../../components/percent/percent";
import style from "./percentSection.module.css";

const PercentSection = () => {
  const [loaded, setLoaded] = useState(false);
  const animationRef = useRef<HTMLDivElement | null>(null);

  const animation = () => {
    const tl = anime.timeline({
      easing: "linear",
      round: true,
      duration: 500,
    });

    tl.add({ targets: "#percent1", innerText: [0, 20], offset: "-=500" });
    tl.add({ targets: "#percent2", innerText: [0, 12], offset: "-=500" });
    tl.add({ targets: "#percent3", innerText: [0, 14], offset: "-=500" });
    tl.add({ targets: "#percent4", innerText: [0, 12], offset: "-=500" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          animation();
          setLoaded(true);
        }
      },
      { threshold: 0.5 },
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, [loaded]);

  return (
    <div id="section" className={style.percentSection}>
      <div>
        <h3>De ansatte som føler mest glede er...</h3>
        <div className={style.percentSection__grid} ref={animationRef}>
          <Percent
            percent={50}
            text={"mer motivert enn sine kollegaer"}
            percentColor={"#D1EACA"}
            textColor={"#F7FDF5"}
            id="1"
          />
          <Percent
            percent={155}
            text={"mer fornøyd med jobben sin"}
            percentColor={"#D1EACA"}
            textColor={"#F7FDF5"}
            id="2"
          />
          <Percent
            percent={50}
            text={"mer produktive"}
            percentColor={"#D1EACA"}
            textColor={"#F7FDF5"}
            id="3"
          />
          <Percent
            percent={108}
            text={"mer engasjerte"}
            percentColor={"#D1EACA"}
            textColor={"#F7FDF5"}
            id="4"
          />
        </div>
        <p className="source">
          *Basert på sesultater fra fokusgrupper med 3,000 deltagere i 79 land,
          Jessica Pryce-Jones, forfatter av boken “Happiness”
        </p>
      </div>
      <div>
        <img src="/images/company-image-1.svg" alt="" />
      </div>
    </div>
  );
};

export default PercentSection;
