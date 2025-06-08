
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Server, Shield, Zap, Clock, Globe, Users, HeadphonesIcon } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "99.9% Uptime",
      description: "Enterprise-grade infrastructure ensuring your website stays online"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "SSL certificates, DDoS protection, and daily backups included"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "SSD storage and global CDN for optimal performance"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Expert technical support available around the clock"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$4.99",
      period: "/month",
      description: "Perfect for personal websites and blogs",
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "24/7 Support",
        "99.9% Uptime"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9.99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited Websites",
        "50GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Priority Support",
        "Free Domain",
        "Email Hosting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19.99",
      period: "/month",
      description: "For high-traffic websites",
      features: [
        "Unlimited Websites",
        "200GB SSD Storage",
        "Unlimited Bandwidth",
        "Advanced SSL",
        "Hourly Backups",
        "Dedicated Support",
        "Free Domain",
        "Advanced Email",
        "CDN Included",
        "DDoS Protection"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote: "PlutoByte™ has been hosting our website for 2 years. The uptime is exceptional and support is always helpful.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Creative Studios",
      quote: "Migrated from another host and couldn't be happier. Fast loading times and great value for money.",
      rating: 5
    },
    {
      name: "Emma Davis",
      company: "Online Store",
      quote: "Their e-commerce hosting solutions helped us scale our business. Highly recommended!",
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
            <a href="#testimonials" className="hover:text-gray-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
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
            Professional Web Hosting
            <br />
            <span className="text-gray-600">You Can Trust</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Experience lightning-fast performance, 99.9% uptime, and world-class support with PlutoByte™ hosting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black border-2 border-black hover:bg-gray-100 px-8 py-3">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-black border-black hover:bg-gray-100 px-8 py-3">
              View Plans
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-600">30-day money-back guarantee • No setup fees</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PlutoByte™?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide enterprise-grade hosting solutions with the reliability and performance your business deserves.
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
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
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
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Trusted by Thousands</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-gray-600">Websites Hosted</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-600">Expert Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5 Years</div>
              <p className="text-gray-600">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real customers</p>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of satisfied customers today</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
            Start Your Free Trial
          </Button>
          <p className="mt-4 text-sm text-gray-400">No credit card required • 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-50 py-16 border-t border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PlutoByte™</h3>
              <p className="text-gray-600">Professional web hosting solutions for businesses of all sizes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Web Hosting</li>
                <li>Domain Names</li>
                <li>SSL Certificates</li>
                <li>Email Hosting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Knowledge Base</li>
                <li>Contact Support</li>
                <li>Server Status</li>
                <li>Migration Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Email: support@plutobyte.com</li>
                <li>Phone: 1-800-PLUTOBYTE</li>
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
