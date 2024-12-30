import Image from "next/image";

export const BorrowerCard = () => {
  return (
    <div className="border border-[#E7E7E7] rounded-lg shadow px-4 py-3">
      <div className="flex gap-2 items-center mb-6">
        <div>
          <Image src="/cardhand.svg" alt="Icon" width={24} height={24} />
        </div>
        <div>
          <p className="text-sm text-[#555555]">Total Borrowers</p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <h1 className="text-black font-bold text-4xl">15,000</h1>
        </div>
        <div className="bg-[#D9EFD9] flex gap-2 items-center py-1 px-4 rounded-xl">
          <div><Image src="/arrowgreen.svg" alt="Icon" width={12} height={12} /></div>
          <div>
            <p className="text-[#2EA52E] text-xs">2.5% this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};
