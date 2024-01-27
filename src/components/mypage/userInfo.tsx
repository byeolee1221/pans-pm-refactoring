import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import ChangeNickName from "./changeNickname";
import ChangePassword from "./changePassword";
import DeleteAccount from "./deleteAccount";

// 마이페이지 레이아웃 및 구성요소
const UserInfo = () => {
  return (
    <Tabs defaultValue="닉네임 변경" className="w-full md:w-[34rem]">
      <TabsList className="grid w-full md:w-full grid-cols-3">
        <TabsTrigger value="닉네임 변경">닉네임 변경</TabsTrigger>
        <TabsTrigger value="비밀번호 변경">비밀번호 변경</TabsTrigger>
        <TabsTrigger value="계정 삭제">계정 삭제</TabsTrigger>
      </TabsList>
      <ChangeNickName />
      <ChangePassword />
      <DeleteAccount />
    </Tabs>  
  );
}

export default UserInfo;