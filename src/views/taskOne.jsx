import React from "react";
import { Container } from "reactstrap";

export const TaskOne = ({ arr1, k }) => {
  const arr2 = arr1.sort((first, last) => first - last).slice(0, k),
    outPut = arr2[arr2.length - 1] - arr2[0];

  return (
    arr1?.length > 0 &&
    k && (
      <Container>
        <h1>Task One Solution</h1>
        <div className="mt-5">
          <h2>arr1:</h2>
          <pre>
            <strong>{JSON.stringify(arr1, "\t", 4)}</strong>
          </pre>
        </div>

        <div className="mt-5">
          <h2>arr2:</h2>
          <pre>
            <strong>{JSON.stringify(arr2, "\t", 4)}</strong>
          </pre>
        </div>

        <div className="mt-5">
          <h2>outPut:</h2>
          <p>
            <strong>{outPut}</strong>
          </p>
        </div>
      </Container>
    )
  );
};
