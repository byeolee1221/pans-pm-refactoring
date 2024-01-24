import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlertCircle } from "lucide-react";


const ManagePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-y-4">
        <h1 className="text-3xl font-bold">관리자 페이지입니다.</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">권한 확인</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>관리자 권한 확인</SheetTitle>
              <SheetDescription>
                사전에 발급된 관리자 번호를 입력하세요.  
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number1" className="text-right">관리자 번호</Label>
                <Input id="number1" name="number1" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number2" className="text-right">번호 확인</Label>
                <Input id="number2" name="number2" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">권한 확인하기</Button>
              </SheetClose>
            </SheetFooter>
              <Alert variant="destructive" className="mt-2"> 
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>주의</AlertTitle>
                <AlertDescription className="text-xs">
                  관리자 번호는 다른 사람에게 유출되어선 안됩니다.
                </AlertDescription>
              </Alert>
          </SheetContent>
        </Sheet>
      </div>  
    </div>
  );
}

export default ManagePage;