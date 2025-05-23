import InputForm  from "@/components/InputForm"
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold py-4">Remind Me Later</h1>
      <InputForm/>
    </div>
  );
}
