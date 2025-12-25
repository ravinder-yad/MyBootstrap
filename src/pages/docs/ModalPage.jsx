import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { AppWindow, X } from 'lucide-react';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <DocLayout
            title="Modal"
            description="Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content."
        >

            {/* 1. LIVE DEMO */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AppWindow size={24} /> Live Demo</h2>
                <p className="text-muted-foreground mb-4">
                    Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <button
                        className="btn btn-primary px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        Launch demo modal
                    </button>

                    {/* Modal Mockup */}
                    {showModal && (
                        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setShowModal(false)}>
                            <div className="modal-dialog relative w-full max-w-lg bg-card border border-border rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-content">
                                    <div className="modal-header flex items-center justify-between p-4 border-b border-border">
                                        <h5 className="modal-title font-medium text-lg">Modal title</h5>
                                        <button type="button" className="btn-close text-muted-foreground hover:text-foreground" onClick={() => setShowModal(false)} aria-label="Close">
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <div className="modal-body p-4 text-muted-foreground">
                                        Woohoo, you're reading this text in a modal!
                                    </div>
                                    <div className="modal-footer flex gap-2 justify-end p-4 border-t border-border">
                                        <button type="button" className="btn btn-secondary px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors" onClick={() => setShowModal(false)}>Close</button>
                                        <button type="button" className="btn btn-primary px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <CodeBlock language="html" code={`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`} />
            </section>

            {/* 2. STATIC BACKDROP */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Static Backdrop</h2>
                <p className="text-muted-foreground mb-4">
                    When backdrop is set to static, the modal will not close when clicking outside of it.
                </p>
            </section>

        </DocLayout>
    );
};

export default ModalPage;
