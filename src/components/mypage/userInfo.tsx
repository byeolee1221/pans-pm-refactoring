import { auth } from "@/firebase";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

const UserInfo = () => {
  const user = auth.currentUser;

  return (
    <Tabs defaultValue="아이디 변경" className="w-[34rem]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="아이디 변경">아이디 변경</TabsTrigger>
        <TabsTrigger value="비밀번호 변경">비밀번호 변경</TabsTrigger>
        <TabsTrigger value="계정 삭제">계정 삭제</TabsTrigger>
      </TabsList>
      <TabsContent value="아이디 변경">
        <Card>
          <CardHeader>
            <CardTitle>아이디 변경</CardTitle>
            <CardDescription>
              아이디가 마음에 안들면 변경해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="idChange">아이디 변경 (현재 아이디: {user?.displayName})</Label>
              <Input id="idChange" type="text" name="id" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">변경하기</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="비밀번호 변경">
        <Card>
          <CardHeader>
            <CardTitle>비밀번호 변경</CardTitle>
            <CardDescription>비밀번호는 6자 이상으로, 이전 비밀번호와 다르게 해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="currentPassword">현재 비밀번호</Label>
              <Input type="password" id="currentPassword" name="currentPassword" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="newPassword">새 비밀번호</Label>
              <Input type="password" id="newPassword" name="newPassword" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">변경하기</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="계정 삭제">
        <Card>
          <CardHeader>
            <CardTitle>계정 삭제</CardTitle>
            <CardDescription>신중히 생각하시고 아래 정보입력 후 삭제버튼을 눌러주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">이메일</Label>
              <Input type="email" id="email" name="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="Password">비밀번호</Label>
              <Input type="password" id="Password" name="Password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive">삭제하기</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>  
  );
}

export default UserInfo;