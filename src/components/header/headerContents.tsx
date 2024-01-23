import TypewriterComponent from "typewriter-effect";

const HeaderContents = () => {
  return (
    <div className="font-bold py-36 text-center space-y-5">
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>밴드동아리 PAN'S PM은요!</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent options={{
            strings: [
              "신입생 모집중",
              "매일 오픈중",
              "친구 사귀기 너무 좋은 환경",
              "빵빵한 사운드",
              "탄탄한 멤버쉽"
            ],
            autoStart: true,
            loop: true
          }} />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        언제든 연락주세요! 기다리고 있을게요╰(*°▽°*)╯
      </div>
      <div className="h-96 w-full bg-[url('./main.jpg')] bg-center bg-cover flex items-center justify-center">
        <img src="./logo.jpg" alt="로고 이미지" className="rounded-full invert" />
      </div>
    </div>  
  );
}

export default HeaderContents;