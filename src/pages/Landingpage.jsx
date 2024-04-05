import image from "../assets/image.jpg";

function Landing() {
  return (
    <div className="landing">
    <h1 className="heading">Welcome to my food application!</h1>
    <img src={image} alt="Food" className="food-image" />
    <p className="paragraph">Are you ready to dive into the world of food?</p>
  </div>
);
}

export default Landing