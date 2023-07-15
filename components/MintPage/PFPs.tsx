import { useMediaQuery } from "usehooks-ts"
import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Media from "../../shared/Media"

const PFPs = () => {
  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full h-[550px] xl:h-[824px] flex justify-center items-center">
        <div
          className="grid
                grid-cols-1 xl:grid-cols-2"
        >
          <div className="xl:hidden w-[100%] flex justify-center pb-[56px]">
            <Media
              link="/assets/Mint/PFP/mobile_character.svg"
              blurLink="/assets/Mint/PFP/mobile_character.png"
              type="image"
              containerClasses="w-[281px] h-[351px]"
            />
          </div>
          <div className="flex flex-col justify-center xl:pl-[30px]">
            <Title
              text={isXl ? `PFPs That Work For You,\nForever` : `PFPs That Work\nFor You, Forever`}
              className="leading-[103.3%]
                            text-center xl:text-left
                            !text-[22px] xs:!text-[27px] xl:!text-[65px]"
            />
            <Content
              content={
                isXl
                  ? `Imagine minting a musician that creates music for you, or a\nwriter that writes for you. As artificial intelligence improves, so\ndoes your NFT. One day your Cre8or might make a hit song, or\nwrite a best-selling novel. If you own the NFT then you own the IP;\nand since you own the IP you reap all the rewards. PFPs you will\nwant to pass down to your grandkids for generations to come.`
                  : `Imagine minting a musician that creates music for you, or a\nwriter that writes for you. As artificial intelligence improves, so\ndoes your NFT. One day your Cre8or might make a hit song, or\nwrite a best-selling novel. If you own the NFT then you own the IP;\nand since you own the IP, you reap all the rewards. PFPs you will\nwant to pass down to your grandkids of generations to come.`
              }
              className="leading-[103.3%]
                            pt-[10px] xl:pt-[27px]
                            text-center xl:text-left
                            !text-[10px] samsungS8:!text-[11px] xs:!text-[12px] xl:!text-[19px]"
            />
          </div>
          <div className="xl:block hidden">
            <Media
              link="/assets/Mint/PFP/character.svg"
              blurLink="/assets/Mint/PFP/character.png"
              type="image"
              containerClasses="w-[601px] h-[867px]"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default PFPs
