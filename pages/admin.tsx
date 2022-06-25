import dynamic from "next/dynamic";
import Script from "next/script";
import { useState } from "react";

const CMS = dynamic(
  // @ts-ignore
  () =>
    import("netlify-cms-app").then((cms: any) => {
      cms.init();
    }),
  { ssr: false, loading: () => <p>Loading Admin...</p> },
);

const Admin: React.FC = () => {
  const [renderCms, setRenderCms] = useState(false);

  return (
    <>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => {
          setRenderCms(true);
        }}
      />
      <Script
        id="netlify-identity"
        dangerouslySetInnerHTML={{
          __html: `
               if (typeof window !== "undefined" && window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `,
        }}
      />

      {renderCms && <CMS />}
    </>
  );
};
export default Admin;
