import {ReactNode} from "react";

interface MessageinProps {
   children: ReactNode;
}
interface MessageoutProps {
   children: ReactNode;
}

export const MessageIn: React.FC<MessageinProps> = ({children}) => {
   return <div className="w-[614px] bg-[#161716] h-[44px] rounded-t-[8px] rounded-br-[8px] flex justify-between px-[16px] py-[8px] items-center">{children}</div>;
};

export const Messageout: React.FC<MessageinProps> = ({children}) => {
   return <div className="w-[614px] bg-[#202120] h-[44px] rounded-t-[8px] rounded-bl-[8px] flex justify-between px-[16px] py-[8px] items-center">{children}</div>;
};
