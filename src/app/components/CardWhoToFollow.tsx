import { UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="bg-orange-100 p-4 rounded-lg">
      <h2 className="font-bold">Who To Follow</h2>

      <div className=" my-2 justify-beetwen flex items-center border border-gray-400 p-2 rounded-md">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Firza</p>
        </div>
        <UserPlus />
      </div>
      <div className=" my-2 justify-beetwen flex items-center border border-gray-400 p-2 rounded-md">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Firza</p>
        </div>
        <UserPlus />
      </div>
      <div className=" my-2 justify-beetwen flex items-center border border-gray-400 p-2 rounded-md">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Firza</p>
        </div>
        <UserPlus />
      </div>
    </div>
  );
};

export default CardWhoToFollow;
