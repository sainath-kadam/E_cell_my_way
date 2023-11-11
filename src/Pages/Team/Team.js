import "./Team.css";
import TeamCard from "../../Components/ReuseableCard/TeamCard/TeamCard";
import TeamData from "../../Assets/data/TeamData";
const Team = () => {
  return (

    <div className='container' style={{ backgroundColor: 'black' }}>
      <div className="home-section-two">
        <div className="border-container atrang-sec">
          <h1 className="section-heading">E-Cell</h1>
          <div className="council-card--container">
            {TeamData.map((ele) => {
              return (
                <TeamCard
                  key={ele.key}
                  img={ele.img}
                  name={ele.name}
                  post={ele.post}
                  about={ele.about}
                  email={ele.email}
                  linkedIn={ele.linkedIn}
                  portfolio={ele.portfolio}
                  tag={ele.tag}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
