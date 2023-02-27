import { useLottie } from "lottie-react";
import Page404 from "../public/assets/404.json";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }, []);

  const options = {
    loop: true,
    autoplay: true,
    animationData: Page404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(options);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="myFont">
        404 - Page Not Found. You will be redirected to the home page in 5
        seconds
      </p>
      <>{View}</>
    </div>
  );
}
