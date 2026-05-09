"use client";

const stars = [
    { top: "12%", right: "-10%", delay: "0s", duration: "7s" },
    { top: "28%", right: "-10%", delay: "3s", duration: "8s" },
    { top: "55%", right: "-10%", delay: "5s", duration: "6s" },
    { top: "70%", right: "-10%", delay: "8s", duration: "9s" },
    { top: "40%", right: "-10%", delay: "11s", duration: "7s" },
];

export default function ShootingStars() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {stars.map((s, i) => (
                <span
                    key={i}
                    className="shooting-star"
                    style={{
                        top: s.top,
                        right: s.right,
                        animationDelay: s.delay,
                        animationDuration: s.duration,
                    }}
                />
            ))}
        </div>
    );
}
