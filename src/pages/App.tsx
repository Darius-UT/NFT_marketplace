import './App.css'
import LeftMountain from "@/assets/images/homeImages/LeftMountain.png";
import RightMountain from "@/assets/images/homeImages/RightMountain.png";
import ToaThap from "@/assets/images/homeImages/ToaThap.png";
import LeftPerson from "@/assets/images/homeImages/LeftPerson.png";
import RightPerson from "@/assets/images/homeImages/RightPerson.png";
import AboveSoil from "@/assets/images/homeImages/aboveSoil.png";
import AboveSoil2 from "@/assets/images/homeImages/AboveSoil2.png";
import Grass1 from "@/assets/images/homeImages/Grass1.png";
import Grass2 from "@/assets/images/homeImages/Grass2.png";
import Birds from "@/assets/images/homeImages/Birds.png";
import Cloudy from "@/assets/images/homeImages/Cloudy.png";
import FloatingCloud1 from "@/assets/images/homeImages/FloatingCloud1.png";
import FloatingCloud2 from "@/assets/images/homeImages/FloatingCloud2.png";
import ThanhGiong from "@/assets/images/homeImages/ThanhGiong.png";
import HaiBaTrung from "@/assets/images/homeImages/HaiBaTrung.png";
import RedLine1 from "@/assets/images/homeImages/RedLine1.png";
import RedLine2 from "@/assets/images/homeImages/RedLine2.png";
import RedLine3 from "@/assets/images/homeImages/RedLine3.png";
import frameBackground from "@/assets/images/homeImages/frameBackground.png";
import TrongDong from "@/assets/images/homeImages/TrongDong.png";

function App() {
  return (
    <>
      {/* <header className="header">
        Header nè
      </header> */}

      <main>
        <div className='imageContainer section'>
          <h1 className='mainText'>CHỢ PHIÊN NFT</h1>
          <h3 className="subMainText">Nghệ thuật truyền thống</h3>
          <h2 id="vietnamText" className='subMainText'>Việt Nam</h2>

          <img src={LeftMountain} alt="Left Mountain image" className='leftMountain' />
          <img src={Cloudy} alt="Cloudy" className='cloudy' />
          <img src={RightMountain} alt="right Mountain image" className='rightMountain' />
          <img src={ToaThap} alt="Toa thap" className='tower' />
          <img src={AboveSoil} alt="Above Soil" className='aboveSoil' />
          <img src={LeftPerson} alt="Left person" className='leftPerson' />
          <img src={RightPerson} alt="Right person" className='rightPerson' />
          <img src={Grass1} alt="Grass 1" className='grass1' />
          <img src={Grass2} alt="Grass 2" className='grass2' />
          <img src={AboveSoil2} alt="Above Soil2" className='aboveSoil2' />
          <img src={Birds} alt="Birds" className='birds' />
          <img src={RedLine1} alt="RedLine1" className='redLine1 redLine' />

          <img src={FloatingCloud1} alt="FloatingCloud" className="floating_cloud floating_cloud1" />
          <img src={FloatingCloud2} alt="FloatingCloud" className="floating_cloud floating_cloud2" />
          <img src={FloatingCloud1} alt="FloatingCloud" className="floating_cloud floating_cloud3" />
        </div>

        <div className='missionSection section'>
          <h1 className='titleText titleTextMissionSection'>Sứ mệnh</h1>
          <p className='contentText contentTextMissionSection'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <img src={frameBackground} alt="frameBackground" className='illustratorBackground illustratorImageMissionSection frameBackground' />
          <img src={ThanhGiong} alt="Thanh Giong" className='illustratorImage illustratorImageMissionSection' />
          <img src={RedLine2} alt="RedLine2" className='redLine2 redLine' />
        </div>

        <div className='valueSection section'>
          <h1 className='titleText titleTextValueSection'>Giá trị cung cấp</h1>
          <p className='contentText contentTextValueSection'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <img src={TrongDong} alt="TrongDong" className='illustratorBackground illustratorImageValueSection trongDong' />
          <img src={HaiBaTrung} alt="HaiBaTrung" className='illustratorImage illustratorImageValueSection' />
          <img src={RedLine3} alt="RedLine3" className='redLine3 redLine' />
        </div>

      </main>

      {/* <footer>
        Footer nè
      </footer> */}
    </>
  )
}

export default App
