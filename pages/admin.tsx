import dynamic from "next/dynamic";
import Script from "next/script";

const CMS = dynamic(
  // @ts-ignore
  () =>
    import("netlify-cms-app").then((cms) => {
      // @ts-ignore
      cms.init();
    }),
  { ssr: false, loading: () => <p>Loading Admin...</p> },
);

const Admin: React.FC = () => {
  return (
    <>
      <CMS />
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
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
    </>
  );
};
export default Admin;
