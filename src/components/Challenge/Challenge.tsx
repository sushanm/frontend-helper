import { useParams } from "react-router-dom";
import Counter from "../../pages/Counter";
import Header from "../Header/Header";

const reactChallenges = [<Counter />, <Counter />, <Counter />];

function Challenge() {
  const params = useParams();
  const level = params?.level ?? 0;
  console.log(level)
  return (
    <div className="container">
      <Header heading={params.name} />
      {reactChallenges[+level]}
    </div>
  );
}

export default Challenge;