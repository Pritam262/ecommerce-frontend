import Script from "next/script"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* Include shared UI here e.g. a header or sidebar */}


      {children}

    </>
  )
}