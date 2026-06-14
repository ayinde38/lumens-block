import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">LumensBlock</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">
        Build and deploy Stellar smart contracts visually — no code required.
      </p>
      <Link
        href="/editor"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Editor
      </Link>
    </main>
  )
}
