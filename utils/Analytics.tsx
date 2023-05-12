import Head from "next/head";

export default function Analytics() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-10BMJ9GXM3');
            `,
          }}
        />
      </Head>
    </>
  );
}
