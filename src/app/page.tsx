'use client'
import { MessageSquare } from 'lucide-react';
import TopBar from '@/components/layout/topbar';
import Comments from '@/components/comments/comments';
import ProtectedPage from './protected-page';


const App: React.FC = () => {
  return (
    <ProtectedPage>
      <div className="min-h-screen bg-gray-50 font-inter">
        <TopBar />
        <div className="max-w-4xl mx-auto p-4 sm:p-6 pt-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <MessageSquare className="w-7 h-7 mr-3 text-indigo-600" />
            Discussion
          </h1>
          <Comments />
        </div>
      </div>
    </ProtectedPage>
  );
};

export default App;