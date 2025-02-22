export const EndExamDialog = ({
    setShowEndDialog,
    handleEndExam,
  }: {
    setShowEndDialog: (show: boolean) => void;
    handleEndExam: () => void;
  }) => {
    return (
      <div className="min-h-screen bg-[#101110] text-white p-6">
        <div className="w-full p-6">
          <div className="font-semibold text-xl mt-[5.25rem] mb-6 w-full border border-[#313130] rounded-[0.5rem] p-[1.5rem]">
            Are you sure you want to end the exam?
          </div>
          <div className="mb-6 w-full border border-[#313130] rounded-[0.5rem] py-[1.5rem]">
            <p className="ml-[1.5rem] text-lg mb-4">Once you submit:</p>
            <div className="w-full border border-[#313130]" />
            <ul className="space-y-2 ml-[2.5rem] mt-4">
              <li>• All answered questions will be recorded.</li>
              <li>• You cannot go back and make changes.</li>
              <li>• Your final score will be calculated immediately.</li>
            </ul>
          </div>
          <div className="mb-6 w-full border border-[#313130] rounded-[0.5rem] py-[1.5rem]">
            <p className="ml-[1.5rem] text-lg mb-4">
              If you still have time left, you can continue answering.
            </p>
            <div className="w-full border border-[#313130]" />
            <ul className="space-y-2 ml-[2.5rem] mt-4">
              <li>• Click "Yes, Submit Exam" to finalize.</li>
              <li>• Click "Cancel" to go back.</li>
            </ul>
          </div>
          <div className="flex justify-center gap-2">
            <button
              className="bg-[#D0EFB1] text-[#0E0F0E] font-normal text-[1rem] px-4 py-2 flex justify-center items-center rounded-[0.5rem]"
              onClick={() => setShowEndDialog(false)}
            >
              Cancel
            </button>
            <button
              className="bg-[#2D2E2D] text-[#FCFCFC] font-normal text-[1rem] px-4 py-2 flex justify-center items-center rounded-[0.5rem]"
              onClick={handleEndExam}
            >
              Yes, Submit Exam
            </button>
          </div>
        </div>
      </div>
    );
  };