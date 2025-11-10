// app/components/CounterClient.jsx
"use client";

import { useMemo, useState } from "react";

export default function CounterClient({ initialCount = 0, users = [] }) {
    const [count, setCount] = useState(initialCount);
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        const key = q.trim().toLowerCase();
        if (!key) return users;
        return users.filter((u) => u.name.toLowerCase().includes(key));
    }, [q, users]);

    function handleCount(value) {
        console.log("渡されたcount:", value);
    }

    return (
        <section>
            <h2>（クライアント）インタラクション</h2>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button onClick={() => setCount((c) => c + 1)}>+1</button>
                <button onClick={() => setCount((c) => Math.max(0, c - 1))}>-1</button>
                {/* ✅ {count} を関数へ渡す */}
                <span>
                    count: {count}
                </span>
                <button onClick={() => handleCount(count)}>レジへ追加</button>
            </div>

            <div style={{ marginTop: 12 }}>
                <input
                    placeholder="名前でフィルタ…"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    style={{ padding: 8, width: 260 }}
                />
                <p style={{ marginTop: 6 }}>
                    件数: {filtered.length} / {users.length}
                </p>
                <ul>
                    {filtered.map((u) => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}