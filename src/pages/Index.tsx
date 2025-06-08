
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Server, Shield, Zap, Gamepad2 } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Powerful VPS",
      description: "High-performance virtual private servers with root access and full control"
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Game Servers",
      description: "Optimized servers for Minecraft, CS2, Rust, and 100+ other games"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Setup",
      description: "Deploy your server in under 60 seconds with our automated platform"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "DDoS Protection",
      description: "Enterprise-grade DDoS protection included with all servers"
    }
  ];

  const plans = [
    {
      name: "VPS Starter",
      price: "$9.99",
      period: "/month",
      description: "Perfect for small projects and development",
      features: [
        "2 CPU Cores",
        "4GB RAM",
        "50GB SSD Storage",
        "1TB Bandwidth",
        "Root Access",
        "DDoS Protection",
        "99.9% Uptime",
        "24/7 Support"
      ],
      popular: false,
      type: "VPS"
    },
    {
      name: "Game Server Pro",
      price: "$19.99",
      period: "/month",
      description: "Ideal for gaming communities",
      features: [
        "4 CPU Cores",
        "8GB RAM",
        "100GB NVMe SSD",
        "Unlimited Bandwidth",
        "Game Panel Access",
        "Automated Backups",
        "Mod Support",
        "Discord Integration",
        "Priority Support"
      ],
      popular: true,
      type: "Game"
    },
    {
      name: "VPS Enterprise",
      price: "$39.99",
      period: "/month",
      description: "For high-demand applications",
      features: [
        "8 CPU Cores",
        "16GB RAM",
        "200GB NVMe SSD",
        "Unlimited Bandwidth",
        "Full Root Access",
        "Advanced Monitoring",
        "Load Balancer Ready",
        "Custom OS Images",
        "Dedicated Support",
        "99.99% SLA"
      ],
      popular: false,
      type: "VPS"
    }
  ];

  const gameSupport = [
    "Minecraft (Java & Bedrock)",
    "Counter-Strike 2",
    "Rust",
    "Valheim",
    "ARK: Survival Evolved",
    "Garry's Mod",
    "Team Fortress 2",
    "Terraria",
    "7 Days to Die",
    "And 100+ more games"
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "Gaming Community",
      quote: "PlutoByte™ VPS hosting is incredible. Our Minecraft server runs flawlessly with zero lag for 200+ players.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "Development Team",
      quote: "Migrated our applications to PlutoByte™ VPS. The performance boost was immediate and support is amazing.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      company: "Rust Server Owner",
      quote: "Best game server hosting I've used. Easy setup, great performance, and the DDoS protection actually works!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            PlutoByte™
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Pricing</a>
            <a href="#games" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Games</a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Reviews</a>
          </nav>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              VPS & Game Server
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hosting Excellence
            </span>
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-600 leading-relaxed">
            Deploy powerful VPS instances and game servers in seconds. Experience unmatched performance with DDoS protection and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 text-lg shadow-lg">
              Deploy VPS Now
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
              Browse Game Servers
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Instant deployment
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              DDoS protection included
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              99.9% uptime
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Why Choose PlutoByte™?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade infrastructure optimized for VPS hosting and game servers with unbeatable performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 text-slate-700 bg-slate-100 p-4 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-slate-900 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">VPS & Game Server Plans</h2>
            <p className="text-xl text-slate-600">Choose the perfect server for your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-white' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">{plan.type}</div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mt-2">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 text-lg">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 text-lg font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Deploy {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Games Section */}
      <section id="games" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Supported Games</h2>
            <p className="text-xl text-slate-600">One-click installation for popular games</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            {gameSupport.map((game, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <span className="text-slate-700 font-medium">{game}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20">Trusted by Gamers & Developers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10,000+</div>
              <p className="text-slate-300 text-lg">Active Servers</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">99.9%</div>
              <p className="text-slate-300 text-lg">Uptime Guarantee</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">&lt; 60s</div>
              <p className="text-slate-300 text-lg">Deployment Time</p>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">24/7</div>
              <p className="text-slate-300 text-lg">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">What Our Customers Say</h2>
            <p className="text-xl text-slate-600">Real feedback from gamers and developers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="pt-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-slate-900 text-lg">{testimonial.name}</div>
                    <div className="text-slate-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Deploy Your Server?</h2>
          <p className="text-xl mb-10 text-slate-200 max-w-2xl mx-auto">Join thousands of satisfied customers today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-medium shadow-lg">
              Deploy VPS Server
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium">
              Start Game Server
            </Button>
          </div>
          <p className="mt-6 text-slate-300">Instant deployment • No setup fees • 99.9% uptime guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">PlutoByte™</h3>
              <p className="text-slate-600 leading-relaxed">Professional VPS and game server hosting for gamers and developers worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-slate-900 text-lg">Services</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="hover:text-slate-900 transition-colors cursor-pointer">VPS Hosting</li>
                <li className="hover:text-slate-900 transition-colors cursor-pointer">Game Servers</li>
                <li className="hover:text-slate-900 transition-colors cursor-pointer">DDoS Protection</li>
                <li className="hover:text-slate-900 transition-colors cursor-pointer">Server Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-slate-900 text-lg">Support</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="hover:text-slate-900 transition-colors cursor-pointer">Knowledge Base</li>
                <li className="hover:text-slate-900 transition-colors cursor-pointer">Game Tutorials</li>
                <li className="hover:text-slate-900 transition-colors cursor-pointer">Server Status</li>
                <li className="hover:text-slate-900 transition-colors cursor-pointer">Migration Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-slate-900 text-lg">Contact</h4>
              <ul className="space-y-3 text-slate-600">
                <li>Email: support@plutobyte.com</li>
                <li>Discord: PlutoByte Community</li>
                <li>Live Chat: 24/7 Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-600">
            <p>&copy; 2024 PlutoByte™. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
