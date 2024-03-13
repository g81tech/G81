import { CommonPage } from './../../../components/CommonPage'
import LoadingSkeleton from '@/components/Loading/LoadingSkeleton'
export default function Loading() {
  return (
    <CommonPage>
      <LoadingSkeleton count={1} />
      <LoadingSkeleton width={100} height={100} />
      <LoadingSkeleton count={1} />
      <LoadingSkeleton width={100} height={100} />

      <LoadingSkeleton count={1} />
      <LoadingSkeleton count={1} />
    </CommonPage>
  )
}
