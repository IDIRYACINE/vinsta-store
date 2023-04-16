import Layout from "@/components/layout";
import ProtectedRoute from "@/modules/auth/ui/ProtectedRoute";


export default function Home() {

  const body = <Layout />

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProtectedRoute component={body}/>
        
    </main>
  )
}
