import anime from "animejs";
import Sun from "../../../../public/images/Sun";
import Button, { FakeButton } from "../../../components/button/button";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <div className={style.overflow}>
      <div className={style.sun}>
        <Sun />
      </div>
      <div className={style.landing}>
        <h3>Young Happy Minds onlinekurs:</h3>
        <div className={style.landing__wrapper}>
          <div>
            <h1>Et interaktivt kurs for å bli mer robust og glad</h1>
            <img
              className={style.landing__image_mobile}
              src="/images/product-image-1.svg"
              alt="Bilde av kurs platformen"
            />
            <h3>
              Har du lyst til å gå fra passasjer til sjåfør i ditt eget liv?
            </h3>
            <p>
              Invester i deg selv og lær hvordan du kan bli mer robust, mestre
              stress og oppleve mer livsglede i hverdagen.{" "}
            </p>
            <div className={style.button__wrapper}>
              <Button
                color={"#0D534F"}
                bgColor={"white"}
                text={"Kjøp kurs"}
                big={true}
                img={true}
                href={
                  "https://younghappyminds.simplero.com/cart/119420-Young-Happy-Minds-et-interaktivt-kurs-i"
                }
                hoverColor={"#0e645f"}
                hoverBgColor={"#d1eaca"}
              />
              <FakeButton
                color={"white"}
                bgColor={"#0E645F"}
                text={"Mer om kurset"}
                big={true}
                href={"#about"}
                hoverColor={"#d1eaca"}
                hoverOutline={"3px solid #d1eaca"}
                down={true}
              />
            </div>
          </div>
          <img
            className={style.landing__wrapper_image}
            src="/images/product-image-1.svg"
            alt="Bilde av kurs platformen"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
