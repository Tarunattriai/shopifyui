/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rGY8Bc8WyII
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Progress } from "../ui/progress"
import { SheetTrigger } from "../ui/sheet"

export default function Sidebar() {
  return (
    <div className="bg-white  rounded-lg shadow-lg max-w-md mx-auto p-0   ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Testing Details</h2>
        <SheetTrigger>
        <Button className="text-sm" variant="ghost">
          Close
        </Button>
        </SheetTrigger>

      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Transparent Labs Quality Standards</h3>
          <p className="text-sm mt-2">Clean Ingredients with Nothing to Hide.</p>
          <p className="text-sm mt-2">
            Transparent Labs is committed to using 100% authentic ingredients and full-disclosure product labels, so you
            know precisely what you're putting in your body. Every formula is critiqued and revised in accordance with
            feedback from independent scientific advisors to ensure proper efficiency.
          </p>
          <p className="text-sm mt-2 italic">Source: Nutritional Outlook</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Creatine Content</h3>
          <p className="text-sm mt-2">
            A study showed a
            <span className="font-bold mx-1 ">46% failure rate</span>
            for creatine gummy brands comparing claimed vs. actual amounts of the active ingredient in every serving.
            {"\n              "}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Heavy Metals Limits</h3>
          <p className="text-sm mt-2">What are heavy metals?</p>
          <p className="text-sm mt-2">
            Dense substances that can be toxic when absorbed by the body, potentially leading to serious health issues.
            Prolonged exposure can harm organs, affect neurological development, and weaken the immune system.
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Our results</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-xs">Arsenic</p>
                <Progress className="w-full" value={30} />
                <p className="text-xs">Cadmium</p>
                <Progress className="w-full" value={20} />
              </div>
              <div className="space-y-1">
                <p className="text-xs">Lead</p>
                <Progress className="w-full" value={25} />
                <p className="text-xs">Mercury</p>
                <Progress className="w-full" value={10} />
              </div>
            </div>
            <p className="text-sm mt-4">Substantially lower than the limits allowed by both the FDA and the EU.</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Lab Testing, Powered by Light Labs</h3>
          <p className="text-sm mt-2">
            Light Labs is a 3rd party, ISO 17025 certified laboratory with a mission of bringing transparency to our
            food system with modern lab testing.
          </p>
          <p className="text-sm mt-2">
            Across our food system, it has become incredibly difficult to understand product purity. Light Labs brings
            facts to the table with modern lab testing for every batch – the only way to truly understand product
            quality.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Detailed Lab Results</h3>
          <div className="flex justify-between">
            <Button className="w-1/2 mr-2">View COAs</Button>
            <Button className="w-1/2 ml-2">View COCs</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

