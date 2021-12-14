import { Subheader, Vexile } from "@/component";
import { useNavigate } from "react-router-dom";
import { BiddingType } from "./partial";

const biddingTypePolicy = [
  {
    name: "나노",
    starting: 100,
    interval: 50,
  },
  {
    name: "미니",
    starting: 1000,
    interval: 500,
  },
  {
    name: "빅-사이즈",
    starting: 8000,
    interval: 2000,
  },
];

export const SelectBiddingType: React.FC = () => {
  const navigate = useNavigate();
  const selectBiddingPolicy = () => {
    navigate("/register/info");
  };
  return (
    <Vexile padding={3} filly y="center" gap={3}>
      <Subheader>어떻게 경매를 올릴까요?</Subheader>
      {biddingTypePolicy.map((policy) => (
        <BiddingType onClick={() => selectBiddingPolicy()} {...policy} />
      ))}
    </Vexile>
  );
};
