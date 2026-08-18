import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPrivacyPolicy } from "@/lib/legal";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const policy = await getPrivacyPolicy();
  const og = resolveOg(
    { ogTitle: policy.ogTitle, ogDescription: policy.ogDescription, ogImage: policy.ogImage },
    { title: policy.metaTitle, description: policy.metaDescription }
  );
  return {
    title: policy.metaTitle,
    description: policy.metaDescription,
    alternates: { canonical: resolveCanonical("/privacy-policy", policy.canonicalUrl) },
    robots: resolveRobots(policy.noIndex, policy.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/privacy-policy", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function PrivacyPolicyPage() {
  const policy = await getPrivacyPolicy();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="font-display text-3xl font-bold text-charcoal-800 sm:text-4xl">{policy.title}</h1>
        {policy.lastUpdated && (
          <p className="mt-2 text-sm text-sage-600">{policy.lastUpdatedLabel}{policy.lastUpdated}</p>
        )}

        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-charcoal-700">
          {policy.content.map((block, i) => (
            <div key={i}>
              {block.type === "heading" && (
                <h2 className="font-display text-xl font-semibold text-charcoal-800">{block.text}</h2>
              )}
              {block.type === "paragraph" && (
                <div className="rich-content max-w-none" dangerouslySetInnerHTML={{ __html: block.text || "" }} />
              )}
              {block.type === "list" && (
                <ul className="list-disc space-y-2 pl-5">
                  {(block.items || []).map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {policy.content.length === 0 && (
            <p className="text-sage-600">{policy.emptyStateText}</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
