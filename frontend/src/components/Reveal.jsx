import { useRef, useEffect } from "react";

export default function Reveal({ children, className = "", delay = 0, direction = "up" }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => el.classList.add("revealed"), delay);
                observer.unobserve(el);
            }
        }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);
    return <div ref={ref} className={`reveal reveal-${direction} ${className}`}>{children}</div>;
}
