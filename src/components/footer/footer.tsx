import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="w-full py-10 bg-[#212529] flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-3 md:ml-16 xl:ml-24 text-white">
        <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full invert" />
        <p className="text-3xl font-bold">PAN'S PM</p>
      </div>
      <div className="flex flex-col gap-2 mt-4 md:mt-0 md:mr-16 xl:mr-24 text-white p-2 md:p-0">
        <h3 className="font-bold">조선대학교 밴드동아리 PAN'S PM</h3>
        <p>오시는 길: 광주광역시 동구 조선대길 87 (서석동, 조선대학교 학생회관 6층 6121호)</p>
        <div className="flex gap-x-2">
          <p>사이트 관리자: 16기 드럼 문창기</p>
          <Link to="/manage">(관리자 페이지)</Link>
        </div>
        <p className="text-sm">© 조선대학교 밴드동아리 PAN'S PM. All rights reserved.</p>
      </div>
    </div>  
  );
}

export default FooterPage;