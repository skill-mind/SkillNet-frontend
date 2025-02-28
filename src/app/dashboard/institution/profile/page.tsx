"use client"

import Image from "next/image";
import CreateExamModel from "../components/create-exam";
import { useState } from "react"; 
import profileLogo from "../../../../public/institutionLogo.svg"
import copy from "../../../../public/img/copy.png"
import edit from "../../../../public/edit.svg"

interface Exam {
  id: number;
  status: string;
}

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black min-h-screen p-6 text-white flex flex-col relative">
        <Image src={profileLogo} alt="img" />

        <div className="flex justify-between items-center">
          <div>
           <h1>SkillNet Org</h1>
           <span>I</span>
           <p>Design Company</p>
          </div>

          <div>
            <div>
              <Image src={edit} alt="img" />
              <p>Edit</p>
            </div>
            <div>
             <span>0x123....32131</span>
             <Image src={copy} alt="img" />
            </div>
           
          </div>
        </div>

        <div>
          <p>SkillNet Org is a forward-thinking design agency specializing in UI/UX, branding, and product design. We craft seamless,
             intuitive, and visually stunning experiences that captivate users and drive business growth. Our team of creative strategists,
              designers, and developers collaborate to transform ideas into reality—whether it's building digital products,
               designing brand identities, or optimizing user experiences. At Innovate Designs, we believe in blending creativity with
                cutting-edge technology to deliver impactful solutions that stand out in today's competitive market. Let’s design the future,
               together.</p>
        </div>
     
      {isModalOpen && <CreateExamModel onClose={closeModal} />}
    </div>
  );
};

export default Profile;
