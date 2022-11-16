const Person = () => {
  return ( 
    <div className="person_box">
      <div className="each_box">
      <label htmlFor="name">First Name</label>
      <input type="text" onChange={(e) =>{console.log(e.target.value)}}/>
      </div>
      <div className="input_div">
      <label htmlFor="age">age</label>
      <input type="number"/>
      </div>
    </div>
   );
}
 
export default Person;