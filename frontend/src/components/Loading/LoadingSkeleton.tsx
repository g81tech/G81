import Skeleton, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function LoadingSkeleton({
  count = 1,
  circle = false,
  width,
  height,
}: SkeletonProps) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton width={width} height={height} count={count} circle={circle} />
    </SkeletonTheme>
  )
}
