import React, { useState } from "react";
import Service from "./service";
import BaseLayout from "../../components/BaseLayout";
import BaseCard from "../../components/BaseCard";
import BaseButton from "../../components/BaseButton";
import BaseInput from "../../components/BaseInput";
import NumbersDisplay from "./NumbersDisplay";

const RandomNumbers = () => {
  const [resultLength, setResultLength] = useState(6);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const changeInput = (value) => setResultLength(value);

  const drawNumbers = () => {
    const numbers = Service.random(resultLength);

    setRandomNumbers(numbers);
  };

  return (
    <div>
      <BaseLayout>
        <BaseCard
          title="Lucky Numbers"
          subtitle="How many lucky numbers do you want?"
        >
          <BaseInput value={resultLength} onInput={changeInput} />

          <BaseButton label="Get Numbers" click={drawNumbers} />

          <NumbersDisplay listNumbers={randomNumbers} />
        </BaseCard>
      </BaseLayout>
    </div>
  );
};

export default RandomNumbers;
