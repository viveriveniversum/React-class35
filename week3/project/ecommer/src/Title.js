import Navbar from "./Navbar";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
      <Navbar />
    </div>
  );
};
export default Title;
