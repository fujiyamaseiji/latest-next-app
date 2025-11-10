"use client";

export default function Statetest({ realtt, tettt }) {
    console.log({ realtt }); // ← 1だけ出したいならこっち
    console.log(tettt);  // ← 同様に値だけ

    return (
        <section>
            <div>{realtt}</div>
            <div>{tettt}</div>
        </section>
    );
}