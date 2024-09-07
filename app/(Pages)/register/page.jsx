const page = () => {
  const professionOptions = [
    { value: "Student", label: "Student" },
    { value: "Working Professional", label: "Working Professional" },
  ];

  return (
    <div className="container pt-24 text-gray-400">
      <h2 className="text-white font-semibold text-center text-2xl ">
        REGISTER NOW
      </h2>
      <form className=" p-3 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col">
            <label className="text-white">First name*</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="p-2 w-80 rounded-sm"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-white">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="p-2 w-80 rounded-sm"
            />
          </div>
        </div>

        <div className="flex mt-6 justify-between flex-col sm:flex-row items-center gap-4">
          <div className="flex flex-col ">
            <label className="text-white">Mobile Number*</label>
            <input
              type="tel"
              placeholder="8345627890"
              className="p-2 w-80 rounded-sm"
              required
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-white">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-80 rounded-sm"
              required
            />
          </div>
        </div>

        <div className="flex mt-6 justify-between flex-col sm:flex-row items-center gap-4">
          <div className="flex flex-col">
            <label className="text-white">Upload your picture*</label>
            <input
              type="file"
              className="cursor-pointer w-80 border border-white p-2"
              required
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-white">Profession*</label>
            <select name="Profession" className="w-80 rounded-sm h-10" required>
              <option>Select</option>
              {professionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-6 w-80 sm:w-full mx-auto">
          <label className="text-white">Message</label>
          <textarea
            placeholder="How did you hear about this club?"
            className=" h-24 p-2 rounded-sm  "
          ></textarea>
        </div>

        <div className="text-center mt-6 ">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default page;
