import Image from "next/image";

const imgSrc = "/assets/company_log.png";
const CompanyLogo = () => {
  return (
    <div id="company-logo" className="basis-1/3">
      <Image
        src={imgSrc}
        height={100}
        width={100}
        objectFit={"contain"}
        alt="company-logo"
      />
    </div>
  );
};

export default CompanyLogo;
