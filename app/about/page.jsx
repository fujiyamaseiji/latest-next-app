// // app/page.jsx
// export default function Page() {
//     return (
//         <div>
//             <h1>リセット完了！</h1>
//             <p>ここから .jsx で進められます。333344</p>
//         </div>
//     );
// }


// app/about/page.jsx
export const revalidate = 0; // 完全SSG（ビルド時に固定）

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        // cache: "force-cache", // 明示したいならこれでもOK（既定はSSG）
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}

import CounterClient from "../components/CounterClient";
import Statetest from "../components/Statetest";

export default async function AboutPage() {
    const users = await getUsers(); // ★ ここでSSG

    let realtt = 1;
    let tettt = 2;

    return (
        <main style={{ padding: 16 }}>
            <h1>SSG + useState サンプル</h1>

            <h2>（ビルド時に固定）ユーザー一覧</h2>
            {/* <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul> */}

            <hr />

            <CounterClient initialCount={0} users={users} />
            {/* ↑ クライアントでuseStateを使う。SSG結果をpropsで渡す */}

            <Statetest realtt={realtt} tettt={tettt} />
        </main>
    );
}