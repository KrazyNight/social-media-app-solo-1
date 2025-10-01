import CommentModal from "@/components/modals/CommentModal";
import LoadingScreen from "@/components/modals/LoadingScreen";
import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import SignUpPrompt from "@/components/SignUpPrompt";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <>
      <div className="text-[#0F1419] min-h-screen 
      max-w-[1400px] mx-auto border-2 border-black
      flex
      
      ">
        <Sidebar />
        <PostFeed />
        <Widgets />
      </div>
     <SignUpPrompt /> 
     <CommentModal />
     {/* <LoadingScreen /> */}



    </>
  );
}
