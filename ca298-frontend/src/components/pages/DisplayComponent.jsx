import axios from "axios";
import { useEffect, useState } from "react";

/*
export const Modules = ({ data }) => (
  <ul>
    {data.map((module, index) => (
      <li key={index}>
        <p>code: {module.code}</p>
        <p>full_name: {module.full_name}</p>
        <p>{module.ca_split}</p>
      </li>
    ))}
  </ul>
);

export const Module = ({data}) => {
    return (
    <div>
        <p>Module Name: {data.full_name}</p>
        <p>CA split :{data.ca_split}</p>
    </div>)
}

export const Cohort = ({ data }) => (
    <ul>
      {data.map((cohort, index) => (
        <li key={index}>
        <p>ShortCode :{cohort.id}</p>
        <p>year : {cohort.year}</p>
        <p>{cohort.name}</p>
        </li>
      ))}
    </ul>
  );

export const Degree = function ({ data }) {
        return (
            <ul className="divide-y divide-gray-200">
                {data.map((degree, index) => (
                    <li key={index} className="py-4">
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-gray-800">Full Name: {degree.full_name}</p>
                            <p className="text-sm text-gray-600">Shortcode: {degree.shortcode}</p>
                        </div>
                    </li>
                ))}
            </ul>
        );
        
}
  
export const Students = function ({ data }) {
      return(
      <ul>
          {data.map((student, index) => (
              <li key={index}>
                  <p>id number :{student.id}</p>
                  <p>first name: {student.first_name}</p>
                  <p>last name: {student.last_name}</p>
                  <p>email: {student.email}</p>
              </li>
          ))}
      </ul>)
}

export const Student = function ({ data }) {
    const [studentData, setStudentData] = useState([]);
    const [moduleNames, setModuleNames] = useState([]);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/grade/?student=${data.student_id}`);
                setStudentData(response.data);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchStudentData();
    }, [data.student_id]);

    useEffect(() => {
        const fetchModuleNames = async () => {
            const promises = studentData.map(async (details) => {
                try {
                    const response = await axios.get(details.module);
                    return response.data.full_name;
                } catch (error) {
                    console.error("Error fetching module name:", error);
                    return null;
                }
            });

            const resolvedModuleNames = await Promise.all(promises);
            setModuleNames(resolvedModuleNames);
            console.log(moduleNames)
        };

        if (studentData.length > 0) {
            fetchModuleNames();
        }
    }, [studentData,moduleNames]);

    return (
        <ul>
            <li>
                <p>First name: {data.first_name}</p>
                <p>Last name: {data.last_name}</p>
                <p>Email: {data.email}</p>
            </li>
            
            {studentData.map((details, index) => (
                <li key={index}>
                    <p>ID: {details.id}</p>
                    <p>CA mark: {details.ca_mark}</p>
                    <p>Exam mark: {details.exam_mark}</p>
                    <p>Total grade: {details.total_grade}</p>
                    <p>Module name: {moduleNames[index] || "N/A"}</p>
                </li>
            ))}
        </ul>
    );
};


    
export const CreateDegree = ({Change }) => {
    return (
      <>
        <input
          type="text"
          name="full_name"
          onChange={Change}
          placeholder="Full Name"
        />
        <input
          type="text"
          name="shortcode"
          onChange={Change}
          placeholder="Shortcode"
        />
      </>
    );
  };
  
  

export const CreateCohort =  ({Change}) => {
    return(
        <>
            <input
                type="text"
                name="id"
                onChange={Change}
                placeholder="Course Code"
            />
            <input
                type="number"
                name="year"
                onChange={Change}
                placeholder="year"
            /> 
            <input
                type="text"
                name="degree"
                onChange={Change}
                placeholder="Degree in all caps"
            />
            <input
                type="text"
                name="name"
                onChange={Change}
                placeholder="Full Name"
            />
        </>
    )
};

    
export const CreateModule =  ({Change}) => {
    return(
        <>
            <input
                type="text"
                name="code"
                onChange={Change}
                placeholder="Course Code"
            />
            <input
                type="text"
                name="full_name"
                onChange={Change}
                placeholder="full name"
            /> 
            <input
                type="text"
                name="delivered_to"
                onChange={Change}
                placeholder="if multiple type (cohort1, cohort2)"
            />
            <input
                type="text"
                name="ca_split"
                onChange={Change}
                placeholder="ca split as a precentage"
            />
        </>
    )
};

export const CreateStudent = ({Change}) => {
    return(
        <>
            <input
                type="number"
                name="student_id"
                onChange={Change}
                placeholder="Course Code"
            />
            <input
                type="text"
                name="first_name"
                onChange={Change}
                placeholder="first name"
            /> 
            <input
                type="text"
                name="last_name"
                onChange={Change}
                placeholder="last name"
            />
            <input
                type="text"
                name="cohort"
                onChange={Change}
                placeholder="Cohort"
            />
            <input
                type="email"
                name="email"
                onChange={Change}
                placeholder="Email"
            />
            
        </>
    ) 
}
export const CreateGrades = ({Change}) => {
    return(
        <>
            <input
                type="number"
                name="student"
                onChange={Change}
                placeholder="Student ID number"
            />
            <input
                type="text"
                name="module"
                onChange={Change}
                placeholder="Module Code"
            /> 
            <input
                type="text"
                name="cohort"
                onChange={Change}
                placeholder="Student Cohort"
            />
            <input
                type="text"
                name="ca_mark"
                onChange={Change}
                placeholder="CA mark"
            />
            <input
                type="text"
                name="exam_mark"
                onChange={Change}
                placeholder="Exam mark"
            />
            <input
                type="text"
                name="total_grade"
                onChange={Change}
                placeholder="Total Grade"
            />
            
        </>
    ) 
}
*/
export const Modules = ({ data }) => (
    <ul className="divide-y divide-gray-200">
        {data.map((module, index) => (
            <li key={index} className="py-4">
                <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-800">Code: {module.code}</p>
                    <p className="text-lg font-semibold text-gray-800">Full Name: {module.full_name}</p>
                    <p className="text-lg font-semibold text-gray-800">CA Split: {module.ca_split}</p>
                </div>
            </li>
        ))}
    </ul>
);

export const Module = ({ data }) => (
    <div>
        <p className="text-lg font-semibold text-gray-800">Module Name: {data.full_name}</p>
        <p className="text-lg font-semibold text-gray-800">CA Split: {data.ca_split}</p>
    </div>
);

export const Cohort = ({ data }) => (
    <ul className="divide-y divide-gray-200">
        {data.map((cohort, index) => (
            <li key={index} className="py-4">
                <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-800">Shortcode: {cohort.id}</p>
                    <p className="text-lg font-semibold text-gray-800">Year: {cohort.year}</p>
                    <p className="text-lg font-semibold text-gray-800">Name: {cohort.name}</p>
                </div>
            </li>
        ))}
    </ul>
);

export const Degree = ({ data }) => (
    <ul className="divide-y divide-gray-200">
        {data.map((degree, index) => (
            <li key={index} className="py-4">
                <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-800">Full Name: {degree.full_name}</p>
                    <p className="text-lg font-semibold text-gray-800">Shortcode: {degree.shortcode}</p>
                </div>
            </li>
        ))}
    </ul>
);

export const Students = ({ data }) => (
    <ul className="divide-y divide-gray-200">
        {data.map((student, index) => (
            <li key={index} className="py-4">
                <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-800">ID Number: {student.id}</p>
                    <p className="text-lg font-semibold text-gray-800">First Name: {student.first_name}</p>
                    <p className="text-lg font-semibold text-gray-800">Last Name: {student.last_name}</p>
                    <p className="text-lg font-semibold text-gray-800">Email: {student.email}</p>
                </div>
            </li>
        ))}
    </ul>
);

export const Student = ({ data }) => {
    const [studentData, setStudentData] = useState([]);
    const [moduleNames, setModuleNames] = useState([]);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/grade/?student=${data.student_id}`);
                setStudentData(response.data);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchStudentData();
    }, [data.student_id]);

    useEffect(() => {
        const fetchModuleNames = async () => {
            const promises = studentData.map(async (details) => {
                try {
                    const response = await axios.get(details.module);
                    return response.data.full_name;
                } catch (error) {
                    console.error("Error fetching module name:", error);
                    return null;
                }
            });

            const resolvedModuleNames = await Promise.all(promises);
            setModuleNames(resolvedModuleNames);
        };

        if (studentData.length > 0) {
            fetchModuleNames();
        }
    }, [studentData]);

    return (
        <ul className="divide-y divide-gray-200">
            <li>
                <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-800">First Name: {data.first_name}</p>
                    <p className="text-lg font-semibold text-gray-800">Last Name: {data.last_name}</p>
                    <p className="text-lg font-semibold text-gray-800">Email: {data.email}</p>
                </div>
            </li>
            {studentData.map((details, index) => (
                <li key={index} className="py-4">
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-gray-800">ID: {details.id}</p>
                        <p className="text-lg font-semibold text-gray-800">CA Mark: {details.ca_mark}</p>
                        <p className="text-lg font-semibold text-gray-800">Exam Mark: {details.exam_mark}</p>
                        <p className="text-lg font-semibold text-gray-800">Total Grade: {details.total_grade}</p>
                        <p className="text-lg font-semibold text-gray-800">Module Name: {moduleNames[index] || "N/A"}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export const CreateDegree = ({ Change }) => (
    <>
        <h2 className="text-xl mb-4">Create A New Degree</h2>
                <input
                    type="text"
                    name="full_name"
                    onChange={Change}
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    name="shortcode"
                    onChange={Change}
                    placeholder="Shortcode"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
    </>      
);

export const CreateCohort = ({ Change }) => (
   <>
        <h2 className="text-xl mb-4">Create A New Cohort</h2>
        <input
            type="text"
            name="id"
            onChange={Change}
            placeholder="Course Code"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
            type="number"
            name="year"
            onChange={Change}
            placeholder="Year"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
            type="text"
            name="degree"
            onChange={Change}
            placeholder="Degree in all caps"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
            type="text"
            name="name"
            onChange={Change}
            placeholder="Full Name"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
    </>
);

export const CreateModule = ({ Change }) => (
    <>
        <h2 className="text-xl mb-4">Create A New Module</h2>
        <input
            type="text"
            name="code"
            onChange={Change}
            placeholder="Course Code"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
            type="text"
            name="full_name"
            onChange={Change}
            placeholder="Full Name"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
            type="text"
            name="delivered_to"
            onChange={Change}
            placeholder="Delivered To"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
            type="text"
            name="ca_split"
            onChange={Change}
            placeholder="CA Split as a Percentage"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
    </>
    
);

export const CreateStudent = ({ Change }) => (
        <>
            <h2 className="text-xl mb-4">Create A New Student</h2>
            <input
                type="number"
                name="student_id"
                onChange={Change}
                placeholder="Student ID Number"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="first_name"
                onChange={Change}
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="last_name"
                onChange={Change}
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="cohort"
                onChange={Change}
                placeholder="Cohort"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="email"
                name="email"
                onChange={Change}
                placeholder="Email"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
        </>    
);

export const CreateGrades = ({ Change }) => (
    <> 
        <h2 className="text-xl mb-4">Create A New Grade</h2>
            <input
                type="number"
                name="student"
                onChange={Change}
                placeholder="Student ID Number"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="module"
                onChange={Change}
                placeholder="Module Code"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="cohort"
                onChange={Change}
                placeholder="Student Cohort"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="ca_mark"
                onChange={Change}
                placeholder="CA Mark"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="exam_mark"
                onChange={Change}
                placeholder="Exam Mark"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
                type="text"
                name="total_grade"
                onChange={Change}
                placeholder="Total Grade"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
    </>
);

