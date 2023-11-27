import { Children } from "react";

interface FooterListProps {
    children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({children}) => {
    return ( <div className="
    w-full
    sm:w-1/2
    md:w1/4
    lg:w-1/6
    mb-b
    flex
    flex-col
    gap-2
    ">
        {children}
    </div> );
}
 
export default FooterList;