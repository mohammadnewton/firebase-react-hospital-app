import BannerImage from '../assets/banner1.png';
import neurology from '../assets/Icons/Neurology.png';
import cardiology from '../assets/Icons/Cardiology.png';
import orthopedics from '../assets/Icons/Orthopoedics.png';
import surgery from '../assets/Icons/Surgery.png';
import dentistry from '../assets/Icons/Dentistry.png';
import radiology from '../assets/Icons/Radiology.png';
import urology from '../assets/Icons/Urology.png';
import medicine from '../assets/Icons/Medicine.png';
import seeMoreImage from '../assets/Icons/seeMoreImage.png';

const ListItem = ({ text }) => {
  return (
    <li className="flex lg:items-center gap-3 text-xs xs:text-sm">
      <p>{text}</p>
    </li>
  );
};

const Banner1Data = {
  heading: 'We Are Always Here To Ensure Best Medical Treatment',
  texts: [
    'Easy make appointment',
    'Top specialist doctors',
    '24/7 service',
    'Discount for all medical treatments',
    'Enrolment is quick and easy',
  ],
  img: BannerImage,
};

const Banner1 = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20 text-white">
      <div className="max-w-xs md:max-w-md">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {Banner1Data.heading}
        </h3>
        <ul className="text-sm md:ml-5 gap-2 md:gap-5 flex flex-col">
          {Banner1Data.texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <div className="bg-[#9ae7ff] shadow-xl rounded-2xl p-5 pb-0 max-w-xs md:max-w-md">
        <img src={Banner1Data.img} alt="Banner1" />
      </div>
    </div>
  );
};

const ServicesData = [
  {
    img: neurology,
    title: 'Neurology',
    id: 'neurology',
    heading: 'Neurology Department',
    texts: [
      'Expert neurological consultations',
      'Comprehensive brain and nerve care',
      'Advanced neuroimaging services',
      'Treatment for epilepsy and seizures',
      'Memory and cognitive assessments',
      'Pediatric neurology expertise',
      'Movement disorders management',
    ],
  },
  {
    img: cardiology,
    title: 'Cardiology',
    id: 'cardiology',
    heading: 'Cardiology Department',
    texts: [
      'Electrocardiogram (ECG)',
      'Echocardiogram',
      'Color Doppler Echo',
      'Dobutamine Stress Echo (DSE)',
      'Transesophageal Echo (TEE)',
      'Exercise Tolerance Test (ETT/TMT)',
      'Halter monitor',
      '24 Hour Ambulatory BP monitor',
      'Tilt Test/Tilt Table Test',
    ],
  },
  {
    img: orthopedics,
    title: 'Orthopedics',
    id: 'orthopedics',
    heading: 'Orthopedics Department',
    texts: [
      'Orthopedic surgery and joint replacements',
      'Sports injury and trauma care',
      'Physical therapy and rehabilitation',
      'Spine and back pain solutions',
      'Arthritis and joint disorder treatment',
      'Orthopedic consultations',
      'Customized orthopedic care plans',
    ],
  },
  {
    img: surgery,
    title: 'Surgery',
    id: 'surgery',
    heading: 'Surgery Department',
    texts: [
      'Minimally invasive and laparoscopic surgery',
      'Gastrointestinal surgery and endoscopy',
      'Plastic and reconstructive surgery',
      'Cancer and tumor resection',
      'Post-operative care and recovery',
      'Surgical consultations',
      'Emergency surgical interventions',
    ],
  },
  {
    img: dentistry,
    title: 'Dentistry',
    id: 'dentistry',
    heading: 'Dentistry Department',
    texts: [
      'Routine dental check-ups and cleanings',
      'Cosmetic dentistry and teeth whitening',
      'Oral surgery and extractions',
      'Dental implants and restorations',
      'Pediatric and family dentistry',
      'Gum disease treatment',
      'Orthodontic and braces options',
    ],
  },
  {
    img: radiology,
    title: 'Radiology',
    id: 'radiology',
    heading: 'Radiology Department',
    texts: [
      'Advanced diagnostic imaging services',
      'Mammography and breast health screening',
      'Interventional radiology procedures',
      'Virtual colonoscopy and body scans',
      'Radiology consultations',
      'Fast and accurate imaging results',
      'State-of-the-art radiology technology',
    ],
  },
  {
    img: urology,
    title: 'Urology',
    id: 'urology',
    heading: 'Urology Department',
    texts: [
      'Urinary tract and kidney evaluations',
      'Urologic surgery and stone removal',
      "Men's and women's urological health",
      'Prostate and bladder care',
      'Incontinence and pelvic floor therapy',
      'Urological consultations',
      'Comprehensive urology solutions',
    ],
  },
  {
    img: medicine,
    title: 'Medicine',
    id: 'medicine',
    heading: 'Medicine Department',
    texts: [
      'Primary care and internal medicine',
      'Chronic disease management and prevention',
      'Immunizations and wellness checks',
      'Holistic and integrative medicine',
      'Geriatric and pediatric medicine',
      'Health education and lifestyle coaching',
      'Individualized medical treatment plans',
    ],
  },
  {
    img: seeMoreImage,
    title: 'See More',
    id: 'seemore',
    heading: 'Explore Our Services',
    texts: [
      'Explore additional healthcare options',
      'Specialized medical services for all needs',
      'Discover a world of medical solutions',
      'Find the right care for you',
      'Comprehensive healthcare offerings',
      'More than meets the eye',
      'Healthcare beyond expectations',
    ],
  },
];

const Service = ({ service }) => {
  return (
    <div>
      <img
        className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
        src={service.img}
        alt={service.title}
      />
      <p className="text-[10px] font-bold sm:text-sm lg:text-xl text-white">
        {service.title}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Services</h2>
      <div className=" flex flex-col justify-between lg:flex-row gap-10 lg:gap-5">
        <div className="grid grid-cols-3 gap-5">
          {ServicesData?.map((service, index) => (
            <Service
              key={index}
              service={service}
            />
          ))}
        </div>
      </div>
      <Banner1 />
    </>
  );
};

export default Services