// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Next-React Starter",
  description: "Seijiのリセット版",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
          <strong>Next-React</strong>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
        <footer style={{ padding: "12px 16px", borderTop: "1px solid #eee" }}>
          © {new Date().getFullYear()} Seiji
        </footer>
      </body>
    </html>
  );
}