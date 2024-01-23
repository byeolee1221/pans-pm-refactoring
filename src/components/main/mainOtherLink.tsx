import { Link } from "react-router-dom";

const MainOtherLink = () => {
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl space-y-5 font-bold mt-36 mb-12">여기도 놀러오세요!</h1>
      <div className="flex items-center justify-center gap-10 mb-12">
        <Link to="https://www.instagram.com/pans_pm/" target="_blank" rel="noopener noreferrer">
          <img src="./insta.png" alt="인스타그램 로고" />
        </Link>
        <Link to="https://www.facebook.com/people/PANS-PM/100040875442457/" target="_blank" rel="noopener noreferrer">
          <img src="./facebook.png" alt="페이스북 로고" />
        </Link>
        <Link to="https://www.youtube.com/@pans_pm" target="_blank" rel="noopener noreferrer">
          <img src="./youtube.png" alt="유튜브 로고" />
        </Link>
        <Link to="https://cafe.naver.com/moksinlove" target="_blank" rel="noopener noreferrer">
          <img src="./naver.png" alt="네이버 로고" className="w-10" />
        </Link>
      </div>
    </div>  
  );
}

export default MainOtherLink;