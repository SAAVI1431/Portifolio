import React from "react";

const Ed=()=>{
    return(
        <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Educational Details
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                <h5>Graduation</h5>
                <li>College: Sir C. R . Reddy College of Engineering, Eluru</li>
                <li>Degree : B.Tech</li>
                <li>Stream: Electronics and Communication Engineering (ECE)</li>
                <li>Score: 8.5(CGPA)</li>
                <li>Batch : 2017-2021</li>
              </p>
            </div>
            <div>
              <p>
                <h5>Higher Secondary</h5>
                <li>College : Sasi Womens Junior College, Velivennu(Tanuku)</li>
                <li>Stream: MPC</li>
                <li>Score: 973 (97.3%)</li>
                <li>Batch: 2015-2017</li>
              </p>
            </div>
            <div>
                <p>
                    <h5>Secondary Education</h5>
                    <li>School : Zilla Parishad Girls High School(Amalapuram)</li>
                <li>Score: 9.5 CGPA</li>
                <li>Batch: 2014-2015</li>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Ed;