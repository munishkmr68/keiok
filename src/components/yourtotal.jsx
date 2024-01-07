import React from "react";

const YourTotal = () => {
  return (
    <div className="divide-y divide-dashed divide-gray">
      <h6 className="label pb-3">Your Total</h6>
      <div className="flex text-sm sm:text-base text-t4 justify-between py-3">
        <span>Subtotal</span>
        <span>$60.00</span>
      </div>
      <div className="flex text-t4 justify-between py-3">
        <span>Shipping</span>
        <span>$0.00</span>
      </div>
      <div className="flex text-t4 justify-between py-3">
        <span>Tax</span>
        <span>To be determined</span>
      </div>
      <div className="flex text-t4 justify-between py-3">
        <span className="text-blue text-base sm:text-lg font-medium">
          Your Total
        </span>
        <span className="text-blue text-base sm:text-lg font-medium">
          $60.00
        </span>
      </div>
    </div>
  );
};

export default YourTotal;
