const page = () => {
  const professionOptions = [
    { value: "Student", label: "Student" },
    { value: "Working Professional", label: "Working Professional" },
  ];

  return (
    <div className="container text-gray-400 pt-32">
      <form className=" p-3 max-w-3xl mx-auto">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="First name"
            className="p-2 w-[40%] rounded-3xl"
          />
          <input type="text" placeholder="Last name" className="p-2 w-[40%]" />
        </div>

        <div className="flex mt-6 justify-between">
          <input
            type="tel"
            placeholder="Mobile number"
            className="p-2 w-[40%]"
          />
          <select name="Profession" className="w-[40%]">
            <option>Profession</option>
            {professionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mt-6">
          <input type="file" className="cursor-pointer" />
          <textarea
            placeholder="How did you hear about this club?"
            className="mt-6 h-24 p-2"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default page;
