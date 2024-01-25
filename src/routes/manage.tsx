import Manage from "@/components/manage/manage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { auth } from "@/firebase";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagePage = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [codeOne, setCodeOne] = useState("");
  const [codeTwo, setCodeTwo] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [codePass, setCodePass] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;

    if (name === "code1") {
      setCodeOne(value);
    } else {
      setCodeTwo(value);
    };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user || codeOne === "" || codeTwo === "" || codeOne !== codeTwo) {
      return;
    };

    if (codeOne !== import.meta.env.VITE_MANAGE_CODE_FOR_ADMIN || codeTwo !== import.meta.env.VITE_MANAGE_CODE_FOR_ADMIN) {
      alert("관리자 코드가 맞지 않습니다. 보안을 위해 페이지가 이동됩니다.");
      navigate("/");
      return;
    };

    try {
      setLoading(true);
      alert("확인되었습니다. 자리를 비우실 땐 관리자 페이지에서 벗어나주시기 바랍니다.");
      setCodePass(true);
    } catch (error) {
      setError("오류가 발생하였으니 잠시 후 다시 시도해주세요.");
      console.log(error);
    } finally {
      setLoading(false);
    };
  };

  return (
    <div>
      {!codePass ? <div className="flex flex-col justify-center items-center h-screen gap-y-4">
        <h1 className="text-3xl font-bold">관리자 페이지입니다.</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">권한 확인</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>관리자 권한 확인</SheetTitle>
              <SheetDescription>
                사전에 발급된 관리자 코드를 입력하세요.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="code1" className="text-right">관리자 코드</Label>
                  <Input onChange={onChange} id="code1" name="code1" className="col-span-3" type="password" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="code2" className="text-right">코드 확인</Label>
                  <Input onChange={onChange} id="code2" name="code2" className="col-span-3" type="password" />
                </div>
              </div>
              {error !== "" ? <p className="text-xs">{error}</p> : null}
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">{isLoading ? "권한 확인중..." : "권한 확인하기"}</Button>
                </SheetClose>
              </SheetFooter>
            </form>
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>주의</AlertTitle>
              <AlertDescription className="text-xs">
                관리자 코드는 다른 사람에게 유출되어선 안됩니다.
              </AlertDescription>
            </Alert>
          </SheetContent>
        </Sheet>
      </div> : <Manage />}  
    </div>
  );
}

export default ManagePage;