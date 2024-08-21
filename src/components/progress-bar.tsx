import { api } from "~/utils/api";

import { Progress } from "~/components/ui/progress"

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
}

export default function ProgressBar({ value, max = 100, className = "" }: ProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), max)
  const percentage = (clampedValue / max) * 100

  return (
    <div className={`w-full max-w-md ${className}`}>
      <Progress value={percentage} className="w-full" />
      <p className="mt-2 text-sm text-muted-foreground text-center">
        {percentage.toFixed(0)}%
      </p>
    </div>
  )
}
