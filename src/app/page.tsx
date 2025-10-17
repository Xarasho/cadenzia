import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button variant={"outline"}>
        Click me!
      </Button>
    </div>
  );
};

export default Page;

// import { cn } from "@/lib/utils";
// const something = true;
// <div className={cn(
//   "text-red-500 font-extrabold",
//   something === true && "text-green-500",
// )}>