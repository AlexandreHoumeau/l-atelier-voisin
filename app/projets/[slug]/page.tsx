import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProjetsSection() {
    // const router = useRouter()
    // ... (autres states et logiques)

    const handleClick = (slug: string) => {
        // petit délai pour laisser le voile descendre
        // setTimeout(() => router.push(`/projets/${slug}`), 400)
    }

    return (
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            {/* ... */}
            <div>Hello world</div>
            {/* <motion.div ref={scrollerRef} className="flex gap-8" animate={controls}>
                {[...projets, ...projets].map((proj, i) => (
                    <motion.div
                        key={i}
                        className="relative w-[40vw] md:w-[30vw] h-[66vh] bg-black rounded-2xl flex-shrink-0 cursor-none"
                        onClick={() => handleClick(proj.title.toLowerCase().replace(/\s+/g, '-'))}
                        whileTap={{ scale: 0.97 }}
                    />
                ))}
            </motion.div> */}
            {/* ... tooltip et curseur */}
        </section>
    )
}
