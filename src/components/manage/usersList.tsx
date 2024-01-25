import { IUsers } from "./users";

const UsersList = ({ name, nickName, affiliation, createdAt }: IUsers) => {
  let timestamp = createdAt;
  let date = new Date(timestamp);

  let year = date.getFullYear();
  // 월은 0부터 시작하므로 1을 더해줌.
  let month: number | string = date.getMonth() + 1;  
  let day: number | string = date.getDate();

  if (month < 10) {
    month = '0' + month;
  };

  if (day < 10) {
    day = '0' + day;
  };

  let formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-y-1 px-2 py-5 border-2 border-solid border-neutral-300 rounded-md w-80">
      <h2 className="font-bold">이름: {name}</h2>
      <p>닉네임: {nickName}</p>
      <p>소속: {affiliation}</p>
      <p>생성일: {formattedDate}</p>
    </div>  
  );
}

export default UsersList;