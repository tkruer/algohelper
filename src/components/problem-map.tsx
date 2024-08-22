import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { api } from "~/utils/api";
import { type Problem } from "~/utils/constants/constants";
import ProgressBar from "./progress-bar";
import { ArrowRight } from "lucide-react";

export function ProblemMap() {
  const { data, isLoading, error } = api.layout.getProblemMap.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading problems</div>;
  if (!data) return <div>Error loading problems</div>;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.problems.map((problem: Problem) => (
        <Card key={problem.id} className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/3">
          <CardHeader>
            <CardTitle>
              {problem.id + 1}. {problem.name}</CardTitle>
            <CardDescription>{Math.random().toFixed()} / {problem.problemSets?.length ?? 0}</CardDescription>
          </CardHeader>
          <CardContent>
            <ProgressBar value={10} max={100} />
          </CardContent>
          <CardFooter>
            <a href={problem.path} className="text-blue-500">
              Problem Set
              <ArrowRight className="w-4 h-4 inline-block ml-1" />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
