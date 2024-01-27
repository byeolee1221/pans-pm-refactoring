import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

// 1280px 이하 디바이스에서 사이트 메뉴 내에 위치하는 '동아리 문의' 컴포넌트
const MobileContact = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="font-bold text-lg text-center lg:text-start rounded-md hover:bg-slate-200 px-4 py-2 duration-150 block xl:hidden">동아리 문의</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>동아리 문의</DialogTitle>
          <DialogDescription>
            문의사항이 있으시면 아래 이메일로 편하게 문의주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-bold">회장: email@naver.com</p>
          <p className="text-lg font-bold">부회장: email2@naver.com</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
  </Dialog>
  );
}

export default MobileContact;