// src/component/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white   text-center py-4   shadow-inner">
      <div className="text-gray-900   text-sm">
        © {new Date().getFullYear()} Allzy. All rights reserved.
      </div>
    </footer>
  )
}
