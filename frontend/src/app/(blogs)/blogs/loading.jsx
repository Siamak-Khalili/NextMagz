import Spinner from "@/ui/spinner";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-lg text-secondary-500 ">
        درحال بارگذاری اطلاعات
      </span>
      <Spinner />
    </div>
  );
}
export default Loading;
