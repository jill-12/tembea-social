import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  User, 
  MapPin, 
  Camera, 
  Video, 
  Heart, 
  MessageCircle, 
  Repeat2, 
  Share,
  Shield,
  Globe,
  Zap,
  Eye,
  Navigation,
  Volume2,
  AlertTriangle,
  Users,
  Calendar,
  Briefcase,
  ThumbsUp,
  Laugh,
  Plus,
  Play,
  Building
} from "lucide-react";

const TembeSocial = () => {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "explore", icon: Search, label: "Explore Kenya" },
    { id: "events", icon: Calendar, label: "Events" },
    { id: "groups", icon: Users, label: "Communities" },
    { id: "business", icon: Briefcase, label: "Business" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "messages", icon: Mail, label: "Messages" },
    { id: "safety", icon: Shield, label: "Safety Hub" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  const stories = [
    { id: 1, user: "Kenya Airways", avatar: "/api/placeholder/40/40", active: true },
    { id: 2, user: "Safari Lodge", avatar: "/api/placeholder/40/40", active: false },
    { id: 3, user: "Mount Kenya", avatar: "/api/placeholder/40/40", active: false },
    { id: 4, user: "Diani Beach", avatar: "/api/placeholder/40/40", active: true },
    { id: 5, user: "Maasai Village", avatar: "/api/placeholder/40/40", active: false },
  ];

  const posts = [
    {
      id: 1,
      type: "photo",
      user: {
        name: "Kenya Wildlife Service",
        handle: "@KWS_Official",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Experience the Great Migration in VR before your visit! 🦓🦌 Our new AR overlay shows real-time animal positions and historical migration patterns. #Tembea254 #SafariTech",
      timestamp: "2h",
      reactions: { likes: 245, loves: 67, laughs: 12 },
      retweets: 89,
      replies: 34,
      image: "/api/placeholder/400/300",
      features: ["VR", "AR"],
      location: "Maasai Mara"
    },
    {
      id: 2,
      type: "announcement",
      user: {
        name: "Magical Kenya",
        handle: "@MagicalKenya",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Safety first! 🚨 New SOS feature now live. One tap sends your GPS location to nearest ranger station. Available in Swahili, English & French. #SafetyFirst #Tembea254",
      timestamp: "4h",
      reactions: { likes: 412, loves: 89, laughs: 5 },
      retweets: 156,
      replies: 67,
      features: ["SOS", "GPS", "Multi-Language"],
      location: "Nationwide"
    },
    {
      id: 3,
      type: "event",
      user: {
        name: "Coast Tourism",
        handle: "@CoastKenya",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Join us for the Lamu Cultural Festival! 🎭 Experience traditional Swahili music, dance, and cuisine. AR tours of historical sites included!",
      timestamp: "6h",
      reactions: { likes: 189, loves: 45, laughs: 8 },
      retweets: 45,
      replies: 23,
      event: {
        title: "Lamu Cultural Festival",
        date: "Dec 15-17, 2024",
        location: "Lamu Island"
      },
      features: ["AR", "Cultural"],
      location: "Lamu Island"
    },
    {
      id: 4,
      type: "business",
      user: {
        name: "Safari Experts Kenya",
        handle: "@SafariExperts",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Looking for experienced tour guides in Amboseli! 📍 Must be fluent in English, Swahili, and German. AR/VR experience preferred. #TourismJobs #Tembea254",
      timestamp: "8h",
      reactions: { likes: 67, loves: 12, laughs: 2 },
      retweets: 23,
      replies: 15,
      features: ["Professional", "Hiring"],
      location: "Amboseli"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <h1 className="text-xl font-bold text-primary">Tembea254</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Globe className="w-4 h-4 mr-2" />
              EN
            </Button>
            <Button variant="ghost" size="sm">
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-card h-[calc(100vh-4rem)] sticky top-16">
          <nav className="p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            {/* Quick Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground">Quick Access</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="flex-col h-auto p-3">
                  <Eye className="w-4 h-4 mb-1" />
                  <span className="text-xs">VR Tours</span>
                </Button>
                <Button variant="outline" size="sm" className="flex-col h-auto p-3">
                  <Navigation className="w-4 h-4 mb-1" />
                  <span className="text-xs">AR Guide</span>
                </Button>
                <Button variant="outline" size="sm" className="flex-col h-auto p-3">
                  <Shield className="w-4 h-4 mb-1" />
                  <span className="text-xs">SOS</span>
                </Button>
                <Button variant="outline" size="sm" className="flex-col h-auto p-3">
                  <Volume2 className="w-4 h-4 mb-1" />
                  <span className="text-xs">Audio</span>
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-2xl">
          {/* Stories Section */}
          <Card className="border-b rounded-none">
            <div className="p-4">
              <h3 className="font-semibold mb-3">Stories</h3>
              <div className="flex space-x-3 overflow-x-auto">
                <div className="flex flex-col items-center space-y-1 min-w-16">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center cursor-pointer hover:bg-muted/50">
                    <Plus className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Add Story</span>
                </div>
                {stories.map((story) => (
                  <div key={story.id} className="flex flex-col items-center space-y-1 min-w-16 cursor-pointer">
                    <div className={`w-16 h-16 rounded-full p-0.5 ${story.active ? 'bg-gradient-to-r from-primary to-accent' : 'bg-muted'}`}>
                      <Avatar className="w-full h-full border-2 border-background">
                        <AvatarImage src={story.avatar} />
                        <AvatarFallback>{story.user[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-xs text-center max-w-16 truncate">{story.user}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Compose Tweet */}
          <Card className="border-b rounded-none">
            <div className="p-4">
              <div className="flex space-x-3">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input 
                    placeholder="Share your Kenya adventure..."
                    className="border-none text-lg placeholder:text-muted-foreground resize-none"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <Camera className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button size="sm">Post</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Posts Feed */}
          <div className="divide-y">
            {posts.map((post) => (
              <Card key={post.id} className="border-x-0 border-t-0 rounded-none">
                <div className="p-4">
                  <div className="flex space-x-3">
                    <Avatar>
                      <AvatarImage src={post.user.avatar} />
                      <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{post.user.name}</h3>
                        {post.user.verified && (
                          <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground text-xs">✓</span>
                          </div>
                        )}
                        <span className="text-muted-foreground">@{post.user.handle.slice(1)}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{post.timestamp}</span>
                      </div>
                      
                      <div className="mt-2">
                        <p className="text-foreground">{post.content}</p>
                        
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {post.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {post.location}
                          </Badge>
                        </div>
                        
                        {/* Image */}
                        {post.image && (
                          <div className="mt-3 rounded-lg overflow-hidden border">
                            <img 
                              src={post.image} 
                              alt="Post content"
                              className="w-full h-48 object-cover"
                            />
                          </div>
                        )}
                        
                         {/* Event Info */}
                         {post.event && (
                           <Card className="mt-3 p-3 bg-muted/30">
                             <div className="flex items-center space-x-2 mb-2">
                               <Calendar className="w-4 h-4 text-primary" />
                               <span className="font-medium text-sm">{post.event.title}</span>
                             </div>
                             <div className="text-sm text-muted-foreground">
                               <div>{post.event.date}</div>
                               <div className="flex items-center mt-1">
                                 <MapPin className="w-3 h-3 mr-1" />
                                 {post.event.location}
                               </div>
                             </div>
                           </Card>
                         )}
                         
                         {/* Engagement */}
                         <div className="flex items-center justify-between mt-4 max-w-md">
                           <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                             <MessageCircle className="w-4 h-4" />
                             <span className="text-sm">{post.replies}</span>
                           </Button>
                           
                           <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                             <Repeat2 className="w-4 h-4" />
                             <span className="text-sm">{post.retweets}</span>
                           </Button>
                           
                           {/* Multi-reaction buttons */}
                           <div className="flex items-center space-x-1">
                             <Button variant="ghost" size="sm" className="flex items-center space-x-1 p-1">
                               <Heart className="w-4 h-4 text-red-500" />
                               <span className="text-xs">{post.reactions.likes}</span>
                             </Button>
                             <Button variant="ghost" size="sm" className="flex items-center space-x-1 p-1">
                               <Heart className="w-4 h-4 text-red-600 fill-current" />
                               <span className="text-xs">{post.reactions.loves}</span>
                             </Button>
                             <Button variant="ghost" size="sm" className="flex items-center space-x-1 p-1">
                               <Laugh className="w-4 h-4 text-yellow-500" />
                               <span className="text-xs">{post.reactions.laughs}</span>
                             </Button>
                           </div>
                           
                           <Button variant="ghost" size="sm">
                             <Share className="w-4 h-4" />
                           </Button>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 p-4 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search destinations..." className="pl-10" />
          </div>

          {/* Trending in Kenya */}
          <Card className="mb-4">
            <div className="p-4">
              <h2 className="font-semibold mb-3">Trending in Kenya</h2>
              <div className="space-y-3">
                {[
                  { topic: "#MaasaiMara", posts: "12.5K posts" },
                  { topic: "#VRSafari", posts: "8.2K posts" },
                  { topic: "#MtKenya", posts: "5.1K posts" },
                  { topic: "#SafetyFirst", posts: "3.8K posts" },
                  { topic: "#ARTourism", posts: "2.4K posts" }
                ].map((trend, index) => (
                  <div key={index} className="cursor-pointer hover:bg-muted/50 p-2 rounded">
                    <div className="font-medium text-primary">{trend.topic}</div>
                    <div className="text-sm text-muted-foreground">{trend.posts}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="mb-4">
            <div className="p-4">
              <h2 className="font-semibold mb-3">Upcoming Events</h2>
              <div className="space-y-3">
                {[
                  { name: "Safari Photography Workshop", date: "Dec 10", location: "Nairobi" },
                  { name: "Coastal Culture Festival", date: "Dec 15", location: "Mombasa" },
                  { name: "Mountain Hiking Challenge", date: "Dec 20", location: "Mt. Kenya" }
                ].map((event, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="font-medium text-sm">{event.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center mt-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.date} • {event.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Tourism Groups */}
          <Card className="mb-4">
            <div className="p-4">
              <h2 className="font-semibold mb-3">Join Communities</h2>
              <div className="space-y-3">
                {[
                  { name: "Safari Enthusiasts", members: "12.5K", topic: "Wildlife & Photography" },
                  { name: "Coastal Adventures", members: "8.2K", topic: "Beach & Marine Life" },
                  { name: "Cultural Heritage", members: "5.1K", topic: "History & Traditions" }
                ].map((group, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{group.name}</div>
                        <div className="text-xs text-muted-foreground">{group.members} members</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Who to follow */}
          <Card>
            <div className="p-4">
              <h2 className="font-semibold mb-3">Recommended Accounts</h2>
              <div className="space-y-3">
                {[
                  { name: "Visit Mombasa", handle: "visitmombasa", verified: true },
                  { name: "Nakuru County", handle: "nakurucounty", verified: true },
                  { name: "Kenya Airways", handle: "kenyaairways", verified: true }
                ].map((account, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/api/placeholder/32/32" />
                        <AvatarFallback>{account.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-medium text-sm">{account.name}</span>
                          {account.verified && (
                            <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-primary-foreground text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">@{account.handle}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default TembeSocial;