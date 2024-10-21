import React, { useState } from 'react';
import { MessageSquare, Users, Bookmark, TrendingUp, ThumbsUp, Share2, Filter, Search } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  title: string;
  excerpt: string;
  likes: number;
  comments: number;
  tags: string[];
  image?: string;
}

const CommunityPost: React.FC<Post> = ({ author, title, excerpt, likes, comments, tags, image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 transition-all duration-300 hover:shadow-lg">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />}
      <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="font-medium text-blue-600">Dr. {author}</span>
        <div className="flex space-x-4">
          <button 
            className={`flex items-center ${liked ? 'text-blue-600' : ''}`}
            onClick={() => setLiked(!liked)}
          >
            <ThumbsUp className="h-4 w-4 mr-1" /> {liked ? likes + 1 : likes}
          </button>
          <span className="flex items-center"><MessageSquare className="h-4 w-4 mr-1" /> {comments}</span>
          <button className="flex items-center">
            <Share2 className="h-4 w-4 mr-1" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

const Community: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const posts: Post[] = [
    { id: 1, author: "Priya Sharma", title: "Advancements in Telemedicine in Rural India", excerpt: "Discussing the impact of AI and 5G on remote patient care in rural areas of India...", likes: 145, comments: 32, tags: ["Telemedicine", "Rural Healthcare", "AI"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 2, author: "Rajesh Kumar", title: "Ayurveda and Modern Medicine: A Synergistic Approach", excerpt: "Exploring how traditional Ayurvedic practices can complement modern medical treatments...", likes: 98, comments: 25, tags: ["Ayurveda", "Integrative Medicine"] },
    { id: 3, author: "Ananya Desai", title: "Mental Health Awareness in Indian Healthcare", excerpt: "Addressing the growing need for mental health support and reducing stigma in India...", likes: 210, comments: 45, tags: ["Mental Health", "Awareness"], image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 4, author: "Vikram Singh", title: "Innovations in Affordable Medical Devices", excerpt: "Showcasing recent innovations in low-cost medical devices made in India...", likes: 87, comments: 18, tags: ["Medical Devices", "Innovation", "Affordable Healthcare"] },
    { id: 5, author: "Meera Patel", title: "Combating Diabetes: A Public Health Approach", excerpt: "Strategies for diabetes prevention and management in the Indian context...", likes: 132, comments: 28, tags: ["Diabetes", "Public Health"] },
    { id: 6, author: "Arjun Reddy", title: "The Rise of Medical Tourism in India", excerpt: "Analyzing the growth and impact of medical tourism on Indian healthcare...", likes: 76, comments: 22, tags: ["Medical Tourism", "Healthcare Economics"] },
    { id: 7, author: "Sanya Malhotra", title: "Women's Health: Challenges and Solutions", excerpt: "Addressing key issues in women's health across different regions of India...", likes: 189, comments: 41, tags: ["Women's Health", "Gender Equality"], image: "https://images.unsplash.com/photo-1547489401-fcada4966052?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 8, author: "Karthik Nair", title: "Emerging Infectious Diseases: Preparedness and Response", excerpt: "Lessons learned from recent outbreaks and strategies for future pandemic preparedness...", likes: 112, comments: 30, tags: ["Infectious Diseases", "Pandemic Preparedness"] },
    { id: 9, author: "Neha Gupta", title: "Artificial Intelligence in Indian Healthcare", excerpt: "Exploring AI applications in diagnosis, treatment, and healthcare management...", likes: 156, comments: 35, tags: ["AI", "Healthcare Technology"] },
    { id: 10, author: "Rahul Mehta", title: "Traditional Medicine Integration in Modern Healthcare", excerpt: "Case studies on successful integration of traditional Indian medicine in hospitals...", likes: 94, comments: 27, tags: ["Traditional Medicine", "Integrative Healthcare"] },
  ];

  const filteredPosts = posts.filter(post => {
    if (filter !== 'all' && !post.tags.includes(filter)) return false;
    if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div id="community" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Professional Community</h2>
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Filter className="h-5 w-5 text-blue-600" />
            <select 
              className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Topics</option>
              <option value="Telemedicine">Telemedicine</option>
              <option value="Rural Healthcare">Rural Healthcare</option>
              <option value="AI">AI</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Ayurveda">Ayurveda</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="bg-white border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            {filteredPosts.map((post) => (
              <CommunityPost key={post.id} {...post} />
            ))}
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Trending Topics</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-blue-600" /> COVID-19 Variants</li>
                <li className="flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-blue-600" /> Telemedicine Adoption</li>
                <li className="flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-blue-600" /> Mental Health in Pandemic</li>
                <li className="flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-blue-600" /> Ayurveda for Immunity</li>
                <li className="flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-blue-600" /> AI in Diagnostics</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Upcoming Events</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Bookmark className="h-4 w-4 mr-2 text-blue-600" /> Indian Medical Association Annual Conference</li>
                <li className="flex items-center"><Bookmark className="h-4 w-4 mr-2 text-blue-600" /> Webinar: Future of Healthcare in India</li>
                <li className="flex items-center"><Bookmark className="h-4 w-4 mr-2 text-blue-600" /> Workshop: Integrating AI in Clinical Practice</li>
                <li className="flex items-center"><Bookmark className="h-4 w-4 mr-2 text-blue-600" /> Ayurveda and Modern Medicine Symposium</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Community Stats</h3>
              <div className="flex justify-between items-center mb-2">
                <span>Total Members:</span>
                <span className="font-bold">15,234</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Active Discussions:</span>
                <span className="font-bold">387</span>
              </div>
              <div className="flex justify-between items-center">
                <span>New Posts Today:</span>
                <span className="font-bold">42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;