import CommonHeader from "@/components/commonHeader";
import CommonTitle from "@/components/commonTitle";
import styles from "./styles.module.scss";

const PROJECT_IMAGES = [
  "./projectImages/entertainmentHub.png",
  "./projectImages/gamePlay.png",
  "./projectImages/himalyanTourTravel.png",
  "./projectImages/spaceX.png",
  "./projectImages/techLinked.png",
  "./projectImages/doctor.png",
];

const Portfolio = () => {
  return (
    <main className={styles.mainContainer}>
      <div ata-aos="fade-right">
        <CommonHeader heading="Projects" />
        <CommonTitle title="Creative Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-10  grayscale ">
          {PROJECT_IMAGES.map((img, i) => {
            return (
              <div className="bg-[#323232] p-4 shadow-md cursor-pointer ">
                <img src={img} className=" duration-500	hover:scale-110"></img>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
