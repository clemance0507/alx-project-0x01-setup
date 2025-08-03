import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import Button from "@/components/common/Button";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = (props) => {
  const users = props.posts;
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserProps[]>(users);

  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: userList.length + 1 };
    setUserList((prev) => [...prev, newUserWithId]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>

          <Button />

          <button onClick={() => setModalOpen(true)} className="bg-blue-700 text-white px-4 py-2 rounded-full ml-2">
            Add User
          </button>

        </div>

        <div className="grid grid-cols-3 gap-2">
          {userList.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;