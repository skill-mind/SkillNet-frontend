import { terms } from "@/app/utils/data";

export function TermsContent() {

  return (
    <main className="w-full md:w-[1256px] mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px] mt-10 ">
      <h1 className=" text-3xl lg:text-4xl font-bold text-white text-center mt-20 mb-10">
        TERMS AND CONDITION
      </h1>
      <div className="space-y-12">
        {terms.map((term, index) => (
          <section
            key={index}
            className="flex flex-col gap-[20px] border-b border-[#595958] pb-[24px] pt-[24px]"
          >
            <h2 className="text-lg text-[#FFFFFF]">{term.title}</h2>
            <p className=" text-sm text-[#898783]">{term.content}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
