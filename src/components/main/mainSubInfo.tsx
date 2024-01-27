// 메인페이지 내 '동아리에 잘 맞는 타입' 컴포넌트
const MainSubInfo = () => {
  let itemBoxStyle = "flex flex-col items-center gap-y-4";
  let itemDiscriptionStyle = "text-gray-500 text-center";

  return (
    <div className="w-full">
    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl space-y-5 font-bold mt-20 md:mt-36 mb-12">이런 분은 꼭 와주세요!</h1>
    <div className="grid grid-rows-2 grid-cols-3 w-4/5 md:w-2/5 m-auto items-center justify-items-center mb-24 gap-y-10 gap-x-10 ">
      <div className={itemBoxStyle}>
        <img src="./info2_1.png" alt="동아리에 딱 맞는 특성1" />
        <p className={itemDiscriptionStyle}>대인관계 좋으신 분</p>
      </div>
      <div className={itemBoxStyle}>
        <img src="./info2_2.png" alt="동아리에 딱 맞는 특성2" />
        <p className={itemDiscriptionStyle}>매사에 긍정적이신 분</p>
      </div>
      <div className={itemBoxStyle}>
        <img src="./info2_3.png" alt="동아리에 딱 맞는 특성3" />
        <p className={itemDiscriptionStyle}>도전적이신 분</p>
      </div>
      <div className={itemBoxStyle}>
        <img src="./info2_4.png" alt="동아리에 딱 맞는 특성4" />
        <p className="text-gray-500 text-center">악기를 다루고싶은 분</p>
      </div>
      <div className={itemBoxStyle}>
        <img src="./info2_5.png" alt="동아리에 딱 맞는 특성5" />
        <p className={itemDiscriptionStyle}>밴드음악 좋아하시는 분</p>
      </div>
      <div className={itemBoxStyle}>
        <img src="./info2_6.png" alt="동아리에 딱 맞는 특성6" />
        <p className={itemDiscriptionStyle}>협업을 중시하시는 분</p>
      </div>
    </div>
  </div>  
  );
}

export default MainSubInfo;