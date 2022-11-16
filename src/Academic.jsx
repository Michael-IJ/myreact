import React, {useState, useEffect}  from "react";

const Academic = () => {
  const[academic, setAcademic] = useState ({
    startYear: "",
    endYear: "",
    sessionTittle: "",
    semester: "",
  })

  let [academicDetails, setAcademicDetails] = useState([])

  function mystartyear(e){
    setAcademic(academic => academic = { ...academic, startYear: e.target.value })
  }

  function myendyear(e){
    setAcademic(academic => academic = { ...academic, endYear: e.target.value})
  }

  function mysessiontittle(e){
    setAcademic(academic => academic = { ...academic, sessionTittle: e.target.value})
  }

  function mysemester(e){
    setAcademic(academic => academic = { ...academic, semester: e.target.value})
  }

  function myevent(){
    setAcademicDetails(academicDetails => [...academicDetails, academic])
  }

  useEffect(() => {
    localStorage.setItem("academic", JSON.stringify(academicDetails))
  }, [academic, academicDetails]);
    
  return ( 
    <div className="academic">
    <div className= "startyear">
      <label>Start Year</label>
      <select onChange={(e) => {mystartyear(e)}}>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
      </select>
    </div>
      <div className= "myendyear">
        <label>End Year</label>
        <select onChange={(e) => { myendyear(e) }}>
        <option value="">--Choose One--</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
        </select>
        </div>
        <div className= "sessiontittle">
          <label>Session Tittle</label>
          <input type="text" onChange={(e) => { mysessiontittle(e) }} />
          </div>
          <div className= "semester">
            <label>Semester</label> 
            <select onChange={(e) => { mysemester(e) }}>
             <option value="">--Choose One--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              </select>
              </div>

              <button onClick={myevent}>Add</button>
    </div>
   );
}
 
export default Academic;