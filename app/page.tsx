import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-lg"></div>
              <Image
                src="/avatar.jpg"
                alt="Zhihai Tu"
                width={200}
                height={200}
                className="relative rounded-full border-4 border-white shadow-2xl dark:border-slate-800"
                priority
              />
            </div>

            {/* Title & Intro */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Zhihai Tu
              </h1>
              <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
                屠志海
              </p>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                AI Research & Development Manager | AI Agent Architect
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/zhihai-tu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-slate-700 hover:scale-105 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:zhihai.tu@gmail.com"
                className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:scale-105 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16a1 1 0 01.8 1.6l-8 10a1 1 0 01-1.6 0l-8-10A1 1 0 014 6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l8 5 8-5" />
                </svg>
                Email: zhihai.tu@gmail.com
              </a>
              <a
                href="https://github.com/zhihai-tu"
                className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                WeChat: tuzhihai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-800 sm:p-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                金融科技行业资深从业者，拥有 <strong className="text-slate-900 dark:text-white">15 年系统开发和管理经验</strong>。
              </p>
              <p>
                现任某大型金融机构 IT 部门 <strong className="text-slate-900 dark:text-white">AI 研发经理</strong>，专注于 AI 智能体、AI 编程工具与业务数字化运营的研发与落地。
              </p>
              <p>
                主导多项 AI 应用体系建设，带领团队 <strong className="text-slate-900 dark:text-white">40 人以上</strong>。
              </p>
              <p>
                同时深耕 AI 普及与技术培训，担任 <strong className="text-slate-900 dark:text-white">AI 智能体培训导师</strong>，多次在内外部分享 AI 应用方法论与实践经验。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
            Core Competencies
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Skill Card 1 */}
            <div className="group rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:from-blue-950 dark:to-blue-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                AI Agent Architecture
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                精通 AI 智能体工作流设计、业务场景拆解、Prompt 架构、RAG/Agent 系统设计
              </p>
            </div>

            {/* Skill Card 2 */}
            <div className="group rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:from-purple-950 dark:to-purple-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                Dual-Stack Expertise
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                擅长业务与技术双栈能力融合，从业务流程、数据体系、AI 技术架构三维重构业务效率
              </p>
            </div>

            {/* Skill Card 3 */}
            <div className="group rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:from-green-950 dark:to-green-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                AI Product Implementation
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                丰富的 AI 产品落地经验，熟悉金融业务数字化运营工作
              </p>
            </div>

            {/* Skill Card 4 */}
            <div className="group rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:from-orange-950 dark:to-orange-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white shadow-lg">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                Team Leadership
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                带领 40+ 人团队，主导多项 AI 应用体系建设与企业级 AI 培训
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
                <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  AI 智能体应用师
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  工信部认证
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900">
                <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  信息系统高级项目管理师
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  工信部认证
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8 dark:border-slate-800">
        <div className="mx-auto max-w-4xl text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© 2024 Zhihai Tu. All rights reserved.</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
