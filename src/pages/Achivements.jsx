import img1 from "../assets/achievements/a1.jpg";
import img2 from "../assets/achievements/a2.jpg";
import img3 from "../assets/achievements/a3.jpg";

const achievements = [
  { img: img1, title: "Best Project Award" },
  { img: img2, title: "Industrial Training Certificate" },
  { img: img3, title: "Hackathon Winner" },
];

const Achievements = () => {
  return (
    <section className="achievements py-5">
      <div className="container">
        <h2 className="text-center mb-4">Achievements</h2>

        <div className="row g-4">
          {achievements.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="achievement-card">
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;