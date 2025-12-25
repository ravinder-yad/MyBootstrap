import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Menu, Search } from 'lucide-react';

const NavbarPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <DocLayout
            title="Navbar"
            description="Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Menu size={24} /> Supported Content</h2>
                <p className="text-muted-foreground mb-4">
                    Navbars can contain built-in support for a handful of sub-components. Choose from the following as needed:
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <nav className="navbar navbar-expand-lg bg-muted/20 border border-border rounded-lg p-4">
                        <div className="container-fluid flex items-center justify-between flex-wrap">
                            <a className="navbar-brand font-bold text-lg" href="#">Navbar</a>
                            <button
                                className="navbar-toggler md:hidden border p-1 rounded"
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <Menu size={24} />
                            </button>
                            <div className={`md:flex w-full md:w-auto items-center ${isMenuOpen ? 'block' : 'hidden md:block'}`} id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0 flex flex-col md:flex-row gap-4 text-sm font-medium">
                                    <li className="nav-item">
                                        <a className="nav-link active text-primary" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted-foreground hover:text-foreground transition-colors" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled text-muted-foreground/50" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form className="flex gap-2 ml-4 mt-4 md:mt-0">
                                    <input className="form-control p-2 text-sm border border-border rounded-md bg-background focus:ring-1 focus:ring-primary outline-none" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success border border-green-500 text-green-600 dark:text-green-400 px-4 py-1 rounded-md hover:bg-green-500 hover:text-white transition-colors" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>

                <CodeBlock language="html" code={`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`} />
            </section>

            {/* 2. COLOR SCHEMES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Color Schemes</h2>
                <p className="text-muted-foreground mb-4">
                    Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4 space-y-4">
                    <nav className="navbar navbar-dark bg-primary text-primary-foreground p-4 rounded-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand font-bold" href="#">Navbar</a>
                        </div>
                    </nav>
                    <nav className="navbar navbar-dark bg-black text-white p-4 rounded-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand font-bold" href="#">Navbar</a>
                        </div>
                    </nav>
                </div>
            </section>

        </DocLayout>
    );
};

export default NavbarPage;
