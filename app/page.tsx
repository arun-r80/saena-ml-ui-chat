"use client";
import HeaderBar, { SideBar } from "@/app/ui/containers";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-4">
      <HeaderBar />
      <div className="flex flex-col grow mt-2 w-full min-h-full">
        <SideBar />
      </div>
    </main>
  );
}
