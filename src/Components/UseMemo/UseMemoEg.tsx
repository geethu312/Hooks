import { useMemo, useState } from "react";
import "./UseMemoEg..css";
import { Button } from "react-bootstrap";

const UseHooks: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const generateNumber = () => {
    let min = 1;
    let max = 5;
    const generateNum = Math.random() * (max - min);
    const finalNum = Math.round(generateNum);
    setNum(finalNum);
  };

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const fibonacciOfFactorial = useMemo(() => {
    const calculateFibonacci = (n: number): number => {
      if (n <= 1) return n;
      return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    };
    return calculateFibonacci(factorial);
  }, [factorial]);

  return (
    <div className="main">
      <h1 className="heading">Calculate and display</h1>
      <div className="calc">
        <input
          className="inputStyle"
          value={num}
          placeholder="Enter a Number"
        />
        <Button className="buttonStyle" onClick={generateNumber}>
          Generate a number
        </Button>
        <h2>Factorial is: {factorial} </h2>
      </div>
      <input type="number" className="inputStyle" />
      <h2>Fibonacci of Factorial is: {fibonacciOfFactorial}</h2>
      <input
        type="text"
        onChange={handleNameChange}
        className="inputStyle"
        placeholder="Enter your name"
      />
      <h1>Your Name is: {name}</h1>
    </div>
  );
};

export default UseHooks;
