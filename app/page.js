import Header from "@/components/Header";
import Slider from "@/components/Slider";
import VideoContainer from "@/components/VideoContainer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white h-screen">
      <Header />
      <div className="flex mt-3 h-full">
        <Slider className='w-64 shrink-0'/>
        <VideoContainer className='grow'/>
      </div>
    </div>
  );
}
