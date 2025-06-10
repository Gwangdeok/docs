"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-16 py-16 bg-gradient-to-b from-fd-background to-fd-background/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image
            src="/logo.png"
            alt="logo"
            width={256}
            height={256}
            className="rounded-full shadow-lg mb-8 p-6"
          />
        </motion.div>
        <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
          광덕방범대
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8">
          광덕 밸리를 다시 영광의 순간으로
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-fd-primary to-fd-primary/60 text-fd-primary-foreground shadow-lg hover:shadow-xl hover:bg-fd-primary/90 h-12 px-8 rounded-full"
            href="/docs"
          >
            자세히 알아보기
          </Link>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {[
          {
            title: "깊은 개발 지식 탐구",
            description:
              "프로그래밍의 핵심 개념부터 최신 기술까지, 깊이 있는 기술적 이해를 바탕으로 한 실질적인 개발 지식을 공유해요.",
          },
          {
            title: "자신의 개발 경험 공유",
            description:
              "실제 프로젝트에서의 성공과 실패 경험을 바탕으로 한 실전적인 개발 노하우와 문제 해결 방법을 공유해요.",
          },
          {
            title: "개발 트랜드 공유",
            description:
              "최신 개발 트렌드와 기술 동향을 분석하고, 미래 개발 방향성을 제시하여 개발자들의 성장을 도모해요.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8 rounded-xl border bg-fd-card hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
              {card.title}
            </h2>
            <p className="text-fd-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
