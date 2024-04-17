import doc1 from '../assets/Doctors/doc1.png';
import doc2 from '../assets/Doctors/doc2.png';
import doc3 from '../assets/Doctors/doc3.png';
import doc4 from '../assets/Doctors/doc4.png';
import Banner2 from '../assets/banner2.png';

const DoctorsData = {
  heading: 'Meet Our Specialists',
  doctors: [
    {
      img: doc1,
      name: 'Dr. John Smith',
      job: 'Cardiologist',
    },
    {
      img: doc2,
      name: 'Dr. Kristin Watson',
      job: 'Dentist',
    },
    {
      img: doc3,
      name: 'Dr. Robert Flores',
      job: 'Surgeon',
    },
    {
      img: doc4,
      name: 'Dr. Katherine Allen',
      job: 'Neurologist',
    },
  ],
  heading2: 'Who Are We?',
  desc: 'A collaborative hospital service website is a digital platform that brings together healthcare professionals, patients and administrators to streamline and enganhe the delivery of healthcare services. This innovative platform allows for seamless communication and coordination among healthcare teams, enabling them to provide more efficient and personalized care to patients.',
  img: Banner2,
};

const Doctor = ({ doc }) => {
  return (
    <div>
      <div className="bg-[#9ae7ff] p-3 pb-0 rounded-tl-[100px] rounded-br-[100px] lg:rounded-tl-[130px] lg:rounded-br-[120px] overflow-hidden">
        <img className="min-w-[180px]" src={doc.img} alt={doc.name} />
      </div>
      <div className="pb-5 pt-3 text-white">
        <h5 className="font-bold">{doc.name}</h5>
        <p className="text-sm">{doc.job}</p>
      </div>
    </div>
  );
};

const Doctors = () => {
  return (
    <>
      <h3 className="text-4xl font-bold text-center mb-20 text-white">
        {DoctorsData.heading}
      </h3>
      <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0">
        {DoctorsData.doctors.map((doctor, index) => (
          <Doctor key={index} doc={doctor} />
        ))}
      </div>
      <h4 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20 text-white">
        {DoctorsData.heading2}
      </h4>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg text-white">
        {DoctorsData.desc}
      </div>
      <img className="m-auto" src={DoctorsData.img} />
    </>
  );
};

export default Doctors;