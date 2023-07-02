import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className=" ">
      <Skeleton className="w-30 h-10 rounded-lg bg-gray-700" />
      <div className="grid gap-4 py-4 lg:grid-cols-5">
        <Skeleton className="col-span-1 flex h-10 w-full justify-between rounded-lg border bg-gray-700 p-4 lg:col-span-2" />
        <Skeleton className="col-span-1 flex h-10 w-full justify-between rounded-lg border bg-gray-700 p-4 lg:col-span-2" />
        <Skeleton className="col-span-1 flex h-10 w-full justify-between rounded-lg border bg-gray-700 p-4 lg:col-span-2" />
      </div>
      <div className="z-20 grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        <Skeleton className="relative m-auto h-[50vh] w-full rounded-lg border bg-gray-700 p-4 md:col-span-2 lg:h-[70vh]"></Skeleton>
        {/* <div className="relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[70vh]">
          <h1>Recent Orders</h1>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="my-3 flex cursor-pointer items-center rounded-lg bg-gray-50 p-2 hover:bg-gray-100"
              >
                <div className="rounded-lg bg-purple-100 p-3">
                  <ShoppingBag className="text-purple-800" />
                </div>
                <div className="pl-4">
                  <p className="font-bold text-gray-800">${order.total}</p>
                  <p className="text-sm text-gray-400">{order.name.first}</p>
                </div>
                <p className="absolute right-6 text-sm md:hidden lg:flex">
                  {order.date}
                </p>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}
