export default function Loading() {
  return (
    <div className="flex bg-gradient-to-bl from-bgBlue to-white dark:from-blue-900 dark:to-blue-gray-900 w-screen h-screen justify-center items-center">
      <div className="spinner dark:text-white">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
