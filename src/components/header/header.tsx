import { Link } from "react-router-dom";

const HeaderPage = () => {
  let navBarMenuStyle = "font-bold text-lg rounded-md hover:bg-slate-200 px-4 py-2 duration-150";

  return (
    <header className="fixed w-full py-5 shadow-md z-20 bg-white top-0">
      <nav className="flex items-center justify-around">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-4">
            <img src="./logo.jpg" alt="메인페이지 로고" className="w-16 rounded-full" />
            <p className="text-4xl font-bold">PAN'S PM</p>
          </Link>
          <Link to="/about" className={navBarMenuStyle}>동아리 소개</Link>
          <Link to="/register" className={navBarMenuStyle}>동아리 가입신청</Link>
          <Link to="https://cafe.naver.com/moksinlove" target="_blank" rel="noopener noreferrer" className={navBarMenuStyle}>
            네이버 카페
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <Link to="/signup" className={navBarMenuStyle}>회원가입</Link>
          <Link to="/signin" className={navBarMenuStyle}>로그인</Link>
          <button className="bg-rose-600 font-bold text-lg text-white rounded-md px-4 py-2">동아리 문의</button>
        </div>
      </nav>
    </header>  
  );
}

export default HeaderPage;