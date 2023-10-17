import Image from 'next/image'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './pages/Header/Header'
import Category from './pages/category/Category'

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Dashboard>
    <Header />
    <Category />
    </Dashboard>

    </main>
  )
}
