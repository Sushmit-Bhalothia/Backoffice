function Page404() {
  return (
    <>
      <div className="hero min-h-screen bg-gray-800">
        <div className="text-center hero-content text-3xl font-bold">
          <div style={{ margin: "10vw" }}>
            <h1>The page is not found.</h1>
            <div className="mt-4">
              go to Dashboard
              <br />
              <a href="/" className="link-primary">
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
