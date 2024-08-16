import ShineBorder from "@/components/magicui/shine-border";
import WeatherContainer from './WeatherContainer';

export default function ShineBorderDemo() {
  return (
    <div className="flex justify-center items-center p-4">
      <ShineBorder
        className="flex flex-col items-center p-6 rounded-lg border bg-background shadow-md sm:w-full md:w-3/4 lg:w-9/12 xl:w-9/12 xl:h-[550px] lg:h-[550px] md:h-[500px] sm:h-max max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <WeatherContainer />
      </ShineBorder>
    </div>
  );
}
