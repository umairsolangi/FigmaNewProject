"use client";

import { useState } from "react";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <span className="text-xl font-bold">car trackers</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#hero" className="hover:text-orange-500 transition-colors">Sell your car</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Apply for a new Car</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Deal my Offer</a>
            <a href="#" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Kelley Blue Book</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Media</a>
          </nav>

          <div className="flex space-x-4">
            <a href="#hero" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">
              Get Offer
            </a>
            <a href="#footer" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                THE NEW WAY TO SELL<br />
                YOUR CAR
              </h1>
              <p className="text-xl mb-8 opacity-90">
                So you can sell your vehicle today!
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-black">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Your Offer</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Make / Model"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="VIN"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Choose Year</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏷️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Instant Offer</h3>
              <p className="text-gray-600">
                Submit your vehicle info. It only takes 7 minutes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📹</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">10 Minute Video Appraisal</h3>
              <p className="text-gray-600">
                We&apos;ll appraise your vehicle over a live video call with your smartphone.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Paid</h3>
              <p className="text-gray-600">
                Get paid instantly when we pick up the vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Minute Video Appraisal Section */}
      <section id="video-appraisal" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-2xl">👍</span>
                      </div>
                      <p className="text-sm text-gray-600">Video Call</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-2xl">🚗</span>
                      </div>
                      <p className="text-sm text-gray-600">Car Inspection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                10 Minute Video Appraisal
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Never Leave Your Home</h4>
                    <p className="text-gray-600">
                      Get a quick and accurate appraisal for your vehicle through a simple video call from the comfort of your home.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Final Offer</h4>
                    <p className="text-gray-600">
                      Representing a dealership to dealership, Car Trackers gives you a final offer instantly after we review your car via a video call. If you don&apos;t get any better!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              WE UNDERSTAND HOW BUSY YOU ARE.
            </h2>
            <p className="text-xl opacity-90">
              That&apos;s why we&apos;ve made selling your car as simple and convenient as possible.
            </p>
          </div>
        </div>
      </section>

      {/* How to Get Paid Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                HOW TO GET<br />
                PAID
              </h2>
              <p className="text-xl mb-8 opacity-90">
                We make it easy to get paid quickly and securely for your vehicle.
              </p>
              <a href="#hero" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
                Get Quote
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white text-black p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🏦</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Same Day Wire Transfer</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Instant delivery</li>
                  <li>• Direct Bank transfer</li>
                </ul>
              </div>
              
              <div className="bg-white text-black p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🔄</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Next Business Day ACH</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Business Day</li>
                  <li>• Direct Bank Transfer</li>
                </ul>
              </div>
              
              <div className="bg-white text-black p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">💳</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Company Check</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Ships overnight</li>
                  <li>• Certified Business check</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-lg">5.0 stars on Yelp! Customers satisfied with our services. <a href="#hero" className="text-orange-500 underline">Get Quote</a></p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What our customers are<br />
              saying about us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;The whole process was incredibly smooth. I got a fair offer and they picked up my car the same day. Highly recommended!&rdquo;
              </p>
              <div className="font-semibold">
                <p className="text-gray-900">John S.</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;I was skeptical at first, but the offer was better than what I expected from the dealership. Fast and professional service.&rdquo;
              </p>
              <div className="font-semibold">
                <p className="text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;No haggling, no hassle. Just a straightforward process and quick payment. Will definitely use again!&rdquo;
              </p>
              <div className="font-semibold">
                <p className="text-gray-900">Mike R.</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1,566+</span>
              </div>
              <p className="text-xl font-semibold">Car Trackers</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">25+</span>
              </div>
              <p className="text-xl font-semibold">Years Experience</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">125+</span>
              </div>
              <p className="text-xl font-semibold">Car Selling Awards</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">180+</span>
              </div>
              <p className="text-xl font-semibold">Season Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">OUR PARTNERS & SUPPORTS</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <span className="font-bold text-lg text-black">Pertamina</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <span className="font-bold text-lg text-black">Kyocera</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <span className="font-bold text-lg text-black">Turbologo</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <span className="font-bold text-lg text-black">Turkcell</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <span className="font-bold text-lg text-black">Blender</span>
            </div>
          </div>
        </div>
      </section>

      {/* Car Models Section */}
      <section className="py-16 bg-gray-900 text-white relative">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">We buy all years, makes, & models</h2>
            <p className="text-xl opacity-90">From luxury vehicles to everyday cars, we purchase them all</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <span className="font-bold text-lg text-black">AUDI</span>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <span className="font-bold text-lg text-black">JAGUAR</span>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <span className="font-bold text-lg text-black">VOLKSWAGEN</span>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <span className="font-bold text-lg text-black">ACURA</span>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <span className="font-bold text-lg text-black">HONDA</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about selling your car with us</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="bg-gray-50 px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(0)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-gray-900">How quickly can I get paid?</h4>
                  <span className={`text-2xl text-orange-500 font-bold transition-transform duration-300 ${openFAQ === 0 ? 'rotate-45' : ''}`}>
                    {openFAQ === 0 ? '×' : '+'}
                  </span>
                </div>
              </div>
              {openFAQ === 0 && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    You can get paid as quickly as the same day! We offer same-day wire transfers, next business day ACH transfers, or overnight company checks. The payment method you choose will determine the exact timing.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="bg-gray-50 px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(1)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-gray-900">Do I need to drive my car anywhere?</h4>
                  <span className={`text-2xl text-orange-500 font-bold transition-transform duration-300 ${openFAQ === 1 ? 'rotate-45' : ''}`}>
                    {openFAQ === 1 ? '×' : '+'}
                  </span>
                </div>
              </div>
              {openFAQ === 1 && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    No! That&apos;s the beauty of our service. We come to you! After the video appraisal, we&apos;ll schedule a convenient pickup time and location. You never have to leave your home or drive anywhere.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="bg-gray-50 px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(2)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-gray-900">How does the video appraisal process work?</h4>
                  <span className={`text-2xl text-orange-500 font-bold transition-transform duration-300 ${openFAQ === 2 ? 'rotate-45' : ''}`}>
                    {openFAQ === 2 ? '×' : '+'}
                  </span>
                </div>
              </div>
              {openFAQ === 2 && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    It&apos;s simple! We&apos;ll schedule a 10-minute video call where you&apos;ll show us your car using your smartphone. We&apos;ll guide you through showing specific areas, and you&apos;ll receive your final offer instantly after the call.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="bg-gray-50 px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(3)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-gray-900">Is there any cost or obligation to get an offer?</h4>
                  <span className={`text-2xl text-orange-500 font-bold transition-transform duration-300 ${openFAQ === 3 ? 'rotate-45' : ''}`}>
                    {openFAQ === 3 ? '×' : '+'}
                  </span>
                </div>
              </div>
              {openFAQ === 3 && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely not! Getting an offer is completely free and there&apos;s no obligation to sell. You can get multiple offers and compare them before making any decision. We want you to feel confident in your choice.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="bg-gray-50 px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(4)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-gray-900">What happens after I get an offer?</h4>
                  <span className={`text-2xl text-orange-500 font-bold transition-transform duration-300 ${openFAQ === 4 ? 'rotate-45' : ''}`}>
                    {openFAQ === 4 ? '×' : '+'}
                  </span>
                </div>
              </div>
              {openFAQ === 4 && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Once you accept an offer, we&apos;ll schedule the pickup and handle all the paperwork. We&apos;ll come to your location, complete the transaction, and you&apos;ll get paid immediately. The entire process typically takes 24-48 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Orange Final CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              SHOPPING AROUND? WE PAY THE MOST!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get multiple offers and see for yourself - we consistently offer the highest prices for your vehicle.
            </p>
            <a href="#hero" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-xl transition-colors inline-block">
              GET YOUR OFFER NOW
            </a>
          </div>
        </div>
      </section>

      {/* Latest Blog & News */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Latest Blog & News</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="text-4xl mb-2">🔧</div>
                  <div className="text-sm font-semibold">Car Repairs</div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold">15 min read</span>
                <h4 className="font-semibold mb-2 mt-2 text-black">Efficient repairs, reliable Results, every time here</h4>
                <p className="text-gray-600 text-sm mb-4">Learn about the most important repairs that can affect your car&apos;s value...</p>
                <p className="text-orange-500 text-sm font-semibold">READ MORE</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="text-4xl mb-2">🚗</div>
                  <div className="text-sm font-semibold">Car Service</div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold">15 min read</span>
                <h4 className="font-semibold mb-2 mt-2 text-black">We&apos;ll get your car back on the road</h4>
                <p className="text-gray-600 text-sm mb-4">Find out how we handle car purchases and what makes our process different...</p>
                <p className="text-orange-500 text-sm font-semibold">READ MORE</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-sm font-semibold">Car Value</div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold">15 min read</span>
                <h4 className="font-semibold mb-2 mt-2 text-black">Quality repairs for your car at affordable prices</h4>
                <p className="text-gray-600 text-sm mb-4">Discover tips for maintaining your vehicle&apos;s value before selling...</p>
                <p className="text-orange-500 text-sm font-semibold">READ MORE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-black text-white">
        <div className="py-12 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold mb-4 md:mb-0">SUPPORT@CARTRACKERS.COM</div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CT</span>
                  </div>
                  <span className="text-xl font-bold">car trackers</span>
                </div>
                <p className="text-gray-400 mb-4">
                  The fastest and most convenient way to sell your car online.
                </p>
                <p className="text-gray-400 mb-2">Support 24/7</p>
                <p className="text-gray-400">123 Auto Street, Car City, CC 12345</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">ABOUT US</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">About us</a></li>
                  <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                  <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                  <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">SERVICES</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Partners</a></li>
                  <li><a href="#" className="hover:text-orange-500">Valuations</a></li>
                  <li><a href="#" className="hover:text-orange-500">Financing</a></li>
                  <li><a href="#" className="hover:text-orange-500">Car Rental</a></li>
                  <li><a href="#" className="hover:text-orange-500">Car Export</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">CONTACT</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                  <li><a href="#" className="hover:text-orange-500">Support</a></li>
                  <li><a href="#" className="hover:text-orange-500">Feedback</a></li>
                </ul>
                
                <h4 className="font-semibold mb-4 mt-6">DISCOVER MORE</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Our Team</a></li>
                  <li><a href="#" className="hover:text-orange-500">Reviews</a></li>
                  <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
                  <li><a href="#" className="hover:text-orange-500">Sitemap</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 CAR TRACKERS. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-orange-500">📘</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">🐦</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">📷</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">💼</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
