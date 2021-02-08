import React from "react";
import onlineTesting from "./../../../assets/images/components/home/online_test.png";
import expertProf from "./../../../assets/images/components/home/expert_professor.png";
import trustedCer from "./../../../assets/images/components/home/trusted_certification.png";
import scien from "./../../../assets/images/components/home/scientific_research.png";
import audioVid from "./../../../assets/images/components/home/audio_video.png";
import profCur from "./../../../assets/images/components/home/professional_course.png";

const data = [
  {
    name: "Online Testing",
    background: onlineTesting,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error tenetur. Similique dicta laboriosam id fugit repellendus!",
  },
  {
    name: "Expert Professors",
    background: expertProf,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error tenetur. Similique dicta laboriosam id fugit repellendus!",
  },
  {
    name: "Trusted Certifications",
    background: trustedCer,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error tenetur. Similique dicta laboriosam id fugit repellendus!",
  },
  {
    name: "Scientific Research",
    background: scien,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error tenetur. Similique dicta laboriosam id fugit repellendus!",
  },
  {
    name: "Audio Video course",
    background: audioVid,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error tenetur. Similique dicta laboriosam id fugit repellendus!",
  },
  {
    name: "Professional Courses",
    background: profCur,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error tenetur. Similique dicta laboriosam id fugit repellendus!",
  },
];

const lessonsData = [
  {
    text: "Programs",
    background: "https://saro.website/assets/img/embl/to-be.jpg",
    info: "",
  },
  {
    text: "Intermediate",
    background: "https://saro.website/assets/img/embl/to-be.jpg",
    info: "",
  },
  {
    text: "Advanced",
    background: "https://saro.website/assets/img/embl/to-be.jpg",
    info: "",
  },
  {
    text: "Tools",
    background: "https://saro.website/assets/img/embl/to-be.jpg",
    info: "",
  },
  {
    text: "Quiz",
    background: "https://saro.website/assets/img/embl/to-be.jpg",
    info:
      "Check yourself with our examas! You can choose level since 0 unit up to 99",
  },
  {
    text: "Games",
    background: "https://saro.website/assets/img/embl/to-be.jpg",
    info: "Learn and play",
  },
];

const Lessons = () => {
  return (
    <main>
      <section className="section lessons">
        <h2 className="lessons-title">Features</h2>
        <div className="features-container">
          {data.map((item, index) => {
            const { name, background, info } = item;
            return (
              <>
                <div className="feature-container" key={index}>
                  <div className="feature">
                    <div
                      className="img-container"
                      style={{ backgroundImage: `url(${background})` }}
                    ></div>
                    <p className="name">{name}</p>
                    <p className="info">{info}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <section className="section lessons-primary">
        <h2 className="lessons-title">Programs</h2>
        <div className="programs-container">
          {lessonsData.map((item, index) => {
            const { text, background, info } = item;
            return (
              <>
                <div className="program-container" key={index}>
                  <div
                    className="program"
                    style={{ backgroundImage: `url(${background})` }}
                  >
                    <p className="text">{text}</p>
                    {info && <p className="text-info">{info}</p>}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Lessons;
