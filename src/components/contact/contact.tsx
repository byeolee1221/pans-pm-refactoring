import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

// 동아리 문의버튼 클릭 시 나타나는 컴포넌트
const Contact = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-rose-600 font-bold text-lg text-white rounded-md px-4 py-2 hidden xl:block">동아리 문의</button>
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

export default Contact;