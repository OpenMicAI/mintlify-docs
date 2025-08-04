import { OpenmicApiClient } from "./typescript/Client";

const api = new OpenmicApiClient({
  token: "1234567890",
});

await api.calls.createPhoneCall({
  from_number: "+1234567890",
  to_number: "+1234567890",
});