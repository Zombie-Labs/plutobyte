
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
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">PlutoByte™</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-gray-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-600 transition-colors">Pricing</a>
            <a href="#games" className="hover:text-gray-600 transition-colors">Games</a>
            <a href="#testimonials" className="hover:text-gray-600 transition-colors">Reviews</a>
          </nav>
          <Button variant="outline" className="bg-white text-black border-black hover:bg-gray-100">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            VPS & Game Server
            <br />
            <span className="text-gray-600">Hosting Excellence</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Deploy powerful VPS instances and game servers in seconds. Experience unmatched performance with DDoS protection and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black border-2 border-black hover:bg-gray-100 px-8 py-3">
              Deploy VPS Now
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-black border-black hover:bg-gray-100 px-8 py-3">
              Browse Game Servers
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-600">Instant deployment • DDoS protection included • 99.9% uptime</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PlutoByte™?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade infrastructure optimized for VPS hosting and game servers with unbeatable performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-black">
                <CardHeader>
                  <div className="mx-auto mb-4 text-black">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">VPS & Game Server Plans</h2>
            <p className="text-xl text-gray-600">Choose the perfect server for your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-black' : 'border-gray-300'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-sm text-gray-500 uppercase tracking-wide">{plan.type}</div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black border-2 border-black hover:bg-gray-100'}`}
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
      <section id="games" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Supported Games</h2>
            <p className="text-xl text-gray-600">One-click installation for popular games</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            {gameSupport.map((game, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 hover:border-black transition-colors">
                <span className="text-gray-700 font-medium">{game}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Trusted by Gamers & Developers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-gray-600">Active Servers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt; 60s</div>
              <p className="text-gray-600">Deployment Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-600">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real feedback from gamers and developers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-black">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Deploy Your Server?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of satisfied customers today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
              Deploy VPS Server
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-black px-8 py-3">
              Start Game Server
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">Instant deployment • No setup fees • 99.9% uptime guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 border-t border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PlutoByte™</h3>
              <p className="text-gray-600">Professional VPS and game server hosting for gamers and developers worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>VPS Hosting</li>
                <li>Game Servers</li>
                <li>DDoS Protection</li>
                <li>Server Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Knowledge Base</li>
                <li>Game Tutorials</li>
                <li>Server Status</li>
                <li>Migration Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Email: support@plutobyte.com</li>
                <li>Discord: PlutoByte Community</li>
                <li>Live Chat: 24/7 Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 PlutoByte™. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
