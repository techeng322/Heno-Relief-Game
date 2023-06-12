import { useWindowSize } from "usehooks-ts"
import dynamic from "next/dynamic"
import WelcomeToCre8ors from "./sections/WelcomeToCre8ors"
import InviteForCreator from "./sections/InviteForCreator"
import Networking from "./sections/Networking"
import Cre8orsWay from "./sections/Cre8orsWay"
import Brands from "./sections/Brands"
import OpenSoon from "./sections/OpenSoon"
import { useTheme } from "../../providers/ThemeProvider"

const SectionContainer = dynamic(() => import("./SectionContainer"), { ssr: false })

interface LandingContentProps {
  onChangeEmail: (e: any) => void
  email: string
  handleClick: (e: any) => void
  isSubscribed: boolean
  welcomImageRef: any
  networkingImageRef: any
  profileImageRef: any
  openSoonImageRef: any
}

const LandingContent = ({
  email,
  onChangeEmail,
  handleClick,
  isSubscribed,

  welcomImageRef,
  networkingImageRef,
  profileImageRef,
  openSoonImageRef,
}: LandingContentProps) => {
  const { themeMode } = useTheme()

  const { width } = useWindowSize()

  return (
    <>
      <SectionContainer
        className="
          z-[5]
        "
        backgroundImage="bg-[url('/assets/Landing/dark_bg/overlook.png')]"
        backgroundPosition="bg-[right_-50px_bottom] md:bg-[right_bottom]"
        style={{
          backgroundSize:
            width > 985 ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px` : "985px",
          height: width > 985 ? `${Number((width / 1439) * 975)}px` : "625px",
        }}
      >
        <WelcomeToCre8ors
          value={email}
          onChange={onChangeEmail}
          onSubscribe={handleClick}
          isSubscribed={isSubscribed}
          contentHeight={width > 985 ? Number((width / 1439) * 975) : 310}
          characterHeight={602}
          desktopImageRef={welcomImageRef}
        />
      </SectionContainer>

      <SectionContainer
        className="
            dark:bg-[center_bottom]
            bg-cover 
            h-[799px] md:h-[972px] 
            mt-[170px] md:mt-[0px]
            z-[4]
          "
        containerClassName={themeMode === "light" ? `` : "fade_bg"}
        backgroundImage="bg-[url('/assets/Landing/dark_bg/timessquare.png')]"
        backgroundPosition="bg-[center_bottom] bg-cover"
      >
        <InviteForCreator mobileHeight={799} deskTopHeight={972} />
      </SectionContainer>

      <div className="relative z-[3]">
        <SectionContainer
          className="
              bg-[right_-50px_bottom] md:bg-[right_bottom]
            "
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/trainstation.png')]"
          backgroundPosition="bg-[right_-50px_bottom] md:bg-[right_bottom]"
          style={{
            backgroundSize:
              width > 985 ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px` : "985px",
            height: width > 985 ? `${Number((width / 1439) * 975)}px` : "625px",
            marginTop: width < 985 ? `245px` : `0px`,
          }}
        >
          <Networking
            contentHeight={width > 985 ? Number((width / 1439) * 973) : 340}
            characterHeight={625}
            desktopImageRef={networkingImageRef}
          />
        </SectionContainer>
      </div>

      <div className="relative z-[2]">
        <SectionContainer
          className={`
              
            `}
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/replicate.png')]"
          style={{
            backgroundSize:
              width > 985 ? `${width}px ${Number((width / 1439) * 973).toFixed(2)}px` : "985px",
            height: width > 985 ? `${Number((width / 1439) * 973)}px` : "665px",
            marginTop: width < 985 ? `338px` : `0px`,
          }}
        >
          <Cre8orsWay
            contentHeight={width > 985 ? Number((width / 1439) * 973) : 180}
            characterHeight={665}
            desktopImageRef={profileImageRef}
          />
        </SectionContainer>
      </div>

      <div className="relative z-[1]">
        <SectionContainer
          className=" mt-[-1px]"
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/path.png')]"
        >
          <Brands />
        </SectionContainer>
      </div>

      <div className="relative z-[0]">
        <SectionContainer
          className="
              bg-center 
            "
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/factory.png')]"
          style={{
            backgroundSize:
              width > 985 ? `${width}px ${Number((width / 1439) * 1079).toFixed(2)}px` : "910px",
            height: width > 985 ? `${Number((width / 1439) * 1079)}px` : "625px",
            marginTop: width < 985 ? `-1px` : `0px`,
          }}
        >
          <OpenSoon
            contentHeight={width > 985 ? Number((width / 1440) * 1079) : 200}
            characterHeight={625}
            desktopImageRef={openSoonImageRef}
          />
        </SectionContainer>
      </div>
    </>
  )
}

export default LandingContent
