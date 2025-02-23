"use client";

import { useState } from "react";
import { X, Pencil } from "lucide-react";

interface Question {
  title: string;
  options: string[];
  answer: string;
}

function CreateExamModel() {
  const [items, setItems] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [certification, setCertification] = useState<string>("Yes");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [newOptions, setNewOptions] = useState<string[]>(["", "", "", ""]);
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [examDuration, setExamDuration] = useState<string>("");
  const [examName, setExamName] = useState<string>("");
  const [examDescription, setExamDescription] = useState<string>("");
  const [examType, setExamType] = useState<string>("SC"); // SC for Single Choice, MC for Multiple Choice
  const [candidateEligibility, setCandidateEligibility] =
    useState<string>("SC");

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItem: string = `Button ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleCertificationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCertification(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //form submission,
    const formData = {
      examName,
      examDescription,
      examType,
      candidateEligibility,
      items,
      files,
      certification,
      examDuration,
    };
    console.log(formData);
  };
  const handleAddQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      newQuestion.trim() !== "" &&
      newAnswer.trim() !== "" &&
      newOptions.every((option) => option.trim() !== "")
    ) {
      const question: Question = {
        title: newQuestion,
        options: newOptions,
        answer: newAnswer,
      };
      setQuestions([...questions, question]);
      setNewQuestion("");
      setNewOptions(["", "", "", ""]);
      setNewAnswer("");
    }
  };

  return (
    <div className="w-full h-auto flex bg-inherit absolute left-0 transition-all duration-300 flex-col p-5">
      <div className="flex flex-col gap-10">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="md:flex w-full space-y-5 md:space-y-0 gap-4">
            <div className="flex flex-col w-full md:w-[60%] gap-[20px]">
              <div className="flex flex-col w-full">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="examName">
                  Exam Name*
                </label>
                <input
                  className="bg-transparent placeholder:text-[#5E5E5E] border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  type="text"
                  name="examName"
                  id="examName"
                  placeholder="Enter exam name"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="examDescription">
                  Exam Description
                </label>
                <textarea
                  id="examDescription"
                  className="bg-transparent placeholder:text-[#5E5E5E] border-[1px] min-h-[176px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  placeholder="Write exam description"
                  value={examDescription}
                  onChange={(e) =>
                    setExamDescription(e.target.value)
                  }></textarea>
              </div>
              <div className="flex w-full flex-col items-stretch">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="examType">
                  Exam Type*
                </label>
                <select
                  className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}>
                  <option className="bg-[#161716]" value="MC">
                    Multiple choice
                  </option>
                  <option className="bg-[#161716]" value="SC">
                    Theory
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[24px] md:w-[40%]">
              <div className="flex w-full flex-col items-stretch">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="candidateEligibility">
                  Candidate Eligibility*
                </label>
                <select
                  className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  value={candidateEligibility}
                  onChange={(e) => setCandidateEligibility(e.target.value)}>
                  <option className="bg-[#161716]" value="SC">
                    Paid Exam
                  </option>
                  <option className="bg-[#161716]" value="MC">
                    Free Exam
                  </option>
                </select>
              </div>
              <div>
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="courseCategory">
                  Exam Category
                </label>
                <div className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.30rem] rounded-[0.5rem]">
                  <div className="flex flex-row gap-5">
                    <div
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                      className="overflow-x-scroll flex gap-[8px]">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="bg-transparent text-white gap-2 flex items-center flex-none px-2 border-[#252625] border rounded-[8px]">
                          {item}
                          <X size={14} color="white" />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={handleAddItem}
                      className="bg-transparent text-white px-2 border-[#252625] border rounded-[8px]">
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[5px] items-stretch">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="certification">
                  Certification*
                </label>
                <select
                  className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  value={certification}
                  onChange={handleCertificationChange}>
                  <option className="bg-[#161716]" value="Yes">
                    Yes
                  </option>
                  <option className="bg-[#161716]" value="No">
                    No
                  </option>
                </select>
                {certification === "Yes" && (
                  <div className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.30rem] mt-2 rounded-[0.5rem]">
                    <div className="flex flex-row gap-5">
                      <div
                        style={{
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                        className="overflow-x-scroll flex gap-[8px]">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="bg-transparent text-white px-2 flex flex-none border-[#252625] border rounded-[8px] items-center gap-2">
                            {file.name}
                            <button onClick={() => handleRemoveFile(index)}>
                              <X size={14} color="white" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleAddFile}
                        multiple
                      />
                      <label
                        htmlFor="fileInput"
                        className="bg-transparent text-white px-2 border-[#252625] border rounded-[8px] flex items-center gap-1 cursor-pointer">
                        Add file <X size={16} color="white" />
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full items-stretch">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="duration">
                  Exam Duration*
                </label>
                <input
                  className="bg-transparent placeholder:text-[#5E5E5E] border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[40%] px-4 py-[0.40rem] rounded-[0.5rem]"
                  type="text"
                  placeholder="Enter exam duration"
                  name="examDuration"
                  value={examDuration}
                  onChange={(e) => setExamDuration(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>

        {/* created questions section */}

        {questions.length > 0 && (
          <div className="bg-[#161716] rounded-[8px] gap-[24px] p-[24px]">
            <h1 className="text-[#9596A0] text-[0.875rem] mb-7">
              {questions.length > 1 ? "Questions" : "Question"}{" "}
              {questions.length}
            </h1>
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex items-center md:w-[70%] gap-5 justify-between mb-3">
                <span className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full  px-4 py-[0.40rem] rounded-[0.5rem]">
                  {question.title}
                </span>
                <button className="text-white bg-white/10 p-2 rounded-full">
                  <Pencil size={16} color="white" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* create question form */}
        {}
        <form className="bg-[#161716] rounded-[8px] gap-[24px] p-[24px]">
          <h1 className="text-[#9596A0] text-[0.875rem] mb-4">
            Question {questions.length + 1}
          </h1>
          <div className="flex flex-col gap-8">
            <input
              className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[70%] px-4 py-[0.40rem] rounded-[0.5rem]"
              type="text"
              name=""
              placeholder="Question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <div className="flex flex-col gap-3 ">
              <h1 className="text-[#9596A0] text-[0.875rem] mb-1">Options</h1>
              {newOptions.map((option, index) => (
                <div key={index} className="flex w-full items-stretch">
                  <input
                    className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[70%] px-4 py-[0.40rem] rounded-[0.5rem]"
                    type="text"
                    name={""}
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => {
                      const updatedOptions = [...newOptions];
                      updatedOptions[index] = e.target.value;
                      setNewOptions(updatedOptions);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-3">
              <label
                className="text-[#9596A0] text-[0.875rem] mb-1"
                htmlFor="answer">
                Answer
              </label>
              <input
                className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[70%] px-4 py-[0.40rem] rounded-[0.5rem]"
                type="text"
                name=""
                id="answer"
                placeholder="Correct option"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center w-full ">
              <button
                onClick={handleAddQuestion}
                className="font-[WorkSans] py-[12px] px-[24px] font-medium bg-[#2D2E2D] rounded-[8px]">
                <span className="font-black text-white">+</span> ADD QUESTION
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateExamModel;
