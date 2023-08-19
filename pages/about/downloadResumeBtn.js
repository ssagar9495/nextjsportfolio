import React from "react";
import styles from "./styles.module.scss";

const DownloadResumeBtn = () => {
  const handleDownload = () => {
    const pdfUrl = "/Resume.pdf";
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;
        a.download = "Sagar Resume";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("Error downloading the PDF:", error);
      });
  };
  return (
    <button className={styles.CvButton} onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadResumeBtn;
