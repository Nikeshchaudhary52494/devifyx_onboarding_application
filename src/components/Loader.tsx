export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-500 rounded-full mb-4"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
