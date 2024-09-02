import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col justify-center items-center text-center ${styles.paddingY}`}>
      <div className="bg-discount-gradient py-[6px] px-4 rounded-[10px] mb-2">
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
        The Next <span className="text-gradient">Generation</span> <br className="sm:block hidden" />{" "}
        Learning Platform.
      </h1>

      <p className={`${styles.paragraph} max-w-[900px] mt-5`}>
        Scholarly is an online platform for university graduates, designed to inspire creativity. It’s a space where students can connect, share ideas, and bring their innovative projects to life through collaboration.
      </p>

      <div className="mt-10">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

