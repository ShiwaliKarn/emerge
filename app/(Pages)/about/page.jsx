import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="container text-gray-400 pt-24 fade p-3">
        EMERGE Poetry was founded in the year 2020 on the 24th day of June. The
        club was an initiative to bring together, like minded people that
        enjoyed similar appreciation for the spoken art form. The club soon grew
        to be one of the most active clubs of Nagpur organizing various open
        mics all over the city. A few of such namely celebrated events were, Art
        Fusion held on the the 26th of January 2023, and various session held at
        Cafe republic and House of Hell Cafe. The club brought in contact
        various celebratory presences with members such as comedian Mr. Vinay
        Tiwari, poet Mr. Avinash Bagde and poetess Mrs. Indira Kislay. It also
        organised Emerge week for celebrations of 3 year anniversary which was
        published in the news. Ever since it has been the promoter of poetry and
        other spoken word are forms in the city, and has emerged as a City level
        club in Nagpur.
      </div>

      <h3 className="text-center text-white mt-7 font-semibold text-xl underline underline-offset-4">
        OUR TEAM
      </h3>

      <div className="flex  justify-center items-center gap-40 mt-6">
        <div className="flex flex-col text-gray-400  items-center">
          <Image
            src="/gyanesh.jpeg"
            height={200}
            width={200}
            alt="gyanesh"
            className="rounded-full "
          />
          <p className="mt-2">Gyanesh</p>
        </div>
        <div className="flex flex-col text-gray-400 items-center">
          <Image
            src="/Sharvari.jpg"
            height={200}
            width={200}
            alt="Sharvari"
            className="rounded-full"
          />
          <p className="mt-2">Sharvari</p>
        </div>
      </div>
    </div>
  );
};

export default About;
