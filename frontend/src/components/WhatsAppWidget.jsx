import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { profile } from '../data/mock';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Argha! I found your portfolio and would like to discuss a project.`
    );
    window.open(`https://wa.me/${profile.whatsapp}?text=${message}`, '_blank');
  };

  if (!showWidget) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-2 animate-fade-in-up">
          <div className="bg-white dark:bg-card rounded-lg shadow-xl p-4 max-w-xs border border-border">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Chat with me!</p>
                <p className="text-xs text-muted-foreground mb-3">
                  Have questions about .NET or AI integration? Let's chat on WhatsApp!
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-xs bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#20BA5A] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3 h-3" />
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;