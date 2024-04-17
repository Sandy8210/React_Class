import React, { useCallback, useState } from "react";
import Title from "./Title";
import Display from "./Display";
import Button from "./Button";

export default function Parent() {
  console.log("Parent Page");
  const [age, setage] = useState(10);
  const [salary, setsalary] = useState(10000);

  const ageInc = useCallback(() => {
    setage(age + 1);
  }, [age]);
  const salaryInc = useCallback(() => {
    setsalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Display name={age} display="age" />
      <Button func={ageInc} display="age"/>

      <Display name={salary} display="salary" />
      <Button func={salaryInc} display="salary"/>
    </div>
  );
}
