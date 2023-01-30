import React from "react";
import Script from "next/script";

export const AdSenseScript: React.FC = () => (
    <Script 
        async 
        id="Adsense-id"
        onError={(e) => console.error("Script failed to load", e)}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6804568378105440"
        crossOrigin="anonymous" 
    />
)


export const AdSenseUnit: React.FC = () => (
    <>
        {/* <!-- tech-blog-post --> */}
        <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-6804568378105440"
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
    <>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </>
)
