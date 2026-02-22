export default function SellFooter() {
  return (
    <>
      {/* Watermark */}
      <div className="relative bg-[#0a0a0a] overflow-hidden mt-8">
        <div className="invisible text-[20vw] font-black leading-none whitespace-nowrap select-none">
          ClearWater
        </div>
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none whitespace-nowrap">
          ClearWater
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F7F217] py-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black text-xs font-medium">
            © 2026 Clearwaters Media Group. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
