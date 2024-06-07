import './Circle.css'
// const progress = [100, 5, 5,];
function Circle(props) {
    return (
    <>
     
     <div className="loading-circle-container">
      <div className="loading-circle-inner">
      
      </div>
      <div className="loading-circle-outer">
      <div className="insert">
        <p>{props.progress+"%"}</p>
      </div>
      </div>
    </div>
    </>
  );
}

export default Circle;