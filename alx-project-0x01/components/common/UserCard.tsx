import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">
        Website:{" "}
        <a
          href={`https://${website}`}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      </p>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Address:</span> {address.suite},{" "}
        {address.street}, {address.city}, {address.zipcode}
      </div>
      <div className="text-gray-600">
        <span className="font-semibold">Company:</span> {company.name} -{" "}
        <span className="italic">{company.catchPhrase}</span>
      </div>
    </div>
  );
};

export default UserCard;