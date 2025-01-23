"use client";

export default function Footer() {
  return (
    <footer className="w-[1240px] h-[180px] mx-auto border border-[#595958] bg-[#121312] flex justify-between items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <h5 className="">SKILLNET</h5>
        <ul className="flex flex-row justify-center items-center gap-5">
          <li>About</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>git</li>
          <li>X</li>
        </ul>
        <p>
          <span>© </span>Copyright SkillNet 2025
        </p>
      </div>
    </footer>
  );
}
