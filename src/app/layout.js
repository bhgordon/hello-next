import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  // Test to see if code is being generated on the browser
  console.log("You should not appear in the Browswer");

  return (
    <html lang="en">
      <body>
        {children}
        <footer>This page was served at {Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
