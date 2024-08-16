import ShineBorder from "@/components/magicui/shine-border";
import WeatherContainer from './WeatherContainer';

export default function ShineBorderDemo() {
  return (
    <center>
    <ShineBorder
      className="flex h-[500px] w-9/12 flex-col items-center m-10 justify-center rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <WeatherContainer/>
    </ShineBorder>
    </center>
  );
}
