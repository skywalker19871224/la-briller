import { TitleBand } from "@/components/ui/TitleBand";
import { brandColumns, featureRows } from "@/content/comparison";

export const ComparisonTable = () => {
  return (
    <section className="bg-white" id="comparison">
      <TitleBand en="COMPARISON" ja="比較表" />

      <div className="section-py container mx-auto px-6 max-w-6xl">

        <div>
          <div className="overflow-hidden rounded-3xl border border-parfait-blue/20 bg-white shadow-[0_20px_50px_rgba(10,25,45,0.08)]">
            <div className="-mx-6 overflow-x-auto px-6">
              <table className="w-full min-w-[640px] whitespace-nowrap text-sm md:text-base table-auto">
                <thead>
                  <tr className="text-left">
                    <th className="sticky left-0 z-20 px-4 py-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500 border-b border-gray-200 bg-gray-50">
                      {/* empty corner */}
                    </th>
                    {brandColumns.map((brand) => (
                      <th
                        key={brand.key}
                        className={`px-4 py-3 font-bold text-sm tracking-wide ${brand.headerClass}`}
                      >
                        <span className="block text-lg">{brand.label}</span>
                        <span className="text-[11px] text-white/80 tracking-normal">{brand.tagline}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureRows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-gray-100 last:border-b-0 hover:bg-parfait-blue/5 transition-colors"
                    >
                      <td className="sticky left-0 z-10 px-4 py-4 text-sm font-semibold text-gray-700 bg-gray-100">
                        {row.label}
                      </td>
                      {brandColumns.map((brand) => (
                        <td key={brand.key} className={`px-4 py-4 text-sm ${brand.cellClass}`}>
                          {row[brand.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
