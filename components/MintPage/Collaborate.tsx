import { useMediaQuery } from "usehooks-ts"
import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Media from "../../shared/Media"

const Collaborate = () => {
  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full pt-[85px] pb-[50px] xl:py-0 xl:h-[960px] flex justify-center items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="block xl:hidden pb-[33px] flex justify-center">
            <Media
              link="/assets/Mint/Collaborate/mobile_graphic.svg"
              blurLink="/assets/Mint/Collaborate/mobile_graphic.png"
              type="image"
              containerClasses="w-[280px] h-[280px] xs:w-[304px] xs:h-[304px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Title
              text={
                isXl
                  ? "Create, Remix,\nCollaborate, and Get Paid"
                  : `Create, Remix,\nCollaborate,\nand Get Paid`
              }
              className="leading-[103.3%]
            text-center xl:text-left
                            !text-[22px] xs:!text-[27px] xl:!text-[65px]"
            />
            <Content
              content={
                isXl
                  ? `Cre8ors Protocol is an interoperable smart contract that uses\nnovel community-bonding mechanics to generate composable\nmedia catalogs at scale. But, WTF does that mean?\n\nWe’re building a series of remix dApps that make it fun and\neasy for holders to collaborate, license, and get paid when co-\ncreating on-chain with friends and other communities.`
                  : `Cre8ors Protocol is an interoperable smart contract that\nuses novel community-bonding mechanics to generate\ncomposable media catalogs at scale. But, WTF does that\nmean?\n\nWe’re building a series of remix dApps that make it fun\nand easy for holders to collaborate, license, and get\npaid when co-creating on-chain with friends and other\ncommunities.`
              }
              className="leading-[103.3%] 
              pt-[10px] xl:pt-[27px]
                            text-center xl:text-left
                            !text-[10px] samsungS8:!text-[11px] xs:!text-[12px] xl:!text-[19px]"
            />
          </div>
          <div className="hidden xl:block">
            <Media
              link="/assets/Mint/Collaborate/graphic.png"
              blurLink="/assets/Mint/Collaborate/graphic.png"
              type="image"
              containerClasses="w-[685px] h-[653px]"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Collaborate
