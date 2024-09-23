import DemoPage from '@/components/partners'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/dashboard')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: Dashboard,
})

function Dashboard() {
  return (
    <>
      <DemoPage/>
    </>
  )
}
