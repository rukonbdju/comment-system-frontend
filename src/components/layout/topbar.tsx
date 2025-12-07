import { MessageSquare } from "lucide-react";
import Avatar from "../shared-components/avatar";

const TopBar = () => {
    return (
        <div className="w-full bg-white shadow-lg sticky top-0 z-10">
            <div className="max-w-4xl mx-auto flex justify-between items-center h-16 px-4 sm:px-0">
                <div className="text-xl font-bold text-indigo-600 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2" />
                    Comment App
                </div>

                {/* Always display the logged-in user details */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Avatar size={40} name={"Test User"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;