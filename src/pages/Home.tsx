import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="mx-0 items-center">

      <div className="h-screen flex sticky top-0 z-1 justify-center items-center">
        <div className="justify-center items-center mx-auto w-1/2 min-width-[500px]">
          <h1 className="text-[15vw] -mb-[10vw] -mt-[10vw] text-white  font-kapakana">Alanna</h1>
          <h1 className="text-[8vw] text-white font-castoro text-right">Santoso</h1>
          <hr className="text-white w-[35vw] mx-auto mt-[2vw]"></hr>
        </div>
      </div>


      <div className="relative">
        <div className="z-2 relative h-[35vw] bg-gradient-to-t from-primary to-transparent"></div>
        <div className="z-3 pt-[5vw] pl-[9vw] relative bg-primary h-screen flex">
          <div>
            <h1 className="z-4 text-white text-[4vw] font-castoro mb-1/2">hi, i'm alanna!</h1>
            <p className="text-white font-caudex px-8">hi, I'm Alanna! <br/> I'm a second year Computer Science and Finance student, and this website serves as a little hub to all my projects, hobbies and also as my creative outlet. Explore and enjoy!</p>
          </div>

          <div>
            
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home; 