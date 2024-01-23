const FooterPage = () => {
  return (
    <div className="w-full h-48 bg-[#212529] flex items-center justify-between">
      <div className="flex items-center gap-3 ml-24 text-white">
        <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full invert" />
        <p className="text-4xl font-bold">PAN'S PM</p>
      </div>
      <div className="flex flex-col gap-2 mr-24 text-white">
        <h3 className="font-bold">조선대학교 밴드동아리 PAN'S PM</h3>
        <p>오시는 길: 광주광역시 동구 조선대길 87 (서석동, 조선대학교 학생회관 6층 6121호)</p>
        <p>사이트 관리자: 16기 드럼 문창기</p>
        <p className="text-sm">© 조선대학교 밴드동아리 PAN'S PM. All rights reserved.</p>
      </div>
    </div>  
  );
}

export default FooterPage;