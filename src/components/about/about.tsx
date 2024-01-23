import { ItemDescription, ItemImg, ItemTitle } from "../styleShare";

const About = () => {
  let titleClass = "before:h-[30rem] before:w-full before:content-[''] before:bg-slate-800 before:absolute before:top-0 before:left-0 before:opacity-50 w-full h-[30rem] bg-[url('./activity8.jpg')] bg-cover bg-center flex flex-col items-center justify-center";

  return (
    <div className="w-full">
      <div className={titleClass}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white z-10 font-bold mt-24 mb-4">동아리 소개</h1>
        <p className="text-white text-md sm:text-lg md:text-lg z-10">Pan's PM은 조선대학교의 유서깊은 밴드동아리입니다.</p>
      </div>
      <div className="w-full">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl space-y-5 font-bold mt-20 mb-16">동아리를 소개합니다!</h2>
        <div className="grid grid-rows-2 grid-cols-2 gap-y-24 items-center justify-items-center w-4/5 m-auto mb-24">
          <img src="./info2.jpg" alt="about페이지 사진" className={ItemImg} />
          <div className="text-center">
            <h2 className={ItemTitle}>동아리 창단</h2>
            <p className={ItemDescription}>
              Pan's PM은 조선대학교 본관이 공사중일 때부터 <br />
              음악에 뜻이 있는 선배님들의 창단 의지에 힘입어 <br />
              만들어진 동아리입니다.
            </p>
          </div>
          <div className="text-center">
            <h2 className={ItemTitle}>즐거움을 중시하는 동아리</h2>
            <p className={ItemDescription}>
              Pan's PM은 음악을 즐기고 싶어 만들어진 동아리입니다. <br />
              실력도 중요하지만, 더 중요한 건 활동의 즐거움입니다. <br />
              동아리를 즐길 수 있을 때 동아리의 참모습이 나타납니다.
            </p>
          </div>
          <img src="./activity3.jpg" alt="about페이지 사진" className={ItemImg} />
          <img src="./activity2.jpg" alt="about페이지 사진" className={ItemImg} />
          <div className="text-center">
            <h2 className={ItemTitle}>멤버간의 돈독한 관계</h2>
            <p className={ItemDescription}>
              동아리 신입-현역생활을 즐기고 나서도 끝이 아니에요! <br />
              현역 이후 OB가 됐을 때도 여행, 개별모임 등을 통해 <br />
              더욱 깊어지는 Pan's PM만의 매력을 느낄 수 있어요!
            </p>
          </div>
          <div className="text-center">
            <h2 className={ItemTitle}>장르를 가리지 않는 음악활동</h2>
            <p className={ItemDescription}>
              Pan's PM은 본래 락밴드 동아리였으나 <br />
              현재는 락뿐만 아니라 다양한 장르의 음악을 하고 있습니다. <br />
              여러분이 하고싶은 음악을 맘껏 즐기고 남다른 대학생활을 해보세요!
            </p>
          </div>
          <img src="./activity5.jpg" alt="about페이지 사진" className={ItemImg} />
        </div>
      </div>
    </div>  
  );
}

export default About;