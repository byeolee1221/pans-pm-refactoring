import { Link } from "react-router-dom";
import { ItemDescription, ItemImg, ItemTitle } from "../styleShare";

const MainIntroduce = () => {
  return (
    <div className="w-full">
    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl space-y-5 font-bold mb-12">함께하면 만날 수 있어요!</h1>
    <div className="grid grid-rows-1 md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-24 items-center justify-items-center w-4/5 m-auto mb-24">
      <img src="./info1.jpg" alt="메인페이지 소개사진 1번" className={ItemImg} />
      <div className="text-center">
        <h2 className={ItemTitle}>동아리 정기 야유회</h2>
        <p className={ItemDescription}>
          밴드동아리만의 일상 외에도 <br />
          1년에 한번씩 단조로운 일상에서 벗어나 <br />
          새로운 장소에서 더 끈끈한 우정을 다집니다.
        </p>
      </div>
      <div className="text-center">
        <h2 className={ItemTitle}>다채로운 공연행사 활동</h2>
        <p className={ItemDescription}>
          밴드동아리만 즐길 수 있는 <br />
          여러분들의 숨겨진 모습을 갈고 닦아서 <br />
          무대 위에서 마음 속 품었던 꿈을 펼쳐보세요.
        </p>
      </div>
      <img src="./info3.jpg" alt="메인페이지 소개사진 2번" className={ItemImg} />
      <img src="./info2.jpg" alt="메인페이지 소개사진 3번" className={ItemImg} />
      <div className="text-center">
        <h2 className={ItemTitle}>동아리 정기공연</h2>
        <p className="text-lg md:text-xl leading-10 md:leading-10 mb-5">
          1년에 단 한번, <br />
          여러분이 1년간 쌓아왔던 모든 것을 <br />
          소중한 사람들 앞에서 맘껏 보여주세요!
        </p>
        <Link
          to="https://www.youtube.com/@pans_pm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl font-bold bg-rose-600 px-6 py-2 rounded-lg">공연영상 보러가기</Link>
      </div>
    </div>
  </div> 
  );
}

export default MainIntroduce;