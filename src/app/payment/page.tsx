import Billing from "@/components/billing";
import PaymentMethod from "@/components/paymentMethod";
import RentalSummary from "../../components/rentalsummary";

export default function Payment() {
  return (
    <div className="max-w-6xl mx-auto p-3">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 w-full pt-7">
         <Billing />
         <RentalSummary />
          
        </div>
        <div className="w-full pt-4">
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}
