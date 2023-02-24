import React from "react";
// import Script from "next/script";

export const GAD_CA_PUB = process.env.NEXT_PUBLIC_GAD_CA_PUB

export const AdSenseScript: React.FC = () => (
    <script 
        async
        // id="Adsense-id"
        onError={(e) => console.error("Script failed to load", e)}
        // strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GAD_CA_PUB}`}
        crossOrigin="anonymous" 
    />
)


export const AdSenseUnit: React.FC = () => (
    <>
        {/* <!-- tech-blog-post --> */}
        <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={GAD_CA_PUB}
            data-ad-slot="8558872051"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        {/* <script>
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script> */}
    </>
)

// <Script
//     id='AdUnitScript'
//     dangerouslySetInnerHTML={{__html: `
//         (adsbygoogle = window.adsbygoogle || []).push({
//             google_ad_client: "ca-pub-your-client-id",
//             enable_page_level_ads: true
//         });
//     `}}
// />
export const AdSenseUnitScript: React.FC = () => (
    <script
        dangerouslySetInnerHTML={{
            __html: `
                (adsbygoogle = window.adsbygoogle || []).push({});
            `
        }}
    />
)
