import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AllItems from "./components/pages/All_item";
import SingleItem from "./components/pages/Single_item";
import CreateItem from "./components/pages/Create_item";
import { Modules, Module, Cohort, Degree, Students, Student, CreateDegree, CreateCohort, CreateModule, CreateStudent, CreateGrades} from "./components/pages/DisplayComponent";
import { ValidateDegreeForm, ValidateCohortForm, ValidateModuleForm, ValidateStudentForm, ValidateGradesForm } from "./components/pages/validators";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_degrees" element={<AllItems name={"Degrees"} endpoint={"/degree"} Component={Degree} />} />
        <Route path="/all_degrees/:ItemId" element={<SingleItem name={"Degree"} endpoint={"/cohort/?degree="} Component={Cohort} />} />
        <Route path="/create_degree" element={<CreateItem endpoint={"/degree/"} Component={CreateDegree} fields={["full_name", "shortcode"]} ValidateItemData={ValidateDegreeForm} />} />
        <Route path="/all_cohorts" element={<AllItems name={"Cohorts"} endpoint={"/cohort"} Component={Cohort} />} />
        <Route path="/all_cohorts/:ItemId" element={<SingleItem name={"Cohort"} endpoint={"/student/?cohort="} Component={Students} />} />
        <Route path="/create_cohort" element={<CreateItem endpoint={"/cohort/"} Component={CreateCohort} fields={["id", "year", "degree", "name" ]} ValidateItemData={ValidateCohortForm} />} />
        <Route path="/all_modules" element={<AllItems name={"Modules"} endpoint={"/module"} Component={Modules} />} />
        <Route path="/all_modules/:ItemId" element={<SingleItem name={"Module"} endpoint={"/module/"} Component={Module} />} />
        <Route path="/create_module" element={<CreateItem endpoint={"/module/"} Component={CreateModule} fields={["code", "full_name", "delivered_to", "ca_split" ]} ValidateItemData={ValidateModuleForm} />} />
        <Route path="/cohort_modules/:ItemId" element={<SingleItem name={"Cohort"} endpoint={"/module/?delivered_to="} Component={Modules} />} />
        <Route path="/student/:ItemId" element={<SingleItem name={"Student"} endpoint={"/student/"} Component={Student} />} />
        <Route path="/create_student" element={<CreateItem endpoint={"/student/"} Component={CreateStudent} fields={["student_id","first_name","last_name","email", "cohort"]} ValidateItemData={ValidateStudentForm} />} />
        <Route path="/create_grade" element={<CreateItem endpoint={"/grade/"} Component={CreateGrades} fields={["module","ca_mark","exam_mark", "cohort","total_grade", "student"]} ValidateItemData={ValidateGradesForm} />} />
      </Routes>
    </Router>
  );
}

export default App;