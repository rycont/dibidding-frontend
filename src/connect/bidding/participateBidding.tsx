import { createAPIConnector } from "..";

export const participateBidding = createAPIConnector<
  {
    bidId: string;
  },
  { userRequestedPrice: number },
  {
    status: string;
    biddedPrice: number;
  }
>("participate/:bidId", {
  needAuth: true,
  method: "POST",
  mockHandler: () => ({
    status: "Mock Success!",
    biddedPrice: 1500,
  }),
});
