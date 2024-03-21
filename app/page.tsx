import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="w-[413px]">
      <Component />
    </div>
  );
}




 function Component() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[290px]"  >
      <h2 className=" font-extrabold">Test Results Certified by Light Labs</h2>
      <p className="mt-2 text-[10px] font-normal text-gray-600">
        Every batch is tested by Light Labs, ISO 17025 certified, to verify
        active ingredients and product purity.
      </p>
      <div className="mt-4 grid grid-cols-2 h-[28px] ">
        <Button   className="w-full h-[28px]   " variant="outline" >
          <span className="text-[10px]">What s in it?</span>
        </Button>
        <Button className="w-full h-[28px]  " variant="outline">
          <span className="text-[10px]">What s not in it?</span>
        </Button>
      </div>
      <div className="mt-2">
        <h3 className="text-[14px] font-bold">Creatine</h3>
        <div className="flex items-center justify-end">
          <span className="text-[8px] text-gray-500">Claim</span>
          <span className="text-[8px] text-gray-500 ml-7">Actual</span>
        </div>
        <div className="mt-1 h-6 w-full bg-gray-200 rounded">
          <div
            className="h-6 w-5/6 bg-green-300 rounded"
            style={{
              width: "83.333333%",
            }}
          />
        </div>
        <div className="flex w-full justify-between ">
          <span className="text-[8px] text-gray-500">0mg</span>

          <div className="mt-1 flex justify-end">
            <span className="text-[8px] text-gray-500">5mg</span>
            <span className="ml-7 text-[8px] font-medium">5.2mg</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="mt-6 flex items-center space-x-2">
          <div className="flex flex-col justify-center p-1.5 fill-white  ">
            <div className="shrink-0 w-2 h-2 bg-emerald-500 rounded-3xl" />
          </div>
          <span className="text-[10px] font-medium">Live Testing</span>
        </div>

        <Sheet>
          <SheetTrigger>
            <div className="text-[10px] mt-6 underline  ">
              View Testing Report
            </div>
          </SheetTrigger>
          <SheetContent>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
