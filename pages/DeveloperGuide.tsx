import React from 'react';
import { NavLink, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { devGuideTopics } from '../data/devGuideData';

const TopicContent: React.FC = () => {
    const { topicSlug } = useParams<{ topicSlug: string }>();
    const topic = devGuideTopics.find(t => t.slug === topicSlug);

    if (!topic) {
        return (
            <div>
                <h2 className="text-2xl font-bold">Tópico não encontrado</h2>
                <p>Por favor, selecione um tópico do menu.</p>
            </div>
        );
    }

    return <article>{topic.content}</article>;
};

const DeveloperGuide: React.FC = () => {
  const baseLinkClass = "block w-full text-left p-3 rounded-lg transition-colors duration-200 text-slate-700 dark:text-slate-300";
  const inactiveLinkClass = "hover:bg-slate-200/50 dark:hover:bg-slate-800/50";
  const activeLinkClass = "bg-slate-200 dark:bg-slate-700 text-orange-600 dark:text-orange-400 font-semibold border-l-4 border-orange-500";

  return (
    <main className="container mx-auto px-4 py-12 md:px-8 flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
        <nav>
          <ul className="space-y-1">
            {devGuideTopics.map(topic => (
              <li key={topic.slug}>
                <NavLink
                  to={topic.slug}
                  className={({ isActive }) => 
                    `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  {topic.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section className="w-full md:w-3/4 lg:w-4/5 md:pl-8">
        <div className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700/50">
            <Routes>
                <Route path=":topicSlug" element={<TopicContent />} />
                <Route index element={<Navigate to={devGuideTopics[0].slug} replace />} />
            </Routes>
        </div>
      </section>
    </main>
  );
};

export default DeveloperGuide;
