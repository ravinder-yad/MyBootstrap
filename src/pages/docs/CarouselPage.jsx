import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { AppWindow, ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselPage = () => {
    // Mock state for carousel interaction
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        "https://via.placeholder.com/800x400/777/fff?text=First+slide",
        "https://via.placeholder.com/800x400/666/fff?text=Second+slide",
        "https://via.placeholder.com/800x400/555/fff?text=Third+slide"
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <DocLayout
            title="Carousel"
            description="A slideshow component for cycling through elements—images or text slides—like a carousel."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AppWindow size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Carousels don't automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to properly size content.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div id="carouselExample" className="carousel slide relative rounded-xl overflow-hidden shadow-sm" data-bs-ride="carousel">
                        <div className="carousel-inner relative w-full overflow-hidden">
                            {slides.map((slide, index) => (
                                <div key={index} className={`carousel-item relative float-left w-full transition-transform duration-600 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}>
                                    <img src={slide} className="d-block w-full" alt="..." />
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 bg-black/20 hover:bg-black/40 text-white w-[15%]"
                            type="button"
                            onClick={prevSlide}
                        >
                            <ChevronLeft size={32} />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 bg-black/20 hover:bg-black/40 text-white w-[15%]"
                            type="button"
                            onClick={nextSlide}
                        >
                            <ChevronRight size={32} />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`} />
            </section>

            {/* 2. WITH CAPTIONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">With Captions</h2>
                <div className="bg-muted p-4 rounded-lg border border-border text-sm mb-4">
                    You can add captions to your slides with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.
                </div>
            </section>

        </DocLayout>
    );
};

export default CarouselPage;
