import Input from "@/components/Forms/Input";
import React from "react";

function VerifyCertificates() {
  const data = [
    { label: "Certificate Title" },
    { label: "Candidate Name" },
    { label: "Institution Name" },
    { label: "Exam Name" },
    // { label: "Certificate ID" },
    // { label: "Grading Type" },
  ];
  return (
    <div>
      <div>
        <Input
          type='text'
          name='name'
          placeholder='# - 12453ynuffjfip889wdjfnkknsk'
          label='Enter Unique Code'
          onChange={() => {}}
          value=''
        />
      </div>

      <div className='mt-9 w-full text-white'>
        {data.map((item, index) => (
          <div key={index} className='mb-4'>
            <Input
              type='text'
              name={item.label.toLowerCase().replace(/ /g, "_")}
              placeholder='#'
              label={item.label}
              onChange={() => {}}
              value='#'
            />
          </div>
        ))}

        <div className='grid grid-cols-2 mt-4 gap-4'>
          <Input
            type='text'
            name='certificate_id'
            placeholder='#'
            label='Certificate ID'
            onChange={() => {}}
            value='#'
          />
          <Input
            type='text'
            name='date_of_issuance'
            placeholder='Auto'
            label='Date of Issuance'
            onChange={() => {}}
            value='Auto'
          />
        </div>

        <div className='grid grid-cols-2 mt-4 gap-4'>
          <Input
            type='text'
            name='gradin_type'
            placeholder='#'
            label='Grading Type'
            onChange={() => {}}
            value='#'
          />
          <Input
            type='text'
            name='final_score'
            placeholder='Auto'
            label='Final Score'
            onChange={() => {}}
            value='Auto'
          />
        </div>
      </div>
    </div>
  );
}

export default VerifyCertificates;
