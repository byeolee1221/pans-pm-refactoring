import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { auth } from "@/firebase";
import MobileContact from "../contact/mobileContact";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

// 1280px 이하에 적용되는 헤더 컴포넌트
const MobileHeader = () => {
  const user = auth.currentUser;

  const navigate = useNavigate();

  const onClick = async () => {
    const ok = confirm("정말 로그아웃 하시겠어요?");

    if (ok) {
      await auth.signOut();
      navigate("/");
    };
  };

  let navBarMenuStyle = "font-bold text-lg text-center lg:text-start rounded-md hover:bg-slate-200 px-4 py-2 duration-150 block xl:hidden";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="block xl:hidden">MENU</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>사이트 메뉴</SheetTitle>
          <SheetDescription>
            {user ? <p>{user.displayName}님 안녕하세요😊</p> : "어서오세요 😊"}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Link to="/about" className={navBarMenuStyle}>동아리 소개</Link>
          <Link to="/register" className={navBarMenuStyle}>동아리 가입신청</Link>
          <Link to="/panstalk" className={navBarMenuStyle}>판스TALK</Link>
          {user ? <Link to="/mypage" className={navBarMenuStyle}>마이페이지</Link> : <Link to="/signup" className={navBarMenuStyle}>회원가입</Link>}
          {user ? <button onClick={onClick} className={navBarMenuStyle}>로그아웃</button> : <Link to="/signin" className={navBarMenuStyle}>로그인</Link>}
          <MobileContact />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileHeader;