/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nbJGWjpH0Fw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <header className="w-full bg-[#30363d] py-6 px-6 md:px-8 lg:px-10">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-[#693CA5]">Geo-Snap</h1>
          <span className="text-white font-medium text-lg">
            Captura momentos inolvidables.
          </span>
        </div>
        <Button
          variant="default"
          className="bg-[#693CA5] text-white hover:bg-[#5a3088] focus:outline-none focus:ring-2 focus:ring-[#693CA5] focus:ring-opacity-50 mt-4 sm:mt-0 px-6 py-3"
        >
          Empezar
        </Button>
      </div>
    </header>
  )
}