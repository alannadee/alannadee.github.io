import React, {useEffect, useState} from 'react';
import MasonryGallery from '../components/MasonryGallery';
import MarkdownWrapper from '../components/MarkdownWrapper';

const homeImages = [
  "/home/1.jpg",
  "/home/2.jpg",
  "/home/3.JPG",
  "/home/4.JPG",
  "/home/5.JPG", 
  "/home/6.jpg",
  "/home/7.jpg",
  "/home/8.jpg",
  "/home/9.jpg",
  "/home/10.jpg",
  "/home/1.jpg",
  "/home/2.jpg",
]

const Home: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("./written_content/homeintro.md")
      .then((res) => res.text())
      .then((text) => setText(text))
      .catch(() => setText("Could not load intro."));
  }, []);

  const [hovered, setHovered] = useState(false);

  return (
    <div className="mx-0 items-center">
      <div className="h-screen flex sticky top-0 z-1 justify-center items-center">
        <div className="justify-center items-center mx-auto w-1/3 min-width-[500px]">
          <img src="/test.gif" className={`w-24 h-24 transition-opacity z-200 absolute duration-300 ${ hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}/>
          <h1 className="text-[10vw] -mb-[6vw] -mt-[10vw] text-white  font-kapakana"  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Alanna</h1>
          <h1 className="text-[5vw] text-white font-castoro text-right">Santoso</h1>
          <hr className="text-white w-[35vw] mx-auto mt-[2vw]"></hr>
        </div>
      </div>
      <div className="relative">
        <div className="z-2 relative h-[35vw] bg-gradient-to-t from-primary to-transparent"></div>
        <div className="z-3 pt-[5vw] pl-[15vw] pr-[15vw] relative bg-primary grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 pr-15 text-center ">
            <MarkdownWrapper text={text} variant="home"/>
          </div>
          <div className="col-span-1">
            <MasonryGallery images={homeImages}/>
          </div>
        </div>
        <div className="z-3 mr-10 ml-10 pb-12 pt-[5vw] text-center pl-[15vw] pr-[15vw] relative bg-primary grid sm:grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 px-5 lg:border-r-1 lg:border-white/20 ">
            <h1 className="z-4 text-white text-[1.5vw] font-castoro mb-1/2 ">latest updates</h1>
            <p className="text-white font-caudex ">recent blogs, lists to go here</p>
          </div>
          <div className="col-span-1 px-5 lg:border-r-1 lg:border-white/20">
            <h1 className="z-4 text-white text-[1.5vw] font-castoro mb-1/2 mx-auto">current status</h1>
            <p className="text-white font-caudex mx-auto">currently reading, currently listening to, etc...</p>
          </div>
          <div className="col-span-1 px-5">
            <h1 className="z-4 text-white text-[1.5vw] px-5 font-castoro mb-1/2 ">directory</h1>
            <p className="text-white font-caudex ">Ready to explore my site? Here's a list of some cool things to explore:</p>
          </div>
        </div>
        <div 
            className="relative w-full h-100 bg-cover z-100 bg-center bg-no-repeat" 
            style={{ backgroundImage: `url('/japan.jpg')` }}
          >
            <div className="absolute inset-0 bg-primary/85"></div>
            <div className='relative z-10 p-4'>
              <h1 className='text-left ml-[10vw] mt-[5vw] text-white text-4xl font-castoro'>let's connect!</h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home; 