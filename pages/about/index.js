import CommonHeader from "@/components/commonHeader";
import CommonTitle from "@/components/commonTitle";
import { Typography, Divider, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.scss";
import PersonalInfoSection from "./personalInfoSection";
import SkillsSection from "./skillsSection";
import KnowledgeSection from "./knowledgeSection";
import EducationExSection from "./educationExSection";
import Testimonials from "./testimonials";
import BioSection from "./bioSection";
import DownloadResumeBtn from "./downloadResumeBtn";
import { CustomDivider } from "@/components/customDivider";

const About = () => {
  return (
    <main className={styles.mainContainer}>
      <div data-aos="fade-right">
        <CommonHeader heading="About" />
        <CommonTitle title="About" />
        <BioSection />
        <CustomDivider />
        <PersonalInfoSection />
        <CustomDivider />
        <DownloadResumeBtn />
        <SkillsSection />
        <KnowledgeSection />
        <EducationExSection />
        <Testimonials />
      </div>
    </main>
  );
};

export default About;
